let weather = '';
let temperature = '';

//here we create a const of the api url so we can access it easily
 const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=Eindhoven&units=metric&APPID=4c16211d7b003d287175f78a0cecdee9'
 async function getData(){
   //here we are fetching the data from the url
    await fetch(api_url) 
    //now that we got the data it needs to be converted into json 
  .then(response => response.json())
 //here we actually access the data
  .then(data =>{ 
      //here we get the data of the city named Eindhoven
      weather = "Eindhoven";
      //here we get the actual temperature in Eindhoven
      temperature = data.main.temp;
      });
     //Now we display the city name
     document.getElementById("stad").innerHTML += weather; 
     // Because it looks more clean when we round the temperature we are using the method Math.round
     document.getElementById("weer").innerHTML += Math.round(temperature) + " °C";

 }
 // here we actually call the function to receive and display the data
 getData();