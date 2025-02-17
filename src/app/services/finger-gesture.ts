import * as fingerpose from 'fingerpose';

// ================================ one finger ===========================
const oneFinger = new fingerpose.GestureDescription('one_finger');
oneFinger.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
oneFinger.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFinger.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFinger.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
oneFinger.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

// ================================ two fingers ===========================
const twoFinger = new fingerpose.GestureDescription('two_finger');
twoFinger.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
twoFinger.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
twoFinger.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
twoFinger.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
twoFinger.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

// ================================ three fingers ===========================
const threeFinger = new fingerpose.GestureDescription('three_finger');
threeFinger.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
threeFinger.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
threeFinger.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
threeFinger.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.FullCurl,
  1.0
);
threeFinger.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);


// ================================ four fingers ===========================
const fourFinger = new fingerpose.GestureDescription('four_finger');
fourFinger.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFinger.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFinger.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFinger.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fourFinger.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.FullCurl,
  1.0
);

// ================================ five fingers ===========================
const fiveFinger = new fingerpose.GestureDescription('five_finger');
fiveFinger.addCurl(
  fingerpose.Finger.Index,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fiveFinger.addCurl(
  fingerpose.Finger.Middle,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fiveFinger.addCurl(
  fingerpose.Finger.Ring,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fiveFinger.addCurl(
  fingerpose.Finger.Pinky,
  fingerpose.FingerCurl.NoCurl,
  1.0
);
fiveFinger.addCurl(
  fingerpose.Finger.Thumb,
  fingerpose.FingerCurl.NoCurl,
  1.0
);

// thumb:
// fourFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.HalfCurl, 0.5);
// fourFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 0.5);
// fourFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalUp, 1.0);
// fourFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // index:
// fourFingDes.addCurl( fingerpose.Finger.Index,  fingerpose.FingerCurl.NoCurl, 1.0);
// fourFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.VerticalUp, 0.75);
// fourFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // middle:
// fourFingDes.addCurl( fingerpose.Finger.Middle,  fingerpose.FingerCurl.NoCurl, 1.0);
// fourFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.VerticalUp, 1.0);
// fourFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.DiagonalUpLeft, 0.75);

// // ring:
// fourFingDes.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);
// fourFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp,  0.75);
// fourFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // pinky:
// fourFingDes.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);
// fourFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.2);
// fourFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // give additional weight to index and ring fingers
// fourFingDes.setWeight(fingerpose.Finger.Index, 2);
// fourFingDes.setWeight(fingerpose.Finger.Middle, 2);
// fourFingDes.setWeight(fingerpose.Finger.Ring, 2);
// fourFingDes.setWeight(fingerpose.Finger.Pinky, 2);



// const fiveFingDes = new fingerpose.GestureDescription('five_finger');

// // thumb:
// fiveFingDes.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);
// fiveFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalUp, 1.0);
// fiveFingDes.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // index:
// fiveFingDes.addCurl( fingerpose.Finger.Index,  fingerpose.FingerCurl.NoCurl, 1.0);
// fiveFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.VerticalUp, 0.75);
// fiveFingDes.addDirection( fingerpose.Finger.Index,  fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // middle:
// fiveFingDes.addCurl( fingerpose.Finger.Middle,  fingerpose.FingerCurl.NoCurl, 1.0);
// fiveFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.VerticalUp, 1.0);
// fiveFingDes.addDirection( fingerpose.Finger.Middle,  fingerpose.FingerDirection.DiagonalUpLeft, 0.75);

// // ring:
// fiveFingDes.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 1.0);
// fiveFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.VerticalUp,  0.75);
// fiveFingDes.addDirection(fingerpose.Finger.Ring, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // pinky:
// fiveFingDes.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 1.0);
// fiveFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.VerticalUp, 0.2);
// fiveFingDes.addDirection(fingerpose.Finger.Pinky, fingerpose.FingerDirection.DiagonalUpLeft, 1.0);

// // give additional weight to index and ring fingers
// fiveFingDes.setWeight(fingerpose.Finger.Thumb, 2);
// fiveFingDes.setWeight(fingerpose.Finger.Index, 2);
// fiveFingDes.setWeight(fingerpose.Finger.Middle, 2);
// fiveFingDes.setWeight(fingerpose.Finger.Ring, 2);
// fiveFingDes.setWeight(fingerpose.Finger.Pinky, 2);


// ================================ thumbs down ===========================
const thumbsDownDescription = new fingerpose.GestureDescription('thumbs_down');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsDownDescription.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalDown, 1.0);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownDescription.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownRight, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [fingerpose.Finger.Index, fingerpose.Finger.Middle, fingerpose.Finger.Ring, fingerpose.Finger.Pinky]) {
  thumbsDownDescription.addCurl(finger, fingerpose.FingerCurl.FullCurl, 1.0);
  thumbsDownDescription.addDirection(finger, fingerpose.FingerDirection.HorizontalLeft, 1.0);
  thumbsDownDescription.addDirection(finger, fingerpose.FingerDirection.HorizontalRight, 1.0);
}


export const GE = new fingerpose.GestureEstimator([
  fingerpose.Gestures.ThumbsUpGesture,
  oneFinger,
  twoFinger,
  threeFinger,
  fourFinger,
  fiveFinger,
  thumbsDownDescription
]);


