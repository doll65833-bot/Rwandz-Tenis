import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getDatabase }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

apiKey: "AIzaSyCuoMfqPAw95eJDkv1bmSSWiAC0Npv1khM",

authDomain: "rwandz-tenis.firebaseapp.com",

databaseURL:
"https://rwandz-tenis-default-rtdb.firebaseio.com",

projectId: "rwandz-tenis",

storageBucket:
"rwandz-tenis.firebasestorage.app",

messagingSenderId: "166843137666",

appId:
"1:166843137666:web:07de5c22d66917b388be9b",

measurementId: "G-KEJWYGQKZG"

};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
