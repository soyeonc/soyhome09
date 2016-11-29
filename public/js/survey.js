// assuming a data model

// {
// 	cupsPerDay: Number,
// 	coffeeShop: {
//         type: String,
//         enum: ['Starbucks', 'Think', 'Hungry Ghost']
//       },
//     canRecycleQuery: Boolean,
// }

var cupsPerWeek;
var coffeeShop; // possible values --> 'Starbucks', 'Think', 'Hungry Ghost'
var knowRecycleQuery;

function getCups(event){
	console.log(event.target.dataset.value);
	cupsPerWeek = event.target.dataset.value;
	// cupsPerWeek = document.getElementById('cupsPerWeek').value;
	// cupsPerWeek = document.getElementById('cupsPerWeek2').value;
	// cupsPerWeek = document.getElementById('cupsPerWeek3').value;
	// cupsPerWeek = parseInt(cupsPerWeek);
	// console.log('cupsPerWeek is now --> ' + cupsPerWeek);

}

function goToSection(section){
	// scrolls to the section that is passed in
	console.log(section);
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 1000);	
}


function getCoffeeShop(event){
	console.log(event.target.dataset.value2);
	coffeeShop = event.target.dataset.value2;
}

function getRecycleQuery(event){
	console.log(event.target.dataset.value3);
	if(event.target.dataset.value3 == 'yes') knowRecycleQuery = true; 
	if(event.target.dataset.value3 == 'no') knowRecycleQuery = false; 
}

// $("#cupsHolder input").change(cupsPerWeek);
// $("#radioHolder input").change(getCoffeeShop);
// $("#recycleHolder input").change(getRecycleQuery);


// on submit of form, send to database


jQuery().submit(function(e){

	// POST the data from above to our API create route
  jQuery.ajax({
  	url : '/api/create',
  	dataType : 'json',
  	type : 'POST',
  	// we send the data in a data object (with key/value pairs)
  	data : {
  		cupsPerWeek : cupsPerWeek,
  		coffeeShop : coffeeShop,
  		knowRecycleQuery : knowRecycleQuery
  	},
  	success : function(response){
  		// success
  		console.log(response);

  		// redirect the user once we get a response
  		window.location.href = "/result";
  	},

  	error : function(err){
  		// do error checking
  		alert("something went wrong");
  		console.error(err);
  	}
  });

	// prevents the form from submitting normally
  e.preventDefault();
  return false;
});


jQuery().submit(function(e){

	// POST the data from above to our API create route
  jQuery.ajax({
  	url : '/api/create',
  	dataType : 'json',
  	type : 'POST',
  	// we send the data in a data object (with key/value pairs)
  	data : {
  		cupsPerWeek : cupsPerWeek,
  		coffeeShop : coffeeShop,
  		knowRecycleQuery : knowRecycleQuery
  	},
  	success : function(response){
  		// success
  		console.log(response);

  		// redirect the user once we get a response
  		window.location.href = "/resultall";
  	},

  	error : function(err){
  		// do error checking
  		alert("something went wrong");
  		console.error(err);
  	}
  });

	// prevents the form from submitting normally
  e.preventDefault();
  return false;
});


// step 1 - the user chooses a number of cups

// actions needed
// 1. attach click event listener on coffe cups; when clicked, call function to get cupsPerDay
// 2. set cupsPerDay equal to what the user clicked, perhaps give visual feebdack by changing the src image

// at this point, cupsPerDay has a value

// step 2 - the user chooses a coffeeshop

// actions needed

// 1. attach click event listene; when clicked pull out the coffeShop name
// etc

// step 3. - same thing for canRecycleQuery

// finally once you have all data, save to database wit AJAX

// step 4. post the data to your server using an AJAX POST request

// step 5. on server (index.js), route that takes the data, and saves it to the database

// step 6. on server (index.js), once saved to db, respond back to your client app with the saved data res.json(data);

// step 7. on client-side js, in the AJAX success function, you will now have the data that's been saved

// step 8. call function to show the data visualization, passing in the data


