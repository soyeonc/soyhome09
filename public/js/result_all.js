// CUSTOM JS FILE //

var count0 = 0;
var count1 = 0; 
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

var starbucksCount = 0;
var thinkCount = 0;
var hungryCount = 0;
var dunkinCount = 0;
var freshCount = 0;
var orenCount = 0;
var laCount = 0;
var cartCount = 0;
var mcCount = 0;
var joeCount = 0;
var pretCount = 0;
var homeCount = 0;

var yesRecycle = 0;
var noRecycle = 0;

var coffeeResults;

function init() {
  renderResultAll();
}

function renderResultAll(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);
			coffeeResults = response.coffee;

			document.getElementById('peopleCount').innerHTML = coffeeResults.length;

			determineCounts();
		}
	})	
}

function determineCounts(){

	for(var i=0; i<coffeeResults.length; i++){

		// first determine cupsPerWeek
		var currentCount = coffeeResults[i].cupsPerWeek;

		if(currentCount==0) count0++;
		if(currentCount==1) count1++;
		if(currentCount==2) count2++;
		if(currentCount==3) count3++;
		if(currentCount==4) count4++;
		if(currentCount==5) count5++;

		// now determine coffeeShopCount
		var currentCoffeShop = coffeeResults[i].coffeeShop;

		if(currentCoffeShop=="Starbucks") starbucksCount++;
		if(currentCoffeShop=="Think Coffee") thinkCount++;
		if(currentCoffeShop=="Hungry Ghose") hungryCount++;
		if(currentCoffeShop=="Dunkin") dunkinCount++;
		if(currentCoffeShop=="Fresh-Co") freshCount++;
		if(currentCoffeShop=="Oren's") orenCount++;
		if(currentCoffeShop=="La Colombe") laCount++;
		if(currentCoffeShop=="Coffee Cart") cartCount++;
		if(currentCoffeShop=="McDonald's") mcCount++;
		if(currentCoffeShop=="Joe") joeCount++;
		if(currentCoffeShop=="Pret A Manger") pretCount++;
		if(currentCoffeShop=="At Home") homeCount++;
	

		// do if statements for coffeShops


		// now determine recycle
		var currentRecycle = coffeeResults[i].knowRecycleQuery;

		// do if statements for yes/no
		if(currentRecycle==false) noRecycle++;
		if(currentRecycle==true) yesRecycle++;

	}

	// let's set the values in the html

	document.getElementById('count0').innerHTML = count0;	
	document.getElementById('count1').innerHTML = count1;	
	document.getElementById('count2').innerHTML = count2;	
	document.getElementById('count3').innerHTML = count3;	
	document.getElementById('count4').innerHTML = count4;	
	document.getElementById('count5').innerHTML = count5;	


	document.getElementById('starbucksCount').innerHTML = starbucksCount;
	document.getElementById('thinkCount').innerHTML = thinkCount;
	document.getElementById('hungryCount').innerHTML = hungryCount;
	document.getElementById('dunkinCount').innerHTML = dunkinCount;
	document.getElementById('freshCount').innerHTML = freshCount;
	document.getElementById('orenCount').innerHTML = orenCount;
	document.getElementById('laCount').innerHTML = laCount;
	document.getElementById('cartCount').innerHTML = cartCount;
	document.getElementById('mcCount').innerHTML = mcCount;
	document.getElementById('joeCount').innerHTML = joeCount;	
	document.getElementById('pretCount').innerHTML = pretCount;
	document.getElementById('homeCount').innerHTML = homeCount;

	document.getElementById('yesRecycle').innerHTML = yesRecycle;
	document.getElementById('noRecycle').innerHTML = noRecycle;
		


	console.log("yesRecycle --> " + yesRecycle);
	console.log("noRecycle --> " + noRecycle);

}

window.addEventListener('load', init())