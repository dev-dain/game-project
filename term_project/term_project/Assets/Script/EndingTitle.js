#pragma strict
var labelStyle1:GUIStyle;
var labelStyle2:GUIStyle;

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Jump")) {
		Application.LoadLevel("opening");
	}

}

function OnGUI() {
	var sw:int = Screen.width;
	var sh:int = Screen.height;
	GUI.Label(Rect(0, sh/4, sw, sh/4), "W I N", labelStyle1);
	GUI.Label(Rect(0, sh/2, sw, sh/4), "Hit Space Key\nto restart game", labelStyle2);
}