Multi platform application for adding and scheduling tasks, creating profile, changing the language, as well as taking pictures.

Requirements

1. Node.js
2. Ionic
3. Capacitor


In order to start it open Power Shell window and type npm install. After installation type ionic serve and the application will start on the browser. 

For starting it on Android or IOS device you should install Android studio and type the following commands:

1. You have to add the platform:
# iOS
ionic cordova platform add ios
# Android
ionic cordova platform add android

2. Use following command to create the build.
# iOS
ionic cordova build ios
# Android
ionic cordova build android

3. Now, you can use any of the command to run the application.
# iOS
ionic cordova run ios --device
# Android
ionic cordova run android --device
