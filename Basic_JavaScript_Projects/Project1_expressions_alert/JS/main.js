window.alert("Hello, World!");         //This opens an alert window that says Hello, World!
document.write("Hello, World!");       //This puts the text Hello, World! on the webpage

var A = "This is a string.";  //This code assigns the variable A to a string
document.write(A);            //This puts the text that is assigned to variable A on the webpage

var B = "My name is Emily"; //This code defines the variable B
window.alert(B);              //This code puts the variable B in an alert window

document.write("She doesn\'t like tomoatoes." + " And she never will.");   //This concatenates two strings

var C = "Who are you?" + " I don\'t know you.";
document.write(C);                                  //This assigns two concatenated strings to one variable and puts it on the webpage

document.write(B + C)                    //This puts on the webpage the value of two variables which have been concatenated

var Family = "The Allen\'s", Dad = "Nathan", Mom = "Emily",
    Son = "Daniel", Daughter1 = "Eleanor", Daughter2 = "Audrey";
document.write(Son);

D = A + B 

function my_first_function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

let text = "fontcolor() is deprecated in JavaScript";
let result = text.fontcolor("green");
document.getElementById("colored_text").innerHTML = result;