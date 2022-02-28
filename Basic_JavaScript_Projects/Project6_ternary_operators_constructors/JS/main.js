function ride_function() {                                                      //This is a ternary operation using input from the browser.
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vote_func() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "mustard");
function myfunction() {
    document.getElementById("keywords_and_constructors").innerHTML =
        "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model +
        " manufactured in " + Erik.vehicle_year;
}

function book(title, author, publish_year, genre) {                                 //This is a constructor function
    this.book_title = title;
    this.book_author = author;
    this.book_publish_year = publish_year;
    this.book_genre = genre;
}
var Emily = new book("Hatchet", "Gary Paulsen", "1986", "young adult novel");          
function myfunc() {                                                                     //This displays the results of the constructor function in HTML
    document.getElementById("new_and_this").innerHTML =
        "My favorite book in Jr. high was " + Emily.book_title + " by " + Emily.book_author;
}

const bestseller = new book("Harry Potter", "J.K. Rowling", "1997", "Fantasy");

document.write("I love " + bestseller.book_title); 

function Countingfun() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 4;
        function plus_one() { starting_point += 1; }                                     //This is a nested function
        plus_one();
        return starting_point;
    }
}