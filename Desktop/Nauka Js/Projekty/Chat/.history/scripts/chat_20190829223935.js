class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
    async addC
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom)