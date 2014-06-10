#pragma strict
var speed=10;
function Update () {
 if(Input.GetKey(KeyCode.W))
 {
  transform.position.y+=speed*Time.deltaTime;
 } 
 if(Input.GetKey(KeyCode.A))
 {
  transform.position.x-=speed*Time.deltaTime;
 }
 if(Input.GetKey(KeyCode.S))
 {
  transform.position.y-=speed*Time.deltaTime;
 }
 if(Input.GetKey(KeyCode.D))
 {
  transform.position.x+=speed*Time.deltaTime;
 }
}