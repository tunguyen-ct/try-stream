const playVideo = require("./playVideo");
const Peer = require('simple-peer')
const $ = require('jquery')

function openCamera() {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: true,
    })
    .then(function (stream) {
      playVideo(stream, "localStream");

      const p = new Peer({ initiator: location.hash === "#1", trickle: false, stream });

      p.on("signal", (token) => {
        $("#txtMySignal").val(JSON.stringify(token));
      });

      $("#btnConnect").on("click", () => {
        const friendSignal = JSON.parse($("#txtFriendSignal").val());
        p.signal(friendSignal);
      });

      p.on("stream", (stream) => {
        playVideo(stream, "friendStream");
      });
    });
}

module.exports = openCamera;
