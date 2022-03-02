var A = 100;                                                      //I assigned a variable and wrote and if statement
if (A > 1) {
    document.write("A is greater than 1.");
}

x = "Global Variable"                                                  //I assigned a global variable
function Local_fun() {
    y = "Local Variable";                                                 //I assigned a local variable
    document.getElementById("global_local").style.color = "orange";
    document.getElementById("global_local").innerHTML = x + y;
}
document.write(x);
document.write(y);                                                             //I intentionally wrote a local variable outside of its function to throw an error

function sunsetfunc() {                                                       //A function with an if statement
    if (new Date().getHours() > 17) {
    document.getElementById("sunrise").innerHTML = "Good evening!";
    }
}

function weight_function() {                                                       //A function with an if else statement
    weight = document.getElementById("weight").value;
    if (weight >= 90 && weight <= 300) {                                            //I used the "and" operator to check for a min and a max weight
        weight = "You meet the weight requirements for this ride.";
    }
    else {
        weight = "You do not meet the weight requirements for this ride.";
    }
    document.getElementById("how_much_do_you_weigh?").innerHTML = weight;
}

function Time_Function() {                                                        //This function uses else if
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Replay = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}