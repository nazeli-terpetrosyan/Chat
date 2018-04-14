function main() {
   var socket = io.connect('http://localhost:3000');
   var chatDiv = document.getElementById('messages');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var delete_button = document.getElementById('delete');

   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
   button.onclick = handleSubmit;

function handleMessage(msg) {
   		var p = document.createElement('p');
   		p.innerText = msg;
   		chatDiv.appendChild(p);
   		input.value = "";
}
function sendDelete(){
    socket.emit("delete messages");
}
function handleDelete(){
    var element = document.getElementById('messages');
        element.parentNode.removeChild(element);
}
    delete_button.onclick = sendDelete;
socket.on('display message', handleMessage);
socket.on('delete tags', handleDelete);
} // main closing bracket

window.onload = main;