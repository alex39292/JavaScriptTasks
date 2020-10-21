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
       * Sum all parameters and returns answer
       * @param {Array<Number>} values
       * @return {Number} Sum of numbers
       * @memberof Calculator
       */
    add(...values) {
        if (Array.isArray(values) &&
            values.every(item => typeof item === 'number')) {
            return values.reduce((a, b) => a + b)
        } else {
            throw new Error('Message')
        }
    }

    /**
     *
     * Multiply all parameters and returns answer
     * @param {Array<Number>} values
     * @return {Number} Multiply numbers
     * @memberof Calculator
     */
    multiply(...values) {
        if (Array.isArray(values) &&
            values.every(item => typeof item === 'number')) {
            return values.reduce((a, b) => a * b)
        } else {
            throw new Error('Message')
        }
    }
}

module.exports = Calculator
