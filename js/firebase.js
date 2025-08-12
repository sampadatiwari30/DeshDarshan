import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your actual auth domain
  projectId: "YOUR_PROJECT_ID", // Replace with your actual project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your actual storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your actual messaging sender ID
  appId: "YOUR_APP_ID", // Replace with your actual app ID
  measurementId: "YOUR_MEASUREMENT_ID" // Replace with your actual measurement ID if needed
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
      window.location.href = "http://127.0.0.1:5501/index.html"; // Redirect to static page
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
