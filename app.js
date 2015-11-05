var Consumer = require('sqs-consumer');
require('dotenv').load();

var app = Consumer.create({
  queueUrl: process.env.QUEUE_URL,
  handleMessage: function (message, done) {
    console.log(message);
    // consume now.
    done();
  }
});

app.on('error', function (err) {
  console.log(err.message);
});

app.start();
