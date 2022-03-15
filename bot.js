require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('messageCreate',(message) => {
    if(message.content === 'token') {
        message.reply({
            content: 'skajdashdfjhfj'
        })
    }
})
client.login(process.env.DISCORD_TOKEN);