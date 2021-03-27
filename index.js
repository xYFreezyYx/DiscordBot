const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.login(config.token);

client.on("ready", () => {
    client.user.setActivity('discord.js', { type: 'Playing' })
})

client.on("message", msg => {
    if(msg.content == "!Saturday C#"){ 
        msg.channel.send("13:00 / 1 p.m.");
    }
    else if(msg.content == "!Thursday C#"){
        msg.channel.send("17:00 / 5 p.m.");
    }      
})

