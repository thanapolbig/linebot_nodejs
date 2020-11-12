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
    var id = req.body.destination
    reply(reply_token,id, msg )
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token, id , msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {shWHPy2AtysDJ8IkWowJC/NTQgpxu5ddDJ3GwD3eUQ6FcDnZ+Q1VgBrF9xyusFwet9PK5cBPmmxxLthorhuZrL94biE5JuQ+aJjEboIP5dQDLsgXMur0+QiioiMCL+xJxlA3aG5aFRDGy2HhHEPpfgdB04t89/1O/w1cDnyilFU=}'
    }

    if (id === "Ud25f8d3070e87673ed0f8e33e0ea6390"){
        msg = "check in success"
        console.log(msg)
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