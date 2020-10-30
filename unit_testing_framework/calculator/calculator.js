/**
 *
 * Calculator for adding and multiplicating numbers
 * @class Calculator
 */
class Calculator {
    /**
        * Creates an instance of Calculator.
        * @memberof Calculator
        */
    constructor() {
    }

    /**
       *
       * Sum all parameters of type Number and returns answer
       * @param {...Number} values
       * @return {Number} Sum of numbers
       * @memberof Calculator
       */
    add(...values) {
        if (Array.isArray(values) && (values.length !== 1) &&
            values.every(item => typeof item === 'number')) {
            return values.reduce((a, b) => a + b);
        } else {
            throw new TypeError('Invalid types of parameters');
        }
    }

    /**
     *
     * Multiply all parameters of type Number and returns answer
     * @param {...Number} values
     * @return {Number} Multiply numbers
     * @memberof Calculator
     */
    multiply(...values) {
        if (Array.isArray(values) && (values.length !== 1) &&
            values.every(item => typeof item === 'number')) {
            return values.reduce((a, b) => a * b);
        } else {
            throw new TypeError('Invalid types of parameters');
        }
    }
}

module.exports = Calculator