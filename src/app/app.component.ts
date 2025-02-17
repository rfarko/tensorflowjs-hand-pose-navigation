import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HandGestureService } from './services/hand-gesture.service';
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  selected = 0;

  swipe$ = this.handGestureSvc.swipe$;
  fingers$: Observable<String>;

  constructor(private handGestureSvc: HandGestureService) { }

  get stream(): MediaStream {
    return this.handGestureSvc.stream;
  }

  ngOnInit() {
    this.fingers$ = this.handGestureSvc.gesture$.pipe(
      tap((gesture: String) => {
        switch (gesture) {
          case '1':
            this.selected = 1;
            break;
          case '2':
            this.selected = 2;
            break;
          case '3':
            this.selected = 3;
            break;
          case 'ok':
          case 'cancel':
            this.selected = 0;
            break;
        }
      })
    );
  }

  toggle(index: number) {
    this.selected = index;
  }

  ngAfterViewInit(): void {
    this.handGestureSvc.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
  }

  ngOnDestroy() {
    this.handGestureSvc.stopStreaming()
  }
}

