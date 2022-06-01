const openCamera = require('./openStream')
const Peer = require('simple-peer')

// openCamera()

const $ = require('jquery')

const p = new Peer({ initiator: location.hash === '#1', trickle: false })

p.on('error', err => console.log('error', err))

p.on('signal', token => {
  console.log(token);
  $("#txtMySignal").val(JSON.stringify(token))
})

p.on('connect', () => {
  console.log('connected')
  setInterval(() => p.send(Math.random()), 2000)
})

p.on('data', data => {
  // got a data channel message
  console.log('NHAN DU LIEU: ' + data)
})

$('#btnConnect').on('click', () => {
  console.log('cclicked')
  const friendSignal = JSON.parse($("#txtFriendSignal").val())
  console.log(friendSignal)
  p.signal(friendSignal)
})


console.log('huhhu')
