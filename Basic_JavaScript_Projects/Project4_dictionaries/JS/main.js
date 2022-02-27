function mario_dictionary() {                //This function creates a dictionary about Super Mario
    var character = {
        name: "Mario",                       //The key is name and the value is Mario
        shirt_color: "Red",
        phrase: "Ya-hoo!",
        move: "jump",
    };
    delete character.name;                   //The key-value pair for name has been deleted
    document.getElementById("dictionary").innerHTML = character.name;     //The key name has been called but will come back undefined because it has been deleted
}