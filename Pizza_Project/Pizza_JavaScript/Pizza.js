function getReceipt() {
    var text1 = "<h3>You orderded:</h3>";                         //This initializes our string so it can get passed from
    var runningTotal = 0;                                        //function to function, growing line by line into a full receipt
    var sizeTotal = 0;                                            //this sets our totals to zero
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {                    //this allows us to check which size pizza was selected
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {                        //this section sets the price of each size of pizza
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;                                       //this section starts adding up the total in the console
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");        //these variables will get passed to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {                            //this section checks which toppings were selected
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");          //toppings are $1 for each topping
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;                              
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);                                   //this gives the customer 1 free topping
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);                                                  //this sections adds the cost from the size of the pizza to the cost of the toppings
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;                                                                 //This shows on the screen what all was ordered
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";    //This shows the total price
};