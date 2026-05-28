import {
ref,
set
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import { db } from './firebase.js';

const createBtn = document.getElementById('createBtn');
const joinBtn = document.getElementById('joinBtn');
const roomCode = document.getElementById('roomCode');

createBtn.onclick = ()=>{

const room = Math.random()
.toString(36)
.substring(2,8);

roomCode.value = room;

set(ref(db,'rooms/'+room),{
created:true
});

alert('Room Created: '+room);

}

joinBtn.onclick = ()=>{

alert('Joined Room: '+roomCode.value);

}
