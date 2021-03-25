import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCuFyXY5Oe3L6yTDGm8cAiXDO-DJSJo_LE",
    authDomain: "kendriya-result.firebaseapp.com",
    projectId: "kendriya-result",
    storageBucket: "kendriya-result.appspot.com",
    messagingSenderId: "45222704367",
    appId: "1:45222704367:web:d9ae45903ec2b01d9b571a"
}


firebase.initializeApp(config);

export const storage = firebase.storage();
export default firebase;