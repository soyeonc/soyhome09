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
				var htmlToAdd = '<div class="col-md-4">'+
					'<img src='+coffee[i].imageUrl+' width="100">'+
					'<h1>'+coffee[i].name+'</h1>'+
					'<ul>'+
						'<li>Year: '+coffee[i].itpYear+'</li>'+
						'<li>Interests: '+coffee[i].interests+'</li>'+
					'</ul>'+
					'<a href="/edit/'+coffee[i]._id+'">Edit Person</a>'+
				'</div>';
			
				jQuery("#coffee-holder").append(htmlToAdd);
			}



		}
	})	
}

window.addEventListener('load', init())