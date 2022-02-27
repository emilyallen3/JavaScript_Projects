document.write(typeof "Love conquers all.");        //This will display String which is the data type
document.write(4 + "20");                          //This will coerce the data type

function func() {                                  //This is check if 8 is not a number and will return false
    document.getElementById("test").innerHTML = isNaN('8');
}

document.write(-4E312);               //negative infinity
document.write(5E423);                //infinity
document.write(13 < 14);              // operators >,<,==,===,&&,||, and !
document.write(13 < 12);              

console.log(3 + 4);                             //This will display in the console

console.log(100 < 2);

document.write(13 == 13);
document.write(4 == 2 + 3);

x = "Lame";
y = "Lame";
document.write(x === y);

A = 10;
B = "10";
document.write(A === B);

C = "sleep";
D = 80;
document.write(C === D);

E = "drink";
F = "water";
document.write(E === F);

document.write(5 > 2 && 10 > 5);
document.write(12 > 6 && 6 > 8);
document.write(5 > 2 || 6 > 8);
document.write(10 < 1 || 1 > 3);

function not_func() {
    document.getElementById("not").innerHTML = !(100 < 1);
}
