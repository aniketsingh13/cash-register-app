var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-taken");
var onClick = document.querySelector("#on-click");
var errorCheck = document.querySelector(".error-check");
var returnChange = document.querySelectorAll(".return-change")


var noteWeHave = [2000, 500, 100, 20, 10, 5, 1];

onClick.addEventListener("click", checkCondiion)

function checkCondiion() {
    hideMessage();

    if (Number(billAmount.value > 0)) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBEReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBEReturned);

        } else {
            showMessage("Do you wanna wash plate?");
        }


    } else {

        showMessage("invalid bill amount");
    }
};

function calculateChange(amountToBEReturned) {
    for (var i = 0; i < noteWeHave.length; i++) {
        var numberOfNotes = Math.trunc(amountToBEReturned / noteWeHave[i]);
        amountToBEReturned = amountToBEReturned % noteWeHave[i];
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