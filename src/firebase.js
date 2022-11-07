// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEynjEZvXcbmShx95Rmt7NZIgqNX01cUY",
  authDomain: "tdi-rangel.firebaseapp.com",
  projectId: "tdi-rangel",
  storageBucket: "tdi-rangel.appspot.com",
  messagingSenderId: "654854818328",
  appId: "1:654854818328:web:7c345b8c0daae737d8916d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return user;
};

export const logOut = () => {
  return signOut(auth);
};

export const resetPassword = async (old_password, new_password, confirm_new_password) => {
  const user = auth.currentUser;

  if (new_password === confirm_new_password) {
    return reauthenticateWithCredential(
      user,
      EmailAuthProvider.credential(user.email, old_password)
    )
      .then(() => {
        return updatePassword(user, new_password)
          .then(() => {
            return true;
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        console.log(error);
        throw Error("Palavra-Passe errada");
      });
  } else {
    throw Error("Palavra-Passes não coincidem");
  }
};

export default app;
