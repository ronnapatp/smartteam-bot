const Discord = require('discord.js')
const bot = new Discord.Client();


bot.on("ready" , function(){
    console.log('Logged is as ${bot.user.tag}!!');
    bot.user.setActivity('!help')
});

bot.on("message" , msg => {
    if (msg.content === 'hello'){
        msg.reply('Hello bro');
    }
})

bot.on("message" , msg => {
    if (msg.content === 'command'){
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#3498DB')
	.setTitle('COMMAND')
    .addField('contact :' , 'Smart team contact')
	.addField('facebook :' , 'Smart team facebook')
    .addField('instagram :' ,'Smart team instagram')
    .addField('twitter :' ,'Smart team twitter')
    .addField('youtube :' ,'Smart team youtube')
    .addField('info :' ,'Smart team information')
    .addField('github :' , 'Smart team bot code by github')
    .addField('inviteme :' , 'Link to invite smart team bot')
    .addField('invention :' , 'Our invention')
    .addField('command :' , 'Show this massage')
	.setTimestamp()
	.setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

msg.channel.send(exampleEmbed);
    }
})


bot.on("message" , msg => {
    if (msg.content === 'invention'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team Invention')
        .setDescription('This page is not avilable')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})
bot.on("message" , msg => {
    if (msg.content === 'contact'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team contact')
        .setDescription('This page is not avilable')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})
bot.on("message" , msg => {
    if (msg.content === 'info'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team info')
        .setDescription('This page is not avilable')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
    
})
bot.on("message" , msg => {
    if (msg.content === 'inviteme'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team bot link invite')
        .addField('Invite link :' ,'https://discord.com/oauth2/authorize?client_id=845168117990162442&permissions=0&scope=bot')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})

bot.on("message" , msg => {
    if (msg.content === 'github'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team github')
        .setDescription('Read READ ME in github before do anything')
        .addField('Contribute @ github:' ,'https://github.com/ronnapatsri/smartteam-bot')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})
bot.on("message" , msg => {
    if (msg.content === 'facebook'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team facebook')
        .setDescription('อย่าลืมกดไลค์Pageด้วยละ')
        .addField('Facebook page :' ,'https://www.facebook.com/smartteaminnovationgroup55/')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);

    }
})
bot.on("message" , msg => {
    if (msg.content === 'twitter'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team twitter')
        .setDescription('Smart team ยังไม่มี Twitter')
        .addField('Twitter :' ,'ยังไม่มีจ้าาาาา')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})
bot.on("message" , msg => {
    if (msg.content === 'instagram'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Smart team instagram')
        .setDescription('Smart team ยังไม่มี Instagram')
        .addField('Instagram :' ,'ยังไม่มีจ้าาาา')
        .setTimestamp()
        .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');

        msg.channel.send(exampleEmbed);
    }
})
bot.on("message" , msg => {
    if (msg.content === 'youtube'){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Smart team youtube')
            .setDescription('Smart team ยังไม่มี Youtube')
            .addField('Youtube :' ,'ยังไม่มีจ้าาาา')
            .setTimestamp()
            .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');
    
            msg.channel.send(exampleEmbed);
    }
})

bot.on("message" , msg => {
    if (msg.content === '!help'){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Smart team help')
            .setDescription('Contact admin')
            .addField('ADMIN :' ,'CEO')
            .setTimestamp()
            .setFooter('Contribute @ github: https://github.com/ronnapatsri/smartteam-bot');
    
            msg.channel.send(exampleEmbed);
    }
})






bot.login('')
