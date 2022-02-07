
const video = document.querySelector("video");
const constraints = {
video:true,
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  video.srcObject = stream;
});



const captureVideoButton = document.getElementById(
  "#capture-button"
);
const screenshotButton = document.getElementById("#screenshot-button");

const img = document.getElementById("#screenshot-img");

const videos = document.getElementById("#screenshot-video");

const canvas = document.createElement("canvas");

captureVideoButton.onclick = function () {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
};

screenshotButton.onclick = videos.onclick = function () {
  canvas.width = videos.videoWidth;
  canvas.height = videos.videoHeight;
  canvas.getContext("2d").drawImage(videos, 0, 0);
  // Other browsers will fall back to image/png
  img.src = canvas.toDataURL("image/webp");
};

function handleSuccess(stream) {
  screenshotButton.disabled = false;
  video.srcObject = stream;
}
// function siva(){
// console.log('siva')
// }

// captureVideoButton.onclick=siva;
// screenshotButton.onclick=siva;