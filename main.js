let inputGroups = document.getElementsByClassName('input-group');
let inputAreas = document.getElementsByClassName('form-control');

let price = document.getElementsByClassName('price');
let currentPrice = [];

for (let i = 0; i < price.length; i++) {
    priceValue = parseInt(price[i].innerText);
    currentPrice.push(priceValue);    
}

for (let i = 0; i <= inputGroups.length; i++) {

    //Increment Counter
    inputGroups[i].addEventListener('click', function(event) {
        let currentItemAmount = parseInt(inputAreas[i].value);
        if(event.target.classList.contains("fa-minus")) {
            currentItemAmount = currentItemAmount - 1;
            if(currentItemAmount>=0){
                inputAreas[i].value = currentItemAmount;
            }
        }

        if(event.target.classList.contains("fa-plus")) {
            currentItemAmount = currentItemAmount + 1;
            inputAreas[i].value = currentItemAmount;
        }

        let productPrice = getIndividualPrice(i);
        price[i].innerText = productPrice;


        //Set Subtotal in DOM
        let subTotalAmount = subTotal();
        document.getElementById("subTotal").innerText = subTotalAmount;

        //Set Tax in DOM
        let taxApplied = taxAmount(subTotalAmount);
        document.getElementById("tax").innerText = taxApplied;

        let fullPayable = subTotalAmount + taxApplied;
        document.getElementById("total").innerText = fullPayable;

    });   
}
//Get Individual Total for a product

function getIndividualPrice(i) {
    currentProductPrice = currentPrice[i];
    productNumber = inputAreas[i].value;
    individualPrice = currentProductPrice * productNumber;
    return individualPrice;
}

function subTotal() {
    let subSum = 0;
    for (let i = 0; i < price.length; i++) {
        subSum = subSum + parseInt(price[i].innerText);       
    }
    return subSum;
}

function taxAmount(amount) {
    let taxPayable = amount * 0.15;
    return taxPayable;
}
