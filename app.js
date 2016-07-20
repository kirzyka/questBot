var TelegramBot = require('node-telegram-bot-api');
 
var token = '244029548:AAF3IGPsqAOLOV-Y1_IrgUUr0FThHXo4A00';
var botOptions = {
    polling: true
};
var bot = new TelegramBot(token, botOptions);
var users = [];
 
bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});
 
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from;

    addUser(messageUsr);
 
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!');
    }
});
 
function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}

function addUser(user) {
    var _user, 
        i = 0;

    for(; i < users.length; i++) {
        _user = users[i];
        if(_user.id === user.id) {
            return;
        }        
    }
    users.push(user);
    console.log(users);
}