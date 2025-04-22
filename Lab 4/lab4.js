const q1 = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
};

const q2 = () => {
    let result;
    if (prompt('Input UTHM') === 'UTHM') {
        result = 'Welcome to UTHM!';
    } else {
        result = 'Invalid entry!';
    }
    console.log(result);
    alert(result);
};

const q3 = {
    calculateSum: (num1, num2) => {
        return num1 + num2;
    }
};

class Car {
    constructor(brand = 'Lotus', model = 'Evija', year = '2024') {
        this.details = { brand: brand, model: model, year: year };
    }

    carDetails() {
        return `Car Details >>> brand: ${this.details.brand}, model: ${this.details.model}, year: ${this.details.year}`;
    }
}

const q4 = () => {
    const lotusCar = new Car();
    console.log(lotusCar.carDetails());
};

const q5 = () => {
    const fruits = ['Apple', 'Banana'];
    fruits.push('Mango');
    fruits.unshift('Grapes');
    fruits.pop();
    fruits.shift();
    console.log(fruits);
}

q1();

q2();

const num1 = +prompt('Input the first number');
const num2 = +prompt('Input the Second number');
alert(q3.calculateSum(num1, num2));

q4();

q5();
