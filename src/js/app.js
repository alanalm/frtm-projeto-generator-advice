const url = "https://api.adviceslip.com/advice";
let id = 0;
let adv = "";

async function dice(){
    document.querySelector(".button").innerHTML=`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`;
    fetch (url)
    .then(response => response.json())
    .then((data) => {
        id = data.slip.id;
        adv = data.slip.advice;
        document.querySelector(".container>h2").textContent = `Advice #${id}`;
        document.querySelector(".container>p").textContent = adv;
        document.querySelector(".button").innerHTML=`<img src="./src/images/icon-dice.svg" alt="dice">`
    })
}

document.querySelector(".button").addEventListener("click", dice);
dice();