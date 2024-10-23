"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: "thought-exchange-b66bf.firebaseapp.com",
    projectId: "thought-exchange-b66bf",
    storageBucket: "thought-exchange-b66bf.appspot.com",
    messagingSenderId: process.env.FB_MSG_ID,
    appId: process.env.FB_APP_ID,
    measurementId: "G-7V4D8Z20DY",
};
(0, app_1.initializeApp)(firebaseConfig);