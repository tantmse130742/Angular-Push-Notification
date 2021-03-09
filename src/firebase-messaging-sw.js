importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAfqxWIR2EyWqDIFbR_kKko5DkgfTPsFfg",
    authDomain: "iot-scale-b3a60.firebaseapp.com",
    projectId: "iot-scale-b3a60",
    storageBucket: "iot-scale-b3a60.appspot.com",
    messagingSenderId: "1041682934376",
    appId: "1:1041682934376:web:9a8d1f95c719fe967da9dd",
    measurementId: "G-W8THBPZGC9"
});

const messaging = firebase.messaging();