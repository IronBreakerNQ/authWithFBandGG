require('dotenv').config();
const request = require('request');

const ngrokUrl = 'https://9cee-183-81-79-112.ngrok-free.app/messger/webhook';

class skipgrok{
    sendNgrokRequest = () => {
        request({
            uri: ngrokUrl,
            headers: {
                'ngrok-skip-browser-warning': 'true' // Hoặc bất kỳ giá trị nào
            }
        }, (err, res, body) => {
            if (!err && res.statusCode === 200) {
                console.log('Yêu cầu thành công:', body);
            } else {
                console.error('Có lỗi xảy ra:', err);
                console.error('Mã trạng thái:', res.statusCode);
                console.error('Nội dung phản hồi:', body);
            }
        });
    };
}

module.exports = new skipgrok;