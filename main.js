// document.querySelector('.input-group').addEventListener("click", function(event) {
//     var itemAmount = parseInt(document.querySelector(".form-control").value);
//     if(event.target.classList.contains("fa-minus")) {
//         itemAmount = itemAmount - 1;
//         if(itemAmount>=0){
//             document.querySelector(".form-control").value = itemAmount;
//         }
//     }

//     if(event.target.classList.contains("fa-plus")) {
//         itemAmount = itemAmount + 1;
//         document.querySelector(".form-control").value = itemAmount;
//     }
// });

var inputGroups = document.getElementsByClassName('input-group');
var inputAreas = document.getElementsByClassName("form-control");
console.log(inputAreas);

for (let i = 0; i < inputGroups.length; i++) {
    inputGroups[i].addEventListener("click", function(event) {
        var itemAmount = parseInt(document.querySelector(".form-control").value);
        if(event.target.classList.contains("fa-minus")) {
            itemAmount = itemAmount - 1;
            if(itemAmount>=0){
                document.querySelector(".form-control").value = itemAmount;
            }
        }

        if(event.target.classList.contains("fa-plus")) {
            itemAmount = itemAmount + 1;
            document.querySelector(".form-control").value = itemAmount;
        }
    });
    
}


