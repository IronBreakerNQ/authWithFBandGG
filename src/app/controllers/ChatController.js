require('dotenv').config();
const request = require('request');

class ChatController {
    // Phương thức để xác minh webhook từ Facebook
    verifyWebhook = (req, res) => {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        
        if (mode && token) {
            if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
                console.log(token);
                console.log('webhook connect done !')
                res.status(200).send(challenge);
            } else {
                console.log('webhook connect faild ! 403')
                res.sendStatus(403); // Trả về 403 nếu xác minh thất bại
            }
        } else {
            console.log(token);
            console.log('webhook connect faild !')
            res.sendStatus(400); // Trả về 400 nếu thiếu tham số
        }
    }

    // Phương thức để xử lý sự kiện webhook từ Facebook Messenger
    handleWebhookEvent = (req, res) => {
        const body = req.body;

        if (body.object === 'page') {
            body.entry.forEach(entry => {
                const webhook_event = entry.messaging[0];
                const sender_psid = webhook_event.sender.id;

                if (webhook_event.message) {
                    this.handleMessage(sender_psid, webhook_event.message);
                }
            });
            console('webhook reconnect done !')
            res.status(200).send('EVENT_RECEIVED'); // Phản hồi thành công
        } else {
            res.sendStatus(404); // Trả về 404 nếu không tìm thấy đối tượng
        }
    }

}

module.exports = new ChatController();
