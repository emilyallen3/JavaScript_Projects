const Calculator = {             //creates an object to keep track of values
    Display_Value: '01134',           //this displays 0 on the screen
    First_Operand: null,           //this will hold the first operand for any expressions, we set it to null for now
    Wait_Second_Operand: false,     //this checks whether or not the second operand has been input
    operator: null,                  //this will hold the operator, we set it to null for now
};

function Input_Digit(digit) {                                               //this modifies values each time a button is clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;              //We are checking to see if Wait_Second_Operand is true and set
    if (Wait_Second_Operand === true) {                                     //Display_Value to the key that was clicked
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {                                                                                 //This overwrites Display_Value if the current value is 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;    //otherwise it adds onto it
    } 
}

function Input_Decimal(dot) {                               //this section handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;      //this ensures that accidental clicking of the decimal point
    if (!Calculator.Display_Value.includes(dot)) {           //doesn't cause bugs in your operation
        Calculator.Display_Value += dot;                      //we are saying that is the Display_Value does not contain a decimal point
    }                                                         //we want to add a decimal point
}

function Handle_Operator(Next_Operator) {                             //this section handles operators
    const { First_Operand, Display_Value, operator } = Calculator       //when an operator key is pressed, we convert the current number 
    const Value_of_Input = parseFloat(Display_Value);                   //displayed on the screen to a number and then store the result in
    if (operator && Calculator.Wait_Second_Operand) {                   //Calculator.First_Operand if it doesnt already exist
        Calculator.operator = Next_Operator;                            //checks if an operator already exists and if Wait_Second_Operand is true,
        return;                                                         //then updates the operator and exits the function
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {                                                //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);   //If operator already exists, propert lookup is performed for the operator
        result = Number(result).toFixed(9)                                       //in the perform_calculation object and the function that matches the operator is executed
        result = (result * 1).toString()                                           //we add a fixedamount of numbers after decimal and remove any trailing zeros
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {                                         //this function updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();                                                   //this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;                                         //the target variable is an object that represents the element that was clicked
    if (!target.matches('button')) {                                 //if the element that was clicked on is not a button, exit the function
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {    //ensures that the AC clears the numbers from the Calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})