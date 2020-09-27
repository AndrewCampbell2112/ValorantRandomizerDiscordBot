const Discord = require('discord.js');
const bot = new Discord.Client();

const token = INSERT YOUR DISCORD BOT TOKEN HERE;

const PREFIX = '-';

var maps = ["ASCENT", "BIND", "HAVEN", "SPLIT"];

var commands = ["ping", "random", "all", "coin"];


bot.on('ready', () =>{
  console.log('This bot is online');
})

bot.on('message', msg =>{
  if(msg.author.bot) return;
  let args = msg.content.substring(PREFIX.length).split(" ");
  if (msg.content == "-help")
  {
    msg.reply(("\r\n") + 'Here is a list of commands: ```' + ("\r\n") + " -" + commands.join("\r\n -") + '```');
  }
  else if (msg.content == "-help ping")
  {
    msg.reply('Ping and Pong with the bot');
  }
  else if (msg.content == "-help random")
  {
    msg.reply('Selects a random map from the list of available maps');
  }
  else if (msg.content == "-help all")
  {
    msg.reply('Displays a list of all the avilable maps');
  }
  else if (msg.content == "-ping")
  {
    msg.reply(("\r\n") + 'Pong');
  }
  else if (msg.content == "-random")
  {
    msg.reply(("\r\n") + "Your randomly chosen map is: ```" + ("\r\n") + " - " + randomMap() + '```');

  }
  else if (msg.content == "-all")
  {
    msg.reply(("\r\n") + 'Here is a list of maps: ```' + ("\r\n") + " - " + maps.join("\r\n - ") + '```')
  }
  else if (msg.content == "-coin")
  {
    msg.reply(("\r\n") + 'Coin toss ended in: ```' + ("\r\n") + " - " + coinToss() + '```')
  }
})

function randomMap()
{
  var randomMap = Math.round(Math.random() * 3);
  var holder = "";
  for (var i = 0; i <= maps[randomMap].length; i++)
  {
    holder += maps[randomMap].charAt(i);
  }
  holder = holder.toLowerCase();
  holder = holder.charAt(0).toUpperCase() + holder.slice(1);
  return holder;
}

function coinToss()
{
  var coin = Math.round(Math.random() * (2-1) + 1);
  if (coin == 1)
  {
    return "Heads"
  }
  return "Tails"
}

bot.login(token);
