
const server_url=`ws://localhost:3000`
const ws= new WebSocket(server_url)
let json;

const chatform= $("#chat-form");
const chatMsg= $('#message');
const recieved_msg=""
chatform.submit(e =>{
    e.preventDefault();
    const msg=chatMsg.val();
    sendMessage(msg);
        
    chatMsg.val("");
    chatMsg.focus();
})
function sendMessage(msg) {
    ws.onopen(msg)
}
ws.onopen=function(msg){
    ws.send(JSON.stringify(msg));
}

ws.addEventListener('message',(e) =>{
    let chatValue;
    if(JSON.parse((e.data)) instanceof Object){
        json=null
    }else{
        json=JSON.parse((e.data))
    }
    if(json!=null){
        chatValue=
        `<div class="chat host">
            <div class="details">
                <p>${json }</p>
            </div>
        </div>`
    }else{
        chatValue=``
    }
        

    $('#chat-box').append(chatValue);
    let chatBox = document.querySelector("#chat-box")
    chatBox.scrollTop = chatBox.scrollHeight
})
