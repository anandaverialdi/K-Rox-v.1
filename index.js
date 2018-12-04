const Discord = require('discord.js');

const TOKEN = 'NTE5MjkxNjA2NjYzNDMwMTcy.DudgzQ.8FH_9i9x-cJlFfQ9HyavhKTMgQI';

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "P") {
        message.channel.sendMessage("Ape cing?");
    }
bot.on("message", function(message) {
        if (message.author.equals(bot.user)) return;
    
        if (message.content == "Hallo") {
            message.channel.sendMessage("Hai");
        }
});

bot.login(TOKEN);
