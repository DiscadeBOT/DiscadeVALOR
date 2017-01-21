/*Constants*/
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-"
const server = "Nights Of Valor"
const invitelink = "https://discord.gg/4suNThV"
const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");
const answers = ["99%", "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it."];
/*Listeners*/
//Add&leave
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome **${member.user.username}** to **${guild.name}**!`);
});
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Aww.. Player **${member.user.username}** has __Left__ **${guild.name}**!`);
});
//Game
client.on('ready', () => {
  console.log('Client is Ready!')
  client.user.setGame('Say ' + prefix + 'help')
});
//Messages
client.on('message', msg => {
  if(msg.author.bot) return;
  if (msg.content.startsWith(prefix + "invite")) {
    msg.reply(" https://discord.gg/4suNThV Use It Wisely on Your Travels!")
}
  if (msg.content.startsWith(prefix + "asl")) {
  let [age, sex, location] = msg.content.split(" ").slice(1);
  msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}
  if (msg.content === prefix + 'skinstealer') {
    msg.channel.sendMessage("`" + prefix + "skinstealer` is currently in development. Please wait for this feature to arrive"/*client.??*/);
}
  if (msg.content.startsWith(prefix + "mc-user")) {
  let [username] = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(" ", {embed: {
            color: 709360,
            author: {
                 name: "User Info For ${username}.",
                icon_url: "https://mcapi.ca/avatar/${username}"
            },
            description: "Bot Statistics... What do You Expect?",
        }});
}
  if (msg.content.startsWith(prefix + "calc")) {
  let [what, pro, pro2] = msg.content.split(" ").slice(1);
  if (what === "m")
    msg.channel.sendMessage(Math.floor((pro) * (pro2)) + ", " + msg.author.username + "!");
  if (what === "d")
    msg.channel.sendMessage(Math.floor((pro) / (pro2)) + ", " + msg.author.username + "!");
  if (what === "a")
    msg.channel.sendMessage(Math.floor((pro) + (pro2)) + ", " + msg.author.username + "!");
  if (what === "s")
    msg.channel.sendMessage(Math.floor((pro) - (pro2)) + ", " + msg.author.username + "!");
  if (what === "")
    msg.channel.sendMessage("Please Enter Your Method. (Example: `-calculator m 1 1` `m` for multiplication, 1 1 for `1x1`.)");
}
  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Bot Statistics",
                icon_url: ""
            },
            description: "Bot Statistics... What do You Expect?",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: Math.round(msg.client.ping) + "ms"
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }
            ]
        }});
  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("My Current Ping Is " + Math.round(msg.client.ping) + "ms, " + msg.author.username + "!");
  }
  if (msg.content.startsWith(prefix + "markdownhelp")) 
    msg.author.sendMessage('Markdowns: ` *Italics* **Bold** ***Italic & Bold*** __Underline__ ~~Strikethrough~~ `');
  if (msg.content.startsWith(prefix + "texthelp")) 
    msg.author.sendMessage('Text Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404368-Text-Chat');
  if (msg.content.startsWith(prefix + "voicehelp")) 
    msg.author.sendMessage('Voice Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404367-Voice-Chat');
  if (msg.content.startsWith(prefix + "2flip")) 
    msg.channel.sendMessage('┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻');
  if (msg.content.startsWith(prefix + "lenny")) 
    msg.channel.sendMessage('( ͡° ͜ʖ ͡°)');
  if (msg.content.startsWith(prefix + "askant")) 
    msg.reply(`:ant: ${answers[Math.floor(Math.random() * answers.length)]}`)
  if (msg.content.startsWith(prefix + "credits")) 
    msg.channel.sendMessage('**Discade** `bot` is a bot by player <@241330918722109441>. If you have concernss, PM me.');
  if (msg.content.startsWith("bee")) 
    msg.channel.sendMessage('You like jazz?');
  if (msg.content.startsWith(prefix + 'help'))
    msg.channel.sendMessage("", {embed: {
            color: 3398526,
            author: {
                 name: "Help Menu for Discade!",
                icon_url: ""
            },
            description: "Need Help? i got you fam :wink:",
            fields: [
                {
                    inline: true,
                    name: "`-markdownhelp`",
                    value: "Recive Help with Markdowns."
                },
                {
                    inline: true,
                    name: "`-voicehelp`",
                    value: "Recive Help With Voice Channels."
                },
                {
                    inline: true,
                    name: "`-texthelp`",
                    value: "Recive Help With Text Channels."
                },    
                {
                    inline: true,
                    name: "`-skinstealer`",
                    value: "Steal Your Friend's Cool Discord Icon!"
                },                           
                {
                    inline: true,
                    name: "`-askant`",
                    value: "Have Fun With Discade's Super Knowledgable ant!!"
                },     
                {
                    inline: true,
                    name: "**More Coming Soon!**",
                    value: "Watch For More Fun"
                }     
            ]
        }});
  if (msg.content.startsWith('embeded'))
    msg.channel.sendMessage("", {embed: {
            color: 2012323,
            author: {
                 name: "Like This!",
                icon_url: ""
            },
            description: "",
            fields: [
            ]
        }});
  if (msg.content.startsWith(prefix + 'ts3'))
    msg.channel.sendMessage("", {embed: {
            color: 2012323,
            author: {
                 name: "Team Speak 3 Server.",
                icon_url: "http://www.teamspeak.com/assets/logos/teamspeak_small.png"
            },
            description: "ts3.NightsOfValor.com",
            fields: [
            ]
        }});
  
  if (msg.content.startsWith(prefix + 'ip'))
    msg.channel.sendMessage("", {embed: {
            color: 2211545,
            author: {
                 name: "Minecraft Server IP.",
                icon_url: "http://img10.deviantart.net/9cc9/i/2011/008/6/1/minecraft_hd_icon___mac___pc_by_hunterkharon-d36qrs5.png"
            },
            description: "play.NightsOfValor.com",
            fields: [
            ]
        }});
  if (msg.content.startsWith(prefix + "trump")) 
    msg.react('👎');
  if (msg.content.startsWith(prefix + 'rules'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Rules!",
                icon_url: ""
            },
            description: "NOV Rules. You Better Follow 'em!",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: ""
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }
            ]
        }});
});
client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'eval'))
    if(msg.author.id !== "241330918722109441") return;
});
client.login('token')
