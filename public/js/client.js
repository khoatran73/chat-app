const socket= io();
const chatform= $("#chat-form");
const chatMsg= $('#message');
chatform.submit(e =>{
    e.preventDefault();
    const msg=chatMsg.val();
    socket.emit('on-chat',{message:msg});
    chatMsg.val("");
    chatMsg.focus();
})
socket.on('user1',message=>{
    outputMessage(message);
    
})

function outputMessage(message){
    const chatValue=
    `<div class="chat host">
        <div class="details">
            <p>${message.message}</p>
        </div>
    </div>`
    $('#chat-box').append(chatValue);
    let chatBox = document.querySelector("#chat-box")
    chatBox.scrollTop = chatBox.scrollHeight
}

