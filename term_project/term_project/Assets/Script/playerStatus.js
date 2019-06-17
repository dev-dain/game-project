#pragma strict
private var score:int = 50;
var labelStyle:GUIStyle;
var labelStyle1:GUIStyle;
var labelStyle2:GUIStyle;

function RIP(amount:int) {
	score = amount;
	BroadcastMessage("backtoopen");
}

function MeetSponge(amount:int) {
	score += amount;
}

function ApplyDamage(amount:int) {
	score -= amount;
}

function OnGUI() {
	var rect:Rect = Rect(0, 0, Screen.width, Screen.height);
	GUI.Label(rect, "SCORE: " + score.ToString(), labelStyle);
	scoreCheck();
}

function scoreCheck() {	
	if (score <= 0) {
		var rect1:Rect = Rect(0, 0, Screen.width, Screen.height); 
		GUI.Label(rect1, "GAME OVER", labelStyle1);
		yield WaitForSeconds(2.0);
		Application.LoadLevel("opening");
	}
	if (score >= 100) {
		var rect2:Rect = Rect(0, 0, Screen.width, Screen.height); 
		GUI.Label(rect2, "CLEARED!", labelStyle2);
		yield WaitForSeconds(2.0);
		Application.LoadLevel("ending");
	}
}

function Start () {

}
function Update () {

}