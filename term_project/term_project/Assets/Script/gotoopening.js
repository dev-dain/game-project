#pragma strict

function Start () {

}

function Update () {

}
function backtoopen(){
	yield WaitForSeconds(2.0);
	Application.LoadLevel("opening");
}