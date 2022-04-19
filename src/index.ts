import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import { Client, Intents, Message, Typing } from "discord.js"
import { config } from "dotenv"
// config()
console.log(process.env.TOKEN)

console.log("HELLO MUWM")

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING
]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
});
  
client.on("messageCreate",async (msg:Message<boolean>) => {
    console.log("message")
    if (msg.author.bot) {
        return
    }
    const member = msg.member
    if (!member) {
        return
    }
    const content = msg.content
    if (!content.startsWith(".")) {
        return
    }
    const text = content.slice(1)
    const text_cmd = text.split(" ")
    if (text_cmd[0] == "pi") {
        let digits = 1000
        if (text_cmd.length > 1) {
            digits = parseInt(text_cmd[1])
        }
        const reply = `${process.env.PI!.slice(0, digits + 1)}`
        if (reply.length < 2000) {
            if (reply.length <= 0) {
                msg.reply("YOU CRAZY FUCKTARD CLOWN WTF WERE YOU TRYING TO DO THERE :clown: ")
                return
            }
            msg.reply(reply)
        }
        else {
            msg.reply("Too long baby :clown: ")
        }
    }
    console.log(content)

})

client.on("typingStart",async typing => {
    console.log("typingStart")
})
  
client.login(process.env.TOKEN);