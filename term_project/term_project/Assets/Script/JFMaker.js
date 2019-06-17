#pragma strict


var interval:float;
var jellyFish:GameObject;
private var timer:float;

function Start () {
	timer = 0.0;
}

function Update () {
	timer -= Time.deltaTime;
	if (timer < 0.0) {
	var position:Vector3 = transform.position;
	Instantiate(jellyFish, position+Vector3(Random.Range(-20.0, 20.0), 0, 0), Random.rotation);
	BroadcastMessage("attackFromJF");

	timer = interval;
	}
}