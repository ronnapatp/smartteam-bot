const Discord = require('discord.js')
const bot = new Discord.Client();


bot.on("ready" , function(){
    console.log('Logged is as ${bot.user.tag}!!');
    bot.user.setActivity('!help')
});


bot.login('ODQ1MTY4MTE3OTkwMTYyNDQy.YKdCJQ.SR4G7MCTMO524dbY8-k6JMhM8So')