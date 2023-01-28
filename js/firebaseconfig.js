import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhHH1FYXZYa6-HUiK7ddM0CLpPLJICS0Y",
    authDomain: "yp40-frontend.firebaseapp.com",
    projectId: "yp40-frontend",
    storageBucket: "yp40-frontend.appspot.com",
    messagingSenderId: "496235175161",
    appId: "1:496235175161:web:dee20825febb9247a61628",
    measurementId: "G-MHV6PV1Z5D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const store = getFirestore();
  const analytics = getAnalytics(app);
  export {store}