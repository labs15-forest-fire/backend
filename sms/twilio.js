const accountSid = process.env.TWILIO_ID; // Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH; // Auth Token from www.twilio.com/console

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

module.exports = {
  alertMessage
};

function alertMessage(body, to) {
  client.messages
    .create({
      body: "TESTING",
      to: "+17162137444", // Text this number 1(234)567-8910
      from: "+14243961692" // Ken's test account
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));
}
