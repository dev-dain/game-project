#pragma strict

function OnTriggerEnter(other:Collider) {
	other.gameObject.SendMessage("MeetSponge", 10);
	Destroy(gameObject);
}

function Start () {

}

function Update () {

}