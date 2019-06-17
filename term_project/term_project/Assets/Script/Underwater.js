#pragma strict

var waterLevel : float;
private var isUnderwater : boolean;
private var normalColor : Color;
private var underwaterColor : Color;


function Start () {
	normalColor = new Color(0.5f,0.5f,0.5f,0.5f);
	underwaterColor = new Color(0.22f,0.05f,0.07f,0.5f);
}

function Update () {
	if((transform.position.y < waterLevel)!= isUnderwater)
	{
		isUnderwater = transform.position.y< waterLevel;
		if(isUnderwater) SetUnderwater();
		if(!isUnderwater) SetNormal();
		
	}
}
function SetNormal(){

	RenderSettings.fogColor = normalColor;
	RenderSettings.fogDensity = 0.002f;
	
}

function SetUnderwater (){

	RenderSettings.fogColor = underwaterColor;
	RenderSettings.fogDensity = 0.01f;
}