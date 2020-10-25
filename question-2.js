const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultInHTML = document.querySelector(".output");

async function getGame() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const facts = result.results;

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);

            console.log(facts[i].tags.length);
            
            if (i === 8) {
                break;
            }
            resultInHTML.innerHTML += `<div class"output"><p>${facts[i].name}<br>${facts[i].rating}<br>${facts[i].tags.length}</p></div>`

        }
    }

    catch (error){
        console.log("An error has occured! " + error)
    }
}

getGame();
