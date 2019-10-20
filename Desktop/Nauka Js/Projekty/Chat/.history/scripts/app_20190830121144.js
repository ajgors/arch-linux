//dom queries
const chatList = document.querySelector('.chat-list');
const newChatFrom = document.querySelector('.new-chat')


//add a new chat

newChatFrom.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatFrom.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatFrom.reset())
        .catch(err => console.log(err))
})

//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', 'shaun');

//get chats and render
chatroom.getChats(data =>chatUI.render(data));




