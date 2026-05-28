import {
ref,
push,
onValue
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { db } from './firebase.js';

const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const messages = document.getElementById('messages');

sendBtn.onclick = ()=>{

if(chatInput.value==='') return;

push(ref(db,'chat'),{
message:chatInput.value
});

chatInput.value='';

}

onValue(ref(db,'chat'),(snapshot)=>{

let data = snapshot.val();

let html='';

for(let id in data){
html += `<p>${data[id].message}</p>`;
}

messages.innerHTML = html;

});
