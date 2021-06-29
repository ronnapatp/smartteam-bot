var Scraper = require('images-scraper');

const google = new Scrapar({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'This sends an images ti discod text channel'
    async execute(Client, massage, args){
        const image_query = args.join(' ');
        if(!image_query) return massage.channel.send('PLease enter an image name!')

        const image_results = await google.scrape(image_query, 1);
        massage.channel.send(image_results [0] .url)
    }
}





bot.login('ODQ1MTY4MTE3OTkwMTYyNDQy.YKdCJQ.SR4G7MCTMO524dbY8-k6JMhM8So')