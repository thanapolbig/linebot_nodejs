// Echo reply

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    var msg = req.body.events[0].message.text
    reply(reply_token, msg)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {iBtDo4Z7L52/MVHyXpXQukxQ0N/q9ff1tIEh/7Ta2gK4o9AZcdk/c9+xRyaGLfujvj62UGwEGPnozADyH/wbdcgvlcO/aGBvVgKMlpjPFDnkcQPD6hQKlfv8OmgnqjQXyjA5xIhA7qVHkisgX8rMZAdB04t89/1O/w1cDnyilFU=}'
    }

    if (msg === "Big") {
        msg = "หัวควย"
        console.log(msg)
    }

    if (msg === "Ohm") {
        msg = "หน้าหี"
        console.log(msg)
    }

    if (msg === "Sthang") {
        msg = "ไปขี้อยู่"
        console.log(msg)
    }

    if (msg === "Cheetah") {
        msg = "โคตรมหาเทพ"
        console.log(msg)
    }

    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: msg
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}