#pragma strict

var jellyCrash: AudioClip;
var spongeCrash: AudioClip;

function Start () {

}

function Update () {

}

function MeetSponge(amount:int) {
	audio.PlayOneShot(spongeCrash);
}

function ApplyDamage(amount:int) {
	audio.PlayOneShot(jellyCrash);
}