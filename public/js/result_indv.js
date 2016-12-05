// CUSTOM JS FILE //

// var mycoffecount;
// var mycoffeeshopname;
// var didIknow;


function init() {
  renderResult();
}

function renderResult(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);

			var coffee = response.coffee;

				// var htmlToAdd = '<div class="col-md-2">'+
				// 	'<h1>'+coffee[coffee.length - 1].coffeeShop+'</h1>'+
				// 	'<ul>'+
				// 		'<li>How many cups: '+coffee[coffee.length - 1].cupsPerWeek+'</li>'+
				// 		'<li>Did you know?: '+coffee[coffee.length - 1].knowRecycleQuery+'</li>'+
				// 	'</ul>'+
				// '</div>';

				var mycoffecount = coffee[coffee.length - 1].cupsPerWeek;
				var mycoffeeshopname = coffee[coffee.length - 1].coffeeShop
				var didIknow = coffee[coffee.length - 1].knowRecycleQuery;
				
                var img = document.createElement("img");
				img.src = "img/Coffee_bags-" + mycoffecount + ".png";
			
				//jQuery("#coffee-holder").append(htmlToAdd);
				jQuery("#bagsImg").append(img);


				//assigning variables their value	

				document.getElementById('mycoffecount').innerHTML = mycoffecount*9;	
				document.getElementById('mycoffeegrams').innerHTML = mycoffecount*9*340;	
				document.getElementById('mycoffeeshopname').innerHTML = mycoffeeshopname;	
				document.getElementById('didIknow').innerHTML = didIknow;	
				document.getElementById('img').innerHTML = img;

		
		}
	})	
}

// 
// function determineMyresult(){

// 	mycoffecount = coffee[coffee.length - 1].cupsPerWeek;
// 	mycoffeeshopname = coffee[coffee.length - 1].coffeeShop;
// 	didIknow = coffee[coffee.length - 1].knowRecycleQuery;


// 	// setting my result values in HTML 
// 	document.getElementById('mycoffecount').innerHTML = cupsNumber;	
// 	document.getElementById('mycoffeeshopname').innerHTML = mycoffeeshopname;	
// 	document.getElementById('didIknow').innerHTML = didIknow;	
// }





window.addEventListener('load', init())