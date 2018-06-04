const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

let prefix = config.prefix;

bot.on('ready', () => {
    console.log(`fapbot online`);
    bot.user.setActivity(`you`, {type: 'WATCHING'});
    bot.user.setStatus('dnd')
  });

bot.on("message", message => {


    if (!message.content.startsWith(prefix)) return;

    let args = message.content.split(" ").slice(1);

    if (message.content.startsWith(prefix + "fap")) {

        if (!args.join(" ")) return message.reply("I cannot complete this command due to there being no args. Usage: f!fap <args>")
        message.channel.send(`${message.author} is now fapping off to ${args.join(" ")}. Have fun!`);
    
    } else if (message.content.startsWith(prefix + "handjob")) { 
        if (!message.mentions.users.first()) return message.reply("You did not mention a user")
        message.channel.send(`${message.author} is now giving ${message.mentions.users.first()} a handjob! Have fun you gay duo.`)
    
    } else if (message.content.startsWith(prefix + "catch")) {
        if (!message.mentions.users.first()) return message.reply("You did not mention a user")
        message.channel.send(`${message.mentions.users.first()}, you have been caught fapping by ${message.author}! Zip up those pants boio.`)
    
    } else if (message.content.startsWith(prefix + "die")) {
        message.channel.send(`${message.author}, we've all been there, there's always someone to talk to when you need it.`)

    } else if (message.content.startsWith(prefix + "jayden")) {
        message.channel.send(`<@209395113485402123> get the fuck out of the movies`)

    } else if (message.content.startsWith(prefix + "ban")) {
        let reason = args.slice(1).join(" ");
            let user = message.mentions.users.first();
            let logchannel = message.guild.channels.find("name", "fapbot-logs")
    
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("you don't have perms ban_members")
            if (!logchannel) return message.reply("no log channel found. make a channel named `fapbot-logs`")
            if (message.mentions.users.size < 1) return message.channel.send("no mention")
            if (reason.length < 1) return message.channel.send("no reason")
    
            if (!message.guild.member(user).bannable) return message.channel.send("user not bannable")
        message.guild.member(user).ban(reason);
       const embed = new Discord.RichEmbed()
        .setTitle(`User Banned`)
        .setDescription(`User has been banned from the server.`)
        .setColor(`#ff0000`)
        .addField(`User Tag`, user.tag)
        .addField(`User ID`, user.id)
        .addField(`Reason`, reason)
        bot.channels.get(logchannel.id).send({embed: embed})
    
        }
    
    
});




bot.login(config.token)
