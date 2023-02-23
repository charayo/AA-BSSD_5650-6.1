let resultTypes = [function (targ) { return new CatFactAdapter(targ) },
function (targ) { return new FDAResult(targ) },
function(targ){return new DogImageAdapter(targ)}]

let urls = ["https://catfact.ninja/fact", "https://api.fda.gov/food/enforcement.json?limit=10", "https://dog.ceo/api/breeds/image/random"]

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submit').addEventListener("click", () => {
        createNewResult();
    })
})

function createNewResult() {
    let div = document.createElement("div");
    document.getElementById('results').prepend(div);
    let randomIndex = Math.floor(Math.random() * resultTypes.length);
    let res = resultTypes[randomIndex](div);
    res.loadData(urls[randomIndex]);
    res.loadArrayToTarget();

}