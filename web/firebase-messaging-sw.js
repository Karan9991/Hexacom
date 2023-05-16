importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAsO34ASPQwYwnKkowGdxBOtGMVXSfN7Vc",
  authDomain: "citric-plexus-190723.firebaseapp.com",
  databaseURL: "https://citric-plexus-190723.firebaseio.com",
  projectId: "citric-plexus-190723",
  storageBucket: "citric-plexus-190723.appspot.com",
  messagingSenderId: "335524830268",
  appId: "1:335524830268:web:c4e9ef974203f62f40f739"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});