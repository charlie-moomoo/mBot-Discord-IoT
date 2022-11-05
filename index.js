const config = {
    webhookId: '', //填入你的Discord Webhook的ID
    webhookToken: '' //填入你的Discord Webhook的Token
}
const Koa = require('koa')
const Discord = require('discord.js').WebhookClient
const app = new Koa()
const webhook = new Discord(config.webhookId, config.webhookToken)

app.use(ctx => {
    if (ctx.url != '/favicon.ico' && ctx.url != '/') {
        webhook.send(decodeURIComponent(ctx.url.split('/')[1]))
        ctx.body = '訊息已傳送'
        console.log('訊息已傳送')
    }
})
app.listen(3000)
