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
}

function replaceImg0(img){
  console.log("0");
  if(img.src.match("img/cupEmpty_0.png")) img.src="img/cupFilled_0.png";
  else img.src="img/cupFilled_0.png";
}

function replaceImg1(img){
  console.log("1");
  if(img.src.match("img/cupEmpty_1.png")) img.src="img/cupFilled_1.png";
  else img.src="img/cupFilled_1.png";
}

function replaceImg2(img){
  console.log("2");
  if(img.src.match("img/cupEmpty_2.png")) img.src="img/cupFilled_2.png";
  else img.src="img/cupFilled_2.png";
}

function replaceImg3(img){
  console.log("3");
  if(img.src.match("img/cupEmpty_3.png")) img.src="img/cupFilled_3.png";
  else img.src="img/cupFilled_3.png";
}

function replaceImg4(img){
  console.log("4");
  if(img.src.match("img/cupEmpty_4.png")) img.src="img/cupFilled_4.png";
  else img.src="img/cupFilled_4.png";
}

function replaceImg5(img){
  console.log("5");
  if(img.src.match("img/cupEmpty_5.png")) img.src="img/cupFilled_5.png";
  else img.src="img/cupFilled_5.png";
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

function chBcolor(){
  console.log("change color");
document.getElementById("coffeeShop").style.color = "#261506";
document.getElementById("coffeeShop").style.background = "white";
// document.body.style.background = "white";
}


function setColor(id, color){
    var count=1;
    var property = document.getElementById(id);
    if (count == 0){
        property.style.backgroundColor = "transparent"
        property.style.color = "#ffffff"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#ffffff"
        property.style.color = "#261506"
        count=0;
    }
}

// 
function goToSectionb(){
    if (event.target.dataset.value2=="at home") {
      // console.log(event.target.dataset.value2);
      document.getElementById("section3").style.display = "none";
      document.getElementById("section3b").style.display = "block";

      console.log(section3b);

    $('html, body').animate({
        scrollTop: $(section3b).offset().top
    }, 1000); 

    }
      else{

      document.getElementById("section3").style.display = "block";
      document.getElementById("section3b").style.display = "none";

     console.log(section3);
    $('html, body').animate({
        scrollTop: $(section3).offset().top
    }, 1000); 


      }

}





function getRecycleQuery(event){
	console.log(event.target.dataset.value3);
	if(event.target.dataset.value3 == 'yes') knowRecycleQuery = true; 
	if(event.target.dataset.value3 == 'no') knowRecycleQuery = false; 
}


function getRecycleQueryb(event){
  console.log(event.target.dataset.value3);
  if(event.target.dataset.value3b == 'yes') knowRecycleQuery = true; 
  if(event.target.dataset.value3b == 'no') knowRecycleQuery = false; 
}

// $("#cupsHolder input").change(cupsPerWeek);
// $("#radioHolder input").change(getCoffeeShop);
// $("#recycleHolder input").change(getRecycleQuery);


// on submit of form, send to database

function submitData(){

  console.log("WE ARE SUBMITTING DATA ");

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
}


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


