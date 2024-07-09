const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const LINE_TOKEN = 'KUnnupMvg47/qyYLCQClnq5YEl9DPnalgn1lve4q1sCnrLFKRxKxNbrx+jaxIYR1+HtNiYjagkcrDwP6dZf1i0Vg82oFDDxgzZyVxx3bUjz46TqJDc0W7aSyy8b/qqs7HRZkvBCJSM9MM7nVtFcsuQdB04t89/1O/w1cDnyilFU=';

app.post('/send-message', (req, res) => {
  const options = {
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LINE_TOKEN}`
    },
    json: true,
    body: {
      to: '@673rlkyh',
      messages: [{
        type: 'text',
        text: 'Ray¨Ó¤F'
      }]
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error sending message: ', error);
      return res.status(500).send('Error');
    }
    return res.send('Message sent successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
