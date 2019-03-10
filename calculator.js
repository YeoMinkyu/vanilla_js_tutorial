const calculator = {
    plus: function(a, b){
        return a+b;
    },

    minus: function(a, b){
        return a-b;
    },

    multiply: function(a, b){
        return a*b;
    },

    divide: function(a, b){
        if (b===0){
            return "It can't be dividened";
        }
        else{
            return a/b;
        }
    },

    square: function(a, b){
        return a**b;
    }
}

const plus = calculator.plus(5, 10);
console.log(plus);

const minus = calculator.minus(5, 10);
console.log(minus);

const multiply = calculator.multiply(5, 10);
console.log(multiply);

const divide = calculator.divide(5, 10);
console.log(divide);

const divideZero = calculator.divide(5, 0);
console.log(divideZero);

const square = calculator.square(5, 2);
console.log(square);

// console.log(calculator.plus(5, 10));

// console.log("I'm working. Today is holiday. I will be free in my future.");
// console.log(console)

// function sayHello(name, age) 
// {
//     return `Hello ${name}. I'm ${age} years old.`;
//     // console.log(`Hello ${name}. I'm ${age} years old.`)
//     // console.log("Hello", name, "I'm", age, "years old.");
// }

// const greetMk = sayHello("MK", 15);

// console.log(greetMk)