export function bounce(ball,speed){

if(ball.position.z > 2.8 ||
ball.position.z < -2.8){

speed.z *= -1;

}

}
