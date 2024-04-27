const time_calc_input = document.getElementById("time_calc_input_id")

const time_calc_button = document.getElementById("time_calc_button_id")

time_calc_button.addEventListener("click", timeCalcOnClic)

const answear_input = document.getElementById("final_time")

function timeCalcOnClic() {
  const input_value = Number(time_calc_input.value)
  const final_functional_result = getIntoHours(input_value)
  answear_input.textContent = final_functional_result
}

const inputFields = document.querySelectorAll('.numb-inp');
const maxNumberParagraph = document.getElementById('max-text');

inputFields.forEach(inputField => {
  inputField.addEventListener('input', () => {
    let maxNumber = -Infinity;

    inputFields.forEach(input => {
      const value = input.value;

      if (value > maxNumber && value !== '') {
        maxNumber = value;
      }
    });

    if (maxNumber !== -Infinity) {
      maxNumberParagraph.textContent = `Найбільше, число, яке Ви написали - ${maxNumber}`;
    } else {
      maxNumberParagraph.textContent = 'Введіть число';
    }
  });
});

function getIntoHours(min) {
  const result = Math.floor(min / 60)
  const final_result = min - (60*result)
  return `${result}h and ${final_result}min`
}

const inputnumber = document.querySelector(".number-input")
inputnumber.addEventListener("input", onInput)
const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber);
function onInput(e) {
    const value = Number(e.target.value)
    console.log(value)
    if (randomNumber === value) {
         console.log("Ви виграли");
        ;}
    else {
              console.log("Ви програли");
         }    
}
// Потрібна перевірка на Не число

const object = {
    a: 1
}

console.log(object.a);

const cut = document.querySelector("#cut");

const stone = document.querySelector("#stone");

const papar = document.querySelector("#papar");

function computerrr() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ножиці"
    case 1:
      return "камінь"
    case 2:
      return "папір"
  }
}

function user(userInput) {
  if (userInput == "папір" || userInput == "камінь" || userInput == "ножиці") {
    return userInput
  }
}

function winner(computerChoise, userChoise) {
  if (userChoise == computerChoise ) {
    return "нічия"
  }
  if (userChoise == "камінь") {
    if (computerChoise == "ножиці") {
      return "Ви перемогли!"
    }
    else {
      return "Ви програли!"
    }
  }
  if (userChoise == "ножиці") {
    if (computerChoise == "папір") {
      return "Ви перемогли!"
    }
    else {
      return "Ви програли!"
    }
  }
  if (userChoise == "папір") {
    if (computerChoise == "камінь") {
      return "Ви перемогли!"
    }
    else {
      return "Ви програли!"
    }
  }
}

function playGame(userInput) {
  // const userChoise = user()
  const computerChoise = computerrr()
  const winners = winner(computerChoise, userInput)
  return winners
}

cut.addEventListener("click", function() {
  console.log(playGame("ножиці")); 
});


console.log(cut);


stone.addEventListener("click", function () {
  playGame("камінь")
});

console.log(stone);


papar.addEventListener("click",function() {
  playGame("папір")
});

console.log(papar);

console.log(computerrr());
const birthAlbert = document.getElementById("button5")
birthAlbert.addEventListener("click", onclick)

const scientists = [ 
  { 
      name: "Albert", 
      surname: "Einstein", 
      born: 1879, 
      dead: 1955, 
      id: 1 
  }, 
  { 
      name: "Isaac", 
      surname: "Newton", 
      born: 1643, 
      dead: 1727, 
      id: 2 
  }, 
  { 
      name: "Galileo", 
      surname: "Galilei", 
      born: 1564, 
      dead: 1642, 
      id: 3 
  }, 
  { 
      name: "Marie", 
      surname: "Curie", 
      born: 1867, 
      dead: 1934, 
      id: 4 
  }, 
  { 
      name: "Johannes", 
      surname: "Kepler", 
      born: 1571, 
      dead: 1630, 
      id: 5 
  }, 
  { 
      name: "Nicolaus", 
      surname: "Copernicus", 
      born: 1473, 
      dead: 1543, 
      id: 6 
  }, 
  { 
      name: "Max", 
      surname: "Planck", 
      born: 1858, 
      dead: 1947, 
      id: 7 
  }, 
  { 
      name: "Katherine", 
      surname: "Blodgett", 
      born: 1898, 
      dead: 1979, 
      id: 8 
  }, 
  { 
      name: "Ada", 
      surname: "Lovelace", 
      born: 1815, 
      dead: 1852, 
      id: 9 
  }, 
  { 
      name: "Sarah E.", 
      surname: "Goode", 
      born: 1855, 
      dead: 1905, 
      id: 10 
  }, 
  { 
      name: "Lise", 
      surname: "Meitner", 
      born: 1878, 
      dead: 1968, 
      id: 11 
  }, 
  { 
      name: "Hanna", 
      surname: "Hammarström", 
      born: 1829, 
      dead: 1909, 
      id: 12 
  } 
];

const btn1 = document.getElementById("button1")
btn1.addEventListener("click", nineteenth)

const div = document.querySelector(".photos_gallery");


function nineteenth() {
const res = scientists.filter((item) => item.born > 1800 && item.born < 1901)
const render = renderHTML(res)
div.insertAdjacentHTML('beforeend', render)
}

function renderHTML(arr) {
div.innerHTML = '';
return arr.map((item) => `<div class="sc_img"><p>${item.name} ${item.surname}</p><p>${item.born}-${item.dead}</p></div>`).join(" ")
}

const btn2 = document.getElementById("button2")
btn2.addEventListener("click", alphabet)


function alphabet() {
const res = scientists.map((item) => item).sort((a, b) => a.name.localeCompare(b.name))
const render = renderHTML(res)
div.insertAdjacentHTML('beforeend', render)
}

const btn3 = document.getElementById("button3")
btn3.addEventListener("click", byYears)

function byYears(){
const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born)-(a.dead-a.born))
const render = renderHTML(res)
div.insertAdjacentHTML('beforeend', render)}



const btn8 = document.getElementById("button8")
btn8.addEventListener("click", lessMore)

function lessMore() {
let array = [];
const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born) - (a.dead - a.born))
array.push(res[res.length - 1], res[0])
const render = renderHTML(array)
div.insertAdjacentHTML('beforeend', render)
}

function onclick() {
  const Albert = scientists.find(Sciensits => Sciensits.surname == "Einstein")
  const render = renderAlbert(Albert)
  div.insertAdjacentHTML('beforeend', render)
}

function renderAlbert(object) {
  div.innerHTML = '';
return `<div class="sc_img"><p><p>${object.born}</p></div>`
  
}