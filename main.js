let inputGroups = document.getElementsByClassName('input-group');
let inputAreas = document.getElementsByClassName('form-control');
let price = document.getElementsByClassName('price');

for (let i = 0; i <= inputGroups.length; i++) {
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

        let amount = amountPrice(i);
        price[i].innerText = amount;
    });   
}

function amountPrice(productNumber) {
    productPrice = parseInt(price[productNumber].innerText);
    totalProductPrice =  inputAreas[productNumber].value * productPrice;
    return totalProductPrice;
}


