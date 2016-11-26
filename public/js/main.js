// CUSTOM JS FILE //

function init() {
  renderPeeps();
}

function renderPeeps(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);

			var coffee = response.coffee;

			for(var i=0;i<coffee.length;i++){
				if (coffee[i].name === 'Starbucks') {
					var htmlToAdd = '<div class="col-md-4">'+
						'<img src='+coffee[i-1].imageUrl+' width="100">'+
						'<h1>'+coffee[i].name+'</h1>'+
						'<ul>'+
							'<li>Year: '+coffee[i].itpYear+'</li>'+
							'<li>Interests: '+coffee[i].interests+'</li>'+
						'</ul>'+
						'<a href="/edit/'+coffee[i]._id+'">Edit Person</a>'+
					'</div>';
				}
							
				jQuery("#coffee-holder").append(htmlToAdd);
			}

			{
				if (coffee[i].name === 'Think Coffee') {
					var htmlToAdd2 = '<div class="col-md-4">'+
						'<img src='+coffee[i-1].imageUrl+' width="100">'+
						'<h1>'+coffee[i].name+'</h1>'+
						'<ul>'+
							'<li>Year: '+coffee[i].itpYear+'</li>'+
							'<li>Interests: '+coffee[i].interests+'</li>'+
						'</ul>'+
						'<a href="/edit/'+coffee[i]._id+'">Edit Person</a>'+
					'</div>';
				}
							
				jQuery("#coffee-holder").append(htmlToAdd2);
			}





		}
	})	
}

window.addEventListener('load', init())