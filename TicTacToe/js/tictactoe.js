let activePlayer = 'X';                                                      //This variable keeps track of whose turn it is.
let selectedSquares = [];                                                    //This array stores an array of moves. We use this to determine win conditions.

function placeXorO(squareNumber) {                                              //This function is for placing an x or an o in a square.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {    //This condition ensures a square hasn't already been selected. The .some() method is used to check each element of selectedSquare array to see if it contains the square number clicked on.
        let select = document.getElementById(squareNumber);                     //This variable retrieves the html element id that was clicked.
        if (activePlayer === 'X') {                                          //This condition checks whose turn it is.
            select.style.backgroundImage = "url('images/PinkX.png')";            //If activePlayer is equal to 'X', the x.png is places in HTML.
            select.style.backgroundRepeat = "no-repeat";
        } else {                                                               //Active player may only be 'X' or 'O' so, if it is not 'X' it must be 'O'
            select.style.backgroundImage = "url('images/GoldO.png')";               //If active player is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundRepeat = "no-repeat";
        }
        selectedSquares.push(squareNumber + activePlayer);                       //squareNumber and activePlayer are concatenated together and added to array.
        checkWinConditions();                                                   //This calls a function to check for any win conditions.
        if (activePlayer === 'X') {                                          //This condition is for changing the active player.
            activePlayer = 'O';                                                 //If active player is 'X' change it to 'O'
        } else {                                                                  //If activePlayer is anything other than 'X'
            activePlayer = 'X';                                                           //change the activePlayer to 'X'
        }


        audio('./media/zapsplat_pop.mp3');                                               //This function plays a placement sound - Sound by Zapsplat
        if (activePlayer === 'O') {                                                 //This condition checks to see if it is computers turn.
            disableClick();                                                             //This function diables clicking for computer choice.
            setTimeout(function () { computersTurn(); }, 1000)                   //This function waits 1 second before computer places image and enables click.
        }
        return true;                                                         //Returning true is needed for our computersTurn() function to work.
    }
    //This function results in a random square being selected.
    function computersTurn() {                       
        let success = false;                                                //This boolean is needed for our while loop
        let pickASquare;                                                     //This variable stores a random number 0-8
        while (!success) {                                                   //This condition allows out while loop to keep trying is a square is selected already
            pickASquare = String(Math.floor(Math.random() * 9));              //A random number between 0 and 8 is selected
            if (placeXorO(pickASquare)) {                                    //If the random number evaluated returns true, the square hasn't been selected yet
                placeXorO(pickASquare);                                       //This line calls the function
                success = true;                                               //This changes our boolean and ends the loop
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw a line if condition is met.
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        audio('./media/zapsplat_splash.mp3');                             //sound by ZapSplat
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {                             //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true}                      //If the 3 variables we pass are all included in our array true is returned and our else if condition excutes the darwWinLine function.
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';                                                //This makes out body unclickable
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);             //This makes our body clickable again after 1 second
}

//This function takes a string parameter of the path you set earlier for placement sound
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")                        //This access our html canvas element
    const c = canvas.getContext('2d');                                          //This gives us access to methods and properties to use on canvas.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    
    
    //This function interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);               //This variable creates a loop
        c.clearRect(0, 0, 608, 608)                                                       //This methos clears content from last loop iteration
        c.beginPath();                                                                //This method starts a new path
        c.moveTo(x1, y1)                                                              //This method moves us to a srating point for our line.
        c.lineTo(x, y)                                                                //This method inicates the end point in our line
        c.lineWidth = 10;                                                               //This method sets the width of our line
        c.strokeStyle = 'rgba(70,255,33,0.8)';                                         //This method sets the color of our line
        c.stroke();                                                                     //This method draws everything we laid out above
        if (x1 <= x2 && y1 <= y2) {                                                        //This condition checks if we reached the endpoint
            if (x < x2) { x += 10; }                                                                 //This condition adds 10 to the previous end x point
            if (y < y2) { y += 10; }                                                      //This condition adds 10 to the previous end y point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }                //This condition cancels our animation loop if we've reached the end points
        }

        //This condition is similar to the one above. This is necessary for thte 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }


    //This function clears our canvas after our win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);                                //This line starts our animation loop
        c.clearRect(0, 0, 608, 608);                                                       //This line clears our canvas
        cancelAnimationFrame(animationLoop);                                                //This line stops our animation loop
    }
    disableClick();                                                                //This line disallows clicking while the win sound is playing
    audio('./media/zapsplat_win.mp3');                                                 //This line plays the win sound - Sound by Zapsplat
    animateLineDrawing();                                                          //This line calls our main animation loop
    setTimeout(function () { clear(); resetGame(); }, 1000);                        //This line waits 1 second. Then clears canvas, resets game, and allows clicking again.
}


//This function resets the game in the event of a tie or a win
function resetGame() {
    for (let i = 0; i < 9; i++) {                                     //This for loop iterates through each html sqaure element
        let square = document.getElementById(String(i))              //This variable gets the html element of i
        square.style.backgroundImage = ""                              //This removes our elements backgroundImage
    }
    selectedSquares = [];                                             //This resets our array so it is empty and we can start over
}