var A = "My orange cat "
var B = "is named "
var C = "Thorin Oakencat."
var D = A.concat(B, C);
function cats() {                                         //This is the concat() method.
    document.getElementById("bootsncats").innerHTML = D;
}

function slice_Method() {                                    //This is the slice() method.
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = section;
}

let str = "I love music!";                                    //This is the substring() method.
document.write(str.substring(2, 6));

function upup_func() {                                        //This is the toUpperCase() method.
    let text = document.getElementById("upup").innerHTML;
    document.getElementById("upup").innerHTML = text.toUpperCase();
}

function findy() {                                              //This is the search() method.
    let text = document.getElementById("sleuth").innerHTML;
    let position = text.search("murderer");
    document.getElementById("detective").innerHTML = position;
}

function numstr_fun() {                                           //This is the toString() method.
    var z = 1024;
    document.getElementById("numstr").innerHTML = z.toString();
}

function precision_method() {                                      //This is the toPrecision() method.
    var y = 12345.6789012345;
    document.getElementById("precision").innerHTML = y.toPrecision(7);
}

function fixfixfunc() {                                             //This is the toFixed() method.
    let num = 12345.6789012345;
    document.getElementById("fixer").innerHTML = num.toFixed(3);
}

function valfun() {                                                 //This is the valueOf() method.
    let beef = "Where's the beef?";
    document.getElementById('valuetown').innerHTML = beef.valueOf();
}