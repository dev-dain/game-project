#pragma strict

function OnTriggerEnter(other:Collider) {
	other.gameObject.SendMessage("RIP", 0);
}

function Start () {

}

function Update () {

}