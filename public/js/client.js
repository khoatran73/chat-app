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
    
    const chatValue=
    `<div id="receiver" class="chat receiver">
        <div id="chat-item-receiver" class="details">
            <p>${message.message}</p>
        </div>
    </div>`
    $('#chat-box').append(chatValue);
    
})

