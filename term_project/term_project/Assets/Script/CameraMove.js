#pragma strict
private var count:int = 0;

function Start () {

}

function Update () {
	if (count < 1) {
		lateUpdate();
		count++;
	}
}

function lateUpdate() {
	yield WaitForSeconds(4.0);
	transform.position.x += 20.0;
	yield WaitForSeconds(4.0);
	transform.position.x += 20.0;
}