import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdOQLrZUwN-PKzjafeoNaiWFg5LSlW8o0",
  authDomain: "portfolio-viewers-count.firebaseapp.com",
  projectId: "portfolio-viewers-count",
  storageBucket: "portfolio-viewers-count.firebasestorage.app",
  messagingSenderId: "1032567450592",
  appId: "1:1032567450592:web:111f7ed9f412fb608b5985",
};

const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
export {db};