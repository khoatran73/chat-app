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
socket.on('user1', message => {

    const chatValue =
        `<div class="chat host">
        <div id="chat-item-host" class="details">
            <p>${message.message}</p>
        </div>
    </div>`
    $('#chat-box').append(chatValue);

    // scroll bottom
    let chatBox = document.querySelector("#chat-box")
    chatBox.scrollTop = chatBox.scrollHeight

})

