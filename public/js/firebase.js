let firebaseConfig = {
    apiKey: "AIzaSyARHkqssnllrRaLVdiR9fOm3bHoW6J_aXg",
    authDomain: "trading-blog-b7c6a.firebaseapp.com",
    projectId: "trading-blog-b7c6a",
    storageBucket: "trading-blog-b7c6a.appspot.com",
    messagingSenderId: "722232933973",
    appId: "1:722232933973:web:c0bbc08e4c77fb71e89edc"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();