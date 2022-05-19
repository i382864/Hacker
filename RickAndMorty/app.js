//Here I request the API from the rick and morty url
fetch('https://rickandmortyapi.com/api/character?name=pickle')
//parsing the json
  .then(response => response.json())
  .then(data => {
    //here I iterate through the results and compare if the name is equal to "Pickle Rick". 
    data.results.forEach(item => {
          if(item.name === "Pickle Rick"){
          // Here a character card is made if the name is equal to "Pickle rick"
              makeCard(item);
          }
      })

     
  });

  //This function creates a div with an id called card-container.
  function makeCard(character)
  {
    const card = document.createElement("div")
    card.id = "card-container"
    //Header with the name of the character and an image below it
    card.innerHTML += `<h2>
    ${character.name}</h2>
    <img src="${character.image}"></img>`

    //the card is actually added to the body here
    document.body.appendChild(card);
  }