//dom queries
const chatList = document.querySelector('.chat-list');
const newChatFrom = document.querySelector('.new-chat')
const newNameFrom = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')


//add a new chat

newChatFrom.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatFrom.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatFrom.reset())
        .catch(err => console.log(err))
});

//update udername 

newNameFrom.addEventListener('submit', e=>{
    e.preventDefault();
    //update name via chatroom
    const newName = newNameFrom.name.value.trim();
    chatroom.updateName(newName);
    //reset form 
    newNameFrom.reset()
    //show then hide the update mssg
});



//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', 'shaun');

//get chats and render
chatroom.getChats(data =>chatUI.render(data));




