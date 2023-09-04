const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apiKey = "rIa3iDqf89e2zVg01mDwPQ==9RO30JwWz4FA0Eia";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
}
 
const apiURl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const response = await fetch(apiURl, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    } catch (error) {
        jokeEl.innerText = "An error happen try again later";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE"
        
    }


    
}

btnEl.addEventListener("click", getJoke)