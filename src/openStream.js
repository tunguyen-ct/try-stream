const playVideo = require('./playVideo')

function openCamera() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(function(stream) {
    playVideo(stream, 'localStream')
  });
}

module.exports = openCamera