const socket = io()  //websocket api
const messages = document.querySelector('#chat-message')
const chatUserName = document.querySelector('#chat-username')
const chatForm = document.querySelector('form')
const chatMessage = document.querySelector('#chat-message')
const chatDisplay = document.querySelector('.chat-display')
//server broadcast

socket.on('updateMessage',(data) => {
    let newMessage =document.createElement('p');
    if (chatUserName.value === data.username){
        newMessage.className = "bg-primary chat-text"
    } else{
        newMessage.className = "bg-dark chat_text"
    }
    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild)




})
//emit message to server
chatForm.addEventListener('submit',(e) => {
    e.preventDefault();
    //retrieve message from chat input field
    //chat.value
    //take socket object and emit message to node server socket.emit()
    console.log(chatUserName.value, chatMessage.value);
    socket.emit('postMessage',{
        username: chatUserName.value,
        message: chatMessage.value

    })
    
})