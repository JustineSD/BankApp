# BankApp

On installing react native and expo please refer to this link https://reactnative.dev/docs/environment-setup

If on Mac you can install an iOS simulator demonstrated here https://youtu.be/0-S5a0eXPoc?t=881

Also install the expo app on your mobile device.

Once you have React Native installed and the folder opened in a terminal you can run the "expo start" command and a window should open in a browser showing a QR Code which you can scan with your expo app on your phone to preview the app. You can also click the "run on iOS simulator" if you have one set up.

Currently the app uses the base chatbot without speech to text and text to speech functionality. If you want to insert the chatbot containing those functionalities go to BankApp/components/ChatBot/index.tsx and on line 13 change "../../chatbot.html" to "../../chattest/chattest.html"

If you want to make changes to the chatbot.js after making any changes you need to bundle the code with the browserify library. Tutorial here https://www.youtube.com/watch?v=_dtnD_8Att0&t

You can also test that chatbot by simply opening the chattest.html file in a browser. You may also have to generate new tokens for the speech to text and text to speech services. At the bottom of BankApp/chattest/src/chatbot.js  I have included curl commands to run in cmd to generate new api tokens.
