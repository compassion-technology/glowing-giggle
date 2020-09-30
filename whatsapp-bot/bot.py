from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)


@app.route('/bot', methods=['POST'])
def bot():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    if 'mmret' in incoming_msg:
        msg.body('You have now been logged in and can message Grace! :)')
        responded = True
    if 'hello' in incoming_msg:
        originalMessage = 'Original Message: Hola Jane ¿Como estas?\n'
        translatedMessage = 'Translated Message: Hi Jane. How are you?'
        msg.body(originalMessage + translatedMessage)
        responded = True
    if 'good' in incoming_msg:
        originalMessage = 'Original Message: Estoy tan contenta. ¿Cómo está tu familia? \n'
        translatedMessage = 'Translated Message: I\'m so glad. How is your family?'
        msg.body(originalMessage + translatedMessage)
        responded = True
    if 'number' in incoming_msg:
        msg.body('This message will not be sent to Grace. This does not comply with our child protection policy')
        responded = True
    if not responded:
        msg.body('Grace is not online. She\'ll respond soon.')
    return str(resp)


if __name__ == '__main__':
    app.run()