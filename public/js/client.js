

(function(){
    let chatBox = document.querySelector("#chat-box") 
    chatBox.scrollTop = chatBox.scrollHeight
    const chatform= $("#chat-form");
    const chatMsg= $('#message');
    let ws;
    function show_receiveMessage(message){
        $('#chat-box').append(
        `<div class="chat guest">
            <div class="details">
                <p>${message}</p>
            </div>
        </div>`)
        chatBox.scrollTop = chatBox.scrollHeight
    }
    function show_sendMessage(message){
        $('#chat-box').append(
        `<div class="chat host">
            <div class="details">
                <p>${message}</p>
            </div>
        </div>`)
        chatBox.scrollTop = chatBox.scrollHeight
    }
    function init(){
        
        if(ws){
            ws.onerror=ws.onopen=ws.onclose=null;
            ws.close();
        }

        const server_url=`ws://localhost:3000`
        ws= new WebSocket(server_url)
        ws.onopen=()=>{
            console.log('Connecting to server')
        }
        ws.onmessage=({data})=>{
            show_receiveMessage(data)
        }
        ws.onclose=function(){
            ws=null;
        }
        chatform.submit(e =>{
            e.preventDefault();
            if(!ws){
                show_sendMessage('No websocket connection')
                return ;
            }
            ws.send(JSON.stringify(chatMsg.val()))
            show_sendMessage(chatMsg.val())
            chatMsg.val("");
            chatMsg.focus();
            
        })
        
    }
    init();

})();