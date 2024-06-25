//decrelare variables and get the ids of the html document
const reduceButton = document.getElementById("reduceButton");
const autoButton = document.getElementById("autoButton");
const addButton = document.getElementById("addButton");

//assign our count to 0
let counterValue = 0;
let intervalid = null;

counter.innerText = counterValue;
//functions of the three buttons

addButton.addEventListener("click", function(e) {
    counterValue++;
    counter.innerText = counterValue;
})
reduceButton.addEventListener("click", function(e) {
    if (counter !== 0) {
        counterValue--;
        counter.innerText = counterValue;
    }
})
autoButton.addEventListener("click", function(e) {
    if (intervalid == null) {
        intervalid = setInterval(() => {
            counterValue++;
            counter.innerText = counterValue;
        }, 1000);
        autoButton.innerText = "stop";
    } else {
        clearInterval(intervalid);
        intervalid = null;
        autoButton.innerText = "start";
    }

});