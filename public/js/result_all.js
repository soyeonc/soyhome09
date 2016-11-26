// CUSTOM JS FILE //

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

			for(var i=0;i<coffee.length;i++){
				var htmlToAdd = '<div class="col-md-2">'+
					'<h1>'+coffee[i].coffeeShop+'</h1>'+
					'<ul>'+
						'<li>How many cups: '+coffee[i].cupsPerWeek+'</li>'+
						'<li>Did you know?: '+coffee[i].knowRecycleQuery+'</li>'+
					'</ul>'+
				'</div>';
			
				jQuery("#coffee-holder").append(htmlToAdd);
			}



		}
	})	
}

window.addEventListener('load', init())