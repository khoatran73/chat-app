const socket = io();
const chatForm = $("#chat-form");
const chatMsg = $('#message');
chatForm.submit(e => {
    e.preventDefault();
    const msg = chatMsg.val();
    socket.emit('on-chat', { message: msg });
    chatMsg.val("");
    chatMsg.focus();
})
<<<<<<< HEAD
socket.on('user1',message=>{
    outputMessage(message);
    
})

function outputMessage(message){
    const chatValue=
    `<div class="chat host">
        <div class="details">
=======
socket.on('user1', message => {

    const chatValue =
        `<div class="chat host">
        <div id="chat-item-host" class="details">
>>>>>>> 075c542e4e2dd66342cecc1da86fb941bcff13aa
            <p>${message.message}</p>
        </div>
    </div>`
    $('#chat-box').append(chatValue);
<<<<<<< HEAD
    let chatBox = document.querySelector("#chat-box")
    chatBox.scrollTop = chatBox.scrollHeight
}
=======

    // scroll bottom
    let chatBox = document.querySelector("#chat-box")
    chatBox.scrollTop = chatBox.scrollHeight

})
>>>>>>> 075c542e4e2dd66342cecc1da86fb941bcff13aa

