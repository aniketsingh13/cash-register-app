var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-taken");
var onClick = document.querySelector("#on-click");
var errorCheck = document.querySelector("#error-check");
var returnChange = document.querySelectorAll(".return-change")


var noteWeHave = [2000, 500, 100, 20, 10, 5, 1];

onClick.addEventListener("click", checkCondiion);

function checkCondiion() {


    errorCheck.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.vaue) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Do you wanna wash plate?");
        }


    } else {

        showMessage("invalid bill amount");
    }
};

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < noteWeHave.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / noteWeHave[i]);
        amountToBeReturned = amountToBeReturned % noteWeHave[i];
        returnChange[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    errorCheck.style.display = "none";
}

function showMessage(msg) {
    errorCheck.style.display = "block";
    errorCheck.innerText = msg;
}