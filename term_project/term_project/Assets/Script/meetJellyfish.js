#pragma strict

function OnTriggerEnter(other:Collider) {
	other.gameObject.SendMessage("ApplyDamage", 10);
	Destroy(gameObject);
}

function Start () {

}

function Update () {

}