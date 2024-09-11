let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let counter = 0;
let spinnerEl = document.getElementById("spinner")

function startCounting() {
    counter += 1;
    timerEl.textContent = counter;
}

let counterValue = setInterval(startCounting, 1000);

function getQuotes() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
        })
}

getQuotes()
startCounting()

submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterValue)
        resultEl.textContent = "You typed in " + counter + " seconds"
        resultEl.style.color = "#3e4c59";
        resultEl.style.fontSize = "25px";
    } else {
        resultEl.textContent = "You typed incorrect sentence"
        resultEl.style.color = "#3e4c59";
        resultEl.style.fontSize = "25px";

    }
}

resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none")
    getQuotes()
    startCounting()
    counter = 0;
    resultEl.textContent = ""
    quoteInputEl.value = ""
}
