import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAuQBO3BxVRc-vq9uYS3cC_r64zymKz1cc",
    authDomain: "travel-website-webdevelopment.firebaseapp.com",
    databaseURL: "https://travel-website-webdevelopment-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "travel-website-webdevelopment",
    storageBucket: "travel-website-webdevelopment.appspot.com",
    messagingSenderId: "154836314241",
    appId: "1:154836314241:web:421924a9b94701276f4580",
    measurementId: "G-TB48DDGHZ3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const analytics = getAnalytics(app);

let EmailInp = document.getElementById('emailInpSignup');
let PassInp = document.getElementById('passwordInpSignup');
let FnameInp = document.getElementById('FnameInp');
let LnameInp = document.getElementById('LnameInp');
let MainFormSignup = document.getElementById('MainFormSignup');


let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value).then((credentials) => {
        set(ref(db, 'UsersAuthList/' + credentials.user.uid), {
            firstname: FnameInp.value,
            lastname: LnameInp.value
        })

    })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);

        })
}
MainFormSignup.addEventListener('submit', RegisterUser);