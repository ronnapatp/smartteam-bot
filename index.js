const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on("ready" , function(){
    console.log('Logged is as ${bot.user.tag}!!');
    bot.user.setActivity('Dis bot V1.0.0')
});

bot.on("message" , msg => {
    if (msg.content === 'hello'){
        msg.reply('Hello bro');
    }
})
bot.on("message" , msg => {
    if (msg.content === 'command'){
        msg.channel.send('facebook = Smart team facebook');
        msg.channel.send('instagram = Smart team instagram');
        msg.channel.send('twitter = Smart team twitter');
        msg.channel.send('info = Smart team information')
        msg.channel.send('github = Smart team bot code by github')
        msg.channel.send('More command will coming soon! pls wait')
    }
})
bot.on("message" , msg => {
    if (msg.content === 'info'){
        msg.channel.send("ข้อความจะมาเร็วๆนี้");
        msg.channel.send("รอหน่อยน้าาาาาา")
    }
})
bot.on("message" , msg => {
    if (msg.content === 'github'){
        msg.channel.send("This is github link");
        msg.channel.send("https://github.com/ronnapatsri/smartteam-bot")
        msg.channel.send("Pls read 'READ ME' before do anything")
    }
})
bot.on("message" , msg => {
    if (msg.content === 'คำส้่ง'){
        msg.channel.send('facebook = facebook ของ Smart team');
        msg.channel.send('instagram = instagram ของ Smart team');
        msg.channel.send('twitter = twitter ของ Smart team');
        msg.channel.send('คำสั่งอื่นจะมาในเร็วๆ นี้');
    }
})
bot.on("message" , msg => {
    if (msg.content === 'piebot'){
        msg.reply('Pie Bot is create by Pie');
    }
})
bot.on("message" , msg => {
    if (msg.content === 'piebotend'){
        msg.channel.send('See you soon Now i am **OFFLINE**');
    }
})
bot.on("message" , msg => {
    if (msg.content === 'piebotstart'){
        msg.channel.send("What's up Now i am **ONLINE**");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'facebook'){
        msg.channel.send("https://www.facebook.com/smartteaminnovationgroup55/");
        msg.reply("อย่าลืมกดไลค์Pageด้วยละ")
    }
})
bot.on("message" , msg => {
    if (msg.content === 'twitter'){
        msg.reply("Smart team ยังไม่มีTwitter");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'instagram'){
        msg.reply("Smart team ยังไม่มีInstagram");
    }
})
bot.on("message" , msg => {
    if (msg.content === 'sponsor'){
        msg.channel.send("**NO SPONSOR**");
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
    if (msg.content === 'มีม'){
        Files: [
            "https://pbs.twimg.com/media/EMtY4AhVUAA1ZCm.jpg"
        ]
    }
})
bot.login('')
