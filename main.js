class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear()
        //clear function so that we can reset the inputs.
    }
}

// a function to clearAll the current Output
clear(); {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
// a function to delete single value each when user click.
deletes (); {
    this.currentOperand = this.currentOperand.String().slice(0, -1)
}

// a function on how to append the number to output, everytime a user input a number.
appendNumber(num); {
    this.currentOperand = num
    // if (num === '-' && this.currentOperand.includes('.'))
    //     return this.currentOperand.toString() + num.toString()
}

// a function on when a user choose an operation 
chooseOperation(); {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

// a function to compute and display the result to the output
compute(); {
    let computation
    const prev = parseInt(this.previousOperand)
    const current = parseInt(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
    }
    this.currentOperand = computation
    this.operation - undefined
    this.previousOperand = ''
}

getDisplayNumber(nums); {
    const stringNumber = nums.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

// a function to display current value entered by a user.
updateDisplay(); {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }


const number = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('[data-equal]');
const deletes = document.querySelector('[data-delete]');
const dataAllClear = document.querySelector('[data-all-clear]');
const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');

// This constructor is going to take the previous text and the current text so that we can determine where 
// to display the numbers in the calculator 

//Hook all the variables and make them operate on calculator object or calculator constructor
// pass the 2 parameter we made for calculator constructor
const calculator = new Calculator(previousOperand, currentOperand)






// loop over each numbers and add an evenlistener so that everytime user click the button it will respond 
// to that specific value and making sure it append the value inside the output using innerText
// also making sure the display is updating by calling updatedisplay to the constructor calculator.
number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// Loop over each operation and make an addeventlistener to receive the action of the user
// When clicked, same as the number operation it will display to the output and by innerText
operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

//When clicked, it will display the result as the currentOperand. 
equal.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

dataAllClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleted.addEventListener('click', button =>{
    calculator.deletes()
    calculator.updateDisplay()
})






