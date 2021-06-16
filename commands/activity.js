const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args) {
        message.channel.send('The correct syntax is: <!activity STEAM_0:X:XXXXXXXXX>');
    }
    else {
        message.channel.send('This is where we check if args are valid');
    }
}

module.exports.help = {
    name:"activity"
}
