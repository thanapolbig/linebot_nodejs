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
    var id = req.body.events[0].source.userId //get uid from line
    console.log(id)
    login(reply_token,id,msg) //verify uid
    res.sendStatus(200)
})
app.listen(port)    
function login(reply_token,id,msg){ 
    if (id === "Ua989cf7b82e0e7fd5e6259ff7633f6c9"){    //check db
        massage = "check in success"
        console.log(massage)
        reply(reply_token, msg )
    }else{
        msg = "uid not found"
        reply(reply_token, msg )
    }
}

function reply(reply_token, msg) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {shWHPy2AtysDJ8IkWowJC/NTQgpxu5ddDJ3GwD3eUQ6FcDnZ+Q1VgBrF9xyusFwet9PK5cBPmmxxLthorhuZrL94biE5JuQ+aJjEboIP5dQDLsgXMur0+QiioiMCL+xJxlA3aG5aFRDGy2HhHEPpfgdB04t89/1O/w1cDnyilFU=}'
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