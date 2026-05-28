import * as THREE
from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();

scene.background =
loader.load('assets/bg.jpg');

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(renderer.domElement);

const light =
new THREE.DirectionalLight(
0xffffff,
2
);

light.position.set(0,20,10);

scene.add(light);

const stadiumTexture =
loader.load('assets/stadium.jpg');

const stadium =
new THREE.Mesh(
new THREE.CylinderGeometry(40,40,10,64),
new THREE.MeshPhongMaterial({
map:stadiumTexture
})
);

stadium.position.y=-6;
scene.add(stadium);

const table =
new THREE.Mesh(
new THREE.BoxGeometry(12,0.5,6),
new THREE.MeshPhongMaterial({
color:0x006400
})
);

scene.add(table);

const net =
new THREE.Mesh(
new THREE.BoxGeometry(0.1,1,6),
new THREE.MeshPhongMaterial({
color:0xffffff
})
);

net.position.y=0.8;
scene.add(net);

const paddle1 =
new THREE.Mesh(
new THREE.BoxGeometry(0.3,1,1.5),
new THREE.MeshPhongMaterial({
color:0xff0000
})
);

paddle1.position.set(-5,1,0);
scene.add(paddle1);

const paddle2 =
new THREE.Mesh(
new THREE.BoxGeometry(0.3,1,1.5),
new THREE.MeshPhongMaterial({
color:0x00aaff
})
);

paddle2.position.set(5,1,0);
scene.add(paddle2);

const ball =
new THREE.Mesh(
new THREE.SphereGeometry(0.25,32,32),
new THREE.MeshPhongMaterial({
color:0xffffff
})
);

ball.position.y=1;
scene.add(ball);

camera.position.z=12;
camera.position.y=8;
camera.rotation.x=-0.5;

let speedX = 0.12;
let speedZ = 0.09;

let keys = {};

window.addEventListener('keydown',(e)=>{
keys[e.key]=true;
});

window.addEventListener('keyup',(e)=>{
keys[e.key]=false;
});

function animate(){

requestAnimationFrame(animate);

if(keys['w']) paddle1.position.z -= 0.15;
if(keys['s']) paddle1.position.z += 0.15;

if(keys['ArrowUp']) paddle2.position.z -= 0.15;
if(keys['ArrowDown']) paddle2.position.z += 0.15;

ball.position.x += speedX;
ball.position.z += speedZ;

if(ball.position.z > 2.8 ||
ball.position.z < -2.8){

speedZ *= -1;

}

renderer.render(scene,camera);

}

animate();
