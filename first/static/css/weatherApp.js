
function addCity(){
	var data=document.getElementById('getInput').value;
	var celcius='27C'
	
	
	var flipCard = document.createElement('div');
	flipCard.setAttribute('class','flipCard');
	
	var flipCardInner = document.createElement('div');
	flipCardInner.setAttribute('class','flipCardInner');
	
	var flipCardFront = document.createElement('div');
	flipCardFront.setAttribute('class','flipCardFront');
	
	var disp = document.createElement('input');
	disp.setAttribute('class','displayCity');
	disp.setAttribute('value',data)
	var flipCardBack = document.createElement('div')
	flipCardBack.setAttribute('class','flipCardBack');
	
	var dispWeather = document.createElement('input');
	dispWeather.setAttribute('class','dispWeather');
	dispWeather.setAttribute('value',celcius)
	
	flipCardFront.appendChild(disp);
	flipCardBack.appendChild(dispWeather);
	flipCardInner.appendChild(flipCardFront);
	flipCardInner.appendChild(flipCardBack);
	flipCard.appendChild(flipCardInner);
	document.getElementById('secondblock').appendChild(flipCard);
	
}
