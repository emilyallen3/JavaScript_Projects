function Function() {                                     //This is a function that displays a string when a button is clicked
    var str= "You clicked the button!";
    document.getElementById("text").innerHTML = str;
}
function icecream() {                                   //This is a function that displays a concatenated string when the button is clicked
    var sentence = "I like chocolate ice cream";
    sentence += " in a cup with milk!";
    document.getElementById('contatenate').innerHTML = sentence;
}