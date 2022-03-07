function Call_Loop() {                       //This function uses a while loop
    var Digit = "";
    var X = 1;
    while (X < 5) {
        Digit += "<br> La";
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function How_Long() {                            //This function finds the length of a string
    let text = "Hello Nathan!";
    let length = text.length;
    document.getElementById("Nathan").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Saxophone"];
var Content = "";                                
var Y;
function for_Loop() {                                //This function uses a for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function FamFun() {                     //This function uses an array
    var Allen = [];
    Allen[1] = "Nathan";
    Allen[2] = "Emily";
    Allen[3] = "Daniel";
    Allen[4] = "Eleanor";
    Allen[5] = "Audrey";
    document.getElementById("family").innerHTML = "In our family, " + Allen[3] + " is our oldest child.";
}

function constant_function() {           //The Object "outfit" has properties and values. Constant is immutable.
    const Outfit = { shirt: "blue", pants: "gray", hat: "red" };
    Outfit.shoes = "green";
    Outfit.hat = "yellow";
    document.getElementById("Constant").innerHTML = "Her outfit was full of color: " + Outfit.shirt + ", " + Outfit.shoes + ", and " + Outfit.hat + ".";
}

var A = 10;                         //The var A does not have block scope
document.write(A);
{
    let A = 20;                      //The let A does have block scope
    document.write("<br>" + A);
}
document.write("<br>" + A)

function ILikePie() {                  //This function uses the "return" method
    return Math.PI;
}
document.getElementById("Pie").innerHTML = ILikePie();

let pokemon = {                           //This is an object created with the "let" keyword
    name: "Pikachu ",
    type: "Electric ",
    color: "Yellow ",
    level: "87 ",
    description: function () {
        return "My pokemon is a level " + this.level + this.color + this.type + this.name;
    }
};
document.getElementById("Pokemon_Object").innerHTML = pokemon.description();

let text = "";
for (let i = 0; i < 10; i++) {                 //This for loop has a "continue" and a "break"
    if (i === 4) { continue;}
    if (i === 8) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("breaker").innerHTML = text;