const Discord = require('discord.js')
const bot = new Discord.Client();


bot.on("ready" , function(){
    console.log('Logged is as ${bot.user.tag}!!');
    bot.user.setActivity('Smart team bot V1.0.0')
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
    if (msg.content === 'อีดอกทอง'){
        msg.reply("เเสงมันจ้าสะเหลือเกินนนนน");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีดอก'){
        msg.reply("อย่าด่ากันดิ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีกระเทย'){
        msg.reply("มึงสิอีกระเทย");
        msg.reply("หยอกๆๆๆๆๆ")
    }
})
bot.on("message" , msg => {
    if (msg.content === 'สวัสดี'){
        msg.reply("สวัสดีนะ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอเหี้ย'){
        msg.reply("เบาได้เบา");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอสัส'){
        msg.reply("สัตว์เเหละ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ควย'){
        msg.reply("เบาได้เบา");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'หี'){
        msg.reply("ชอบมากไหม");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'จังไร'){
        msg.reply("พอเเล้ว");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'จัญไร'){
        msg.reply("พอทีกับคำหยาบ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'เหี้ย'){
        msg.reply("ตัวเงินตัวทองนั้นเเหละ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอเหรี้ย'){
        msg.reply("คนพูดคำหยาบกันเยอะ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'สัส'){
        msg.reply("พิมพ์ผิดปะ สัตว์ อย่างเนี้ย");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'พ่อง'){
        msg.reply("เรีกพ่อนะ สุภาพด้วย");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'พ่อมึงตาย'){
        msg.reply("อย่าไปด่าพ่อคนอื่นดิ คิดดิคิด");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'เแม่มึงตาย'){
        msg.reply("อย่าไปด่าแม่คนอื่นดิ คิดดิคิด");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีส้นตีน'){
        msg.reply("เท้ามันไม่ดีตรงไหน");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีจัญไร'){
        msg.reply("ด่าคนอื่นเพื่อ มันไม่ดี คิดดิคิด");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีหน้าหี'){
        msg.reply("คิดว่าคนอื่นชอบหรอ คิดดิ สมอง");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีชิงหมาเกิด'){
        msg.reply("คิดว่าคนอื่นชอบหรอ คิดดิ สมอง");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'อีหมอยรุงรัง'){
        msg.reply("คิดว่าคนอื่นชอบหรอ คิดดิ สมอง");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'พ่องมึงตาย'){
        msg.reply("ด่ากันอีกเเล้ว กุเบื่ออออ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ส้นตีน'){
        msg.reply("พูดว่า ส้นเท้า เพราะกว่านะ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอชาติหมา'){
        msg.reply("อย่าไปเหยียดคนอื่นดิ คนเหมือนกัน ใช้สมองหน่อยนะ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอโง่'){
        msg.reply("อย่างน้อยก็ไม่ได้มีสมอง84,000เซลล์นะ");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'ไอหน้าหี'){
        msg.reply("เเยกกันระหว่าง หน้า กับ -ี มันรวมกันไม่ได้");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'dick'){
        msg.reply("My dick is better than you!! LOL");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'Dick'){
        msg.reply("My dick is better than you!! LOL");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'Pussy'){
        msg.reply("Dammmmmmmmmmmm");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'pussy'){
        msg.reply("Dammmmmmmmmmmm");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'vagina'){
        msg.reply("Dammmmmmmmmmmm");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'Vagina'){
        msg.reply("Dammmmmmmmmmmm");
    }
})
bot.login('')
