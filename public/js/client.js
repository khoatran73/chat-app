

(function () {
    let chatBox = document.querySelector("#chat-box")

    if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight
    }

    const chatForm = $("#chat-form");
    const chatMsg = $('#message');
    let ws;
    init();

    function show_receiveMessage(messages) {
        let src = $("#guest-img").attr('src')
        $('#chat-box').append(
            `<div class="chat guest">
                <div class="avatar">
                    <img src="${src}" alt="">
                </div>
                <div class="details">
                    ${messages.message}
                    <div class="time">
                        ${messages.createdAt}                                
                    </div>
                </div>
        </div>`)
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight
        }
    }

    function show_sendMessage(message, createdAt) {
        $('#chat-box').append(
            `<div class="chat host">
            <div class="details">
                ${message}
                <div class="time">
                    ${createdAt}                                
                </div>
            </div>
        </div>`)
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight
        }
    }

    function init() {
        if (ws) {
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }

        const server_url = `ws://localhost:3000`
        ws = new WebSocket(server_url)
        ws.onopen = () => {
            console.log('Connecting to server')
        }

        ws.onmessage = (json) => {
            let messages = JSON.parse(json.data)
            show_receiveMessage(messages)

        }
        ws.onclose = function () {
            ws = null;
        }

        chatForm.submit(e => {
            e.preventDefault();
            if (!ws) {
                console.log('No socket')
                return;
            }

            let date = new Date

            let createdAt
            if (date.getMinutes() <= 9) {
                createdAt = date.getHours() + ":0" + date.getMinutes() + " " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
            } else {
                createdAt = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
            }

            let jsonMessage = {
                host_email: $("#host_email").val(),
                guest_email: $("#guest_email").val(),
                guest_id: window.location.search.split("?id=")[1],
                message: chatMsg.val(),
                createdAt: createdAt
            }

            ws.send(JSON.stringify(jsonMessage))
            show_sendMessage(chatMsg.val(), createdAt)
            chatMsg.val("");
            chatMsg.focus();
        })
    }
})();