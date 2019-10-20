//dom queries
const chatList = document.querySelector('.chat-list');



//class instance
const chatUI= new chatUI(chatList)
const chatroom = new Chatroom('gaming', 'shaun');

//get chats and render
chatroom.getChats((data) =>{
    console.log(data)
})

