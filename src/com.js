var socket = io();

socket.on('connect', function(){
    var name = prompt('대화명을 입력해주세요.', '');
    socket.emit('newUserConnect', name);
});