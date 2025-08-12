import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDPwkOWQEcTzGGzUQESitKkfgTl5o6pOXQ",
  authDomain: "creators-space-1e77e.firebaseapp.com",
  projectId: "creators-space-1e77e",
  storageBucket: "creators-space-1e77e.firebasestorage.app",
  messagingSenderId: "414965361887",
  appId: "1:414965361887:web:f95ad31e79e021e719cd6a",
  measurementId: "G-H8M282WPY8"
};



// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "index.html"; // Redirect to home page after successful login
    })
    .catch((error) => {  
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error("Google sign-in error:", errorCode, errorMessage);

      // Show user-friendly message
      switch (errorCode) {
        case 'auth/popup-closed-by-user':
          alert("Sign-in popup was closed before completing. Please try again.");
          break;
        case 'auth/cancelled-popup-request':
          alert("Multiple sign-in attempts detected. Please wait and try again.");
          break;
        case 'auth/popup-blocked':
          alert("Popup was blocked by the browser. Please allow popups and try again.");
          break;
        case 'auth/network-request-failed':
          alert("Network error occurred. Check your connection and try again.");
          break;
        default:
          alert("Google sign-in failed. Please try again later.");
      }
    });
});

