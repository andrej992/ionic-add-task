Multi platform application for adding and scheduling tasks, creating profile, changing the language, as well as taking pictures with device's Camera and adding them to the task.

Requirements

1. Node.js
2. Ionic
3. Capacitor


In order to start it open Power Shell window and type npm install. After installation type ionic serve and the application will start on the browser. 

For starting it on Android or IOS device you should install Android studio and type the following commands:

1. You have to add the platform:

ionic cordova platform add ios #iOS
ionic cordova platform add android #Android

2. Use following command to create the build.

ionic cordova build ios #iOS
ionic cordova build android #Android

3. Now, you can use any of the command to run the application.

ionic cordova run ios --device #iOS
ionic cordova run android --device #Android
