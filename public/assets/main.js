var socket = io.connect();

$(document).ready(function(){

  $('#on').on('click', function(){
    socket.emit('led:on');
    console.log('LED ON');
  })

  $('#off').on('click', function(){
    socket.emit('led:off');
    console.log('LED OFF');
  })

});
