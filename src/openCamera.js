function openCamera() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(function(stream) {
    const video = document.getElementById('localStream')
    video.srcObject = stream;
    video.onloadedmetadata = function() {
      video.play();
    }
  });
}

module.exports = openCamera