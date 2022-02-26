function addfun() {                            //This is an addition function
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = addition;
}
function subfun() {                            //This is a subtraction function
    var subtraction = 5 - 3;
    document.getElementById("maths").innerHTML = subtraction;
}
function multfun() {                          //This function multiplies two numbers
    var mult = 6 * 8;
    document.getElementById("mathm").innerHTML = mult;
}
function divfun() {                           //This function divides one number by another
    var divide = 48 / 6;
    document.getElementById("mathd").innerHTML = divide;
}
function much_math() {                        //This is a combination of many mathmatical functions
    var some_math = (10 * 7) / 5 + (32 - 4);
    document.getElementById("mathx").innerHTML = some_math;
}
function modulus_op() {                          //This function gives the remainder about dividing one number by another
    var remmath = 38 % 3;
    document.getElementById("mathr").innerHTML = remmath;
}
function neg_op() {                               //This function makes a number negative
    var x = 1000;
    document.getElementById("mathn").innerHTML = -x;
}
function inc_op() {                              //This function increments an number by 1
    var x = 4; 
    x++;
    document.getElementById("mathi").innerHTML = x;
}
function dec_op() {                                 //This number decrements a number by 1
    var y = 4;
    y--;
    document.getElementById("mathdec").innerHTML = y;
}
window.alert(Math.random());                     //This makes an alert window appear with a random number between 0 and 1
window.alert(Math.random() * 100);               //This makes an alert window appear with a random number between 0 and 100
 
function getRandomInt(min,max) {                  //This generates a random integer between 2 numbers
    min = Math.ceil(min);
    max = Math.floor(max);
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("randomint").innerHTML = x;
}