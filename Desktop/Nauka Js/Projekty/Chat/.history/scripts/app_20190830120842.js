//dom queries
const chatList = document.querySelector('.chat-list');
const newChatFrom = document.querySelector('.new-chat')


//add a new chat

newChatFrom.addEventListener('submit', e=>{
    e.preventDefault();
    
})

//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', 'shaun');

//get chats and render
chatroom.getChats(data =>chatUI.render(data));




