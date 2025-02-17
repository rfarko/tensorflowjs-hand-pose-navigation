import { Injectable } from "@angular/core";
import * as handpose from '@tensorflow-models/handpose';

import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import { drawPath } from "./hand-renderer";
import { BehaviorSubject } from "rxjs";
import { GE } from './finger-gesture';


type Gesture = '1' | '2' | '3' | '4' | '5' | 'ok' | 'cancel' | 'none';
type Direction = 'left' | 'right' | 'none';
type Size = [number, number];
type Point = [number, number];
type Rect = { topLeft: [number, number]; bottomRight: [number, number] };

const GestureMap = {
    thumbs_up: 'ok',
    one_finger: '1',
    two_finger: '2',
    three_finger: '3',
    four_finger: '4',
    five_finger: '5',
    thumbs_down: 'cancel',
};

@Injectable({
    providedIn: 'root',
})
export class HandGestureService {
    private _swipe$ = new BehaviorSubject<Direction>('none');
    readonly swipe$ = this._swipe$.asObservable();

    private _gesture$ = new BehaviorSubject<Gesture>('none');
    readonly gesture$ = this._gesture$.asObservable();

    private _stream!: MediaStream;
    private _videoSize: Size;
    private _initiated = false;
    private _initialTimestamp = -1;
    private _lastGestureTiemstamp = -1;
    private _lastGesture = null;
    private _emitGesture = true;

    get stream(): MediaStream {
        return this._stream;
    }

    // ============================================================
    initialize(canvas: HTMLCanvasElement, video: HTMLVideoElement): void {
        this._videoSize = [video.width, video.height];
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                this._stream = stream;
                return handpose.load();
            })
            .then((model) => {
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, video.width, video.height);
                context.strokeStyle = 'red';
                context.fillStyle = 'red';

                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                const runDetection = () => {
                    model.estimateHands(video).then((predictions) => {
                        // Render
                        context.drawImage(
                            video,
                            0,
                            0,
                            video.width,
                            video.height,
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        );
                        if (predictions && predictions[0]) {
                            drawPath(predictions, context);
                            this.detectSwipe(predictions[0].boundingBox);
                            this.processGesture(predictions[0].landmarks);
                        }
                        requestAnimationFrame(runDetection);
                    });
                };
                runDetection();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // =============================== Hand Swipe Detection =============================
    private detectSwipe(rect: Rect): void {
        const center = this._findCenter(rect);
        if (this._aroundCenter(center)) {
            this._initialTimestamp = Date.now();
            this._initiated = true;
            this._swipe$.next('none');
            return;
        }
        if (!this._initiated) {
            return;
        }
        if (
            this._inRegion(0, 0.1, center) &&
            this._toSeconds(Date.now() - this._initialTimestamp) < 3
        ) {
            console.log('swiped right');

            this._swipe$.next('right');
            this._initiated = false;
            return;
        }
        if (
            this._inRegion(0.9, 1, center) &&
            this._toSeconds(Date.now() - this._initialTimestamp) < 3
        ) {
            console.log('swiped left');
            this._swipe$.next('left');
            this._initiated = false;
            return;
        }
    }

    //------------------------------------------------
    private _toSeconds(ms: number): number {
        return ms / 1000;
    }

    //------------------------------------------------
    private _findCenter(rect: Rect): Point {
        return [
            rect.topLeft[0] + (rect.topLeft[0] + rect.bottomRight[0]) / 2,
            rect.topLeft[1] + (rect.topLeft[1] + rect.bottomRight[1]) / 2,
        ];
    }

    //------------------------------------------------
    private _aroundCenter(center: Point): boolean {
        return this._inRegion(0.4, 0.6, center);
    }

    //------------------------------------------------
    private _inRegion(start: number, end: number, point: Point): boolean {
        return (
            this._videoSize[0] * start < point[0] &&
            this._videoSize[0] * end > point[0]
        );
    }

    // =============================== Finger Gesture Detection =============================
    private processGesture(landmarks: any): void {

        const { gestures } = GE.estimate(landmarks, 7.5) || [];
        let gesture = null;
        const confidence = gestures.map(
            (prediction) => prediction.confidence
        );
        const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
        );
        gesture = gestures[maxConfidence]?.name;

        if (!gesture && gestures.length) {
            gesture = 'one_finger';
        }
        if (this._lastGesture !== gesture) {
            this._lastGesture = gesture;
            this._lastGestureTiemstamp = Date.now();
            this._emitGesture = true;
        } else {
            if (
                this._emitGesture &&
                this._toSeconds(Date.now() - this._lastGestureTiemstamp) > 1
            ) {
                this._gesture$.next(GestureMap[this._lastGesture]);
                this._emitGesture = false;
            }
        }
    }

    // ============================================================
    public stopStreaming() {
        this._stream.getTracks().forEach(function (track) {
            if (track.readyState == 'live' && track.kind === 'video') {
                track.stop();
            }
        });
    }

} 