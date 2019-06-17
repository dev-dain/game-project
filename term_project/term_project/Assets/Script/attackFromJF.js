#pragma strict

var velocity:float = 25.0;
var moveDelay:float = 1.0;
private var directionalTimer:float = 3.0;

function Start () {
	yield WaitForSeconds(moveDelay);
	var player:GameObject = GameObject.FindWithTag("Player");
	if (player != null) {
		var direction:Vector3 = (player.transform.position - transform.position).normalized;
		rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	}
}

function Update () {
	directionalTimer -= Time.deltaTime;
	if (directionalTimer == 0) {
		var player:GameObject = GameObject.FindWithTag("Player");
		if (player != null) {
			var direction:Vector3 = (player.transform.position - transform.position).normalized;
			rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
		}
		directionalTimer = 3.0;
	}
}