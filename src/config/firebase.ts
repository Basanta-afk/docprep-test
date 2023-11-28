import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8nvmDkKzzoE529DTQEuCgBk20BKdjSng",
  authDomain: "docprep-de36b.firebaseapp.com",
  projectId: "docprep-de36b",
  storageBucket: "docprep-de36b.appspot.com",
  messagingSenderId: "420425394732",
  appId: "1:420425394732:web:ff62457222e68f4ffb3f89",
  measurementId: "G-0DQ1BMPJXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
