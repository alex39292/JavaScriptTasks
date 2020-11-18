const Calculator = require('../unit_testing_framework/calculator/calculator');
const {expect} = require('chai');

describe('Test for method multipy()', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    })

    it('Multiply 2 numbers', () => {
        expect(calculator.multiply(2, 2)).to.be.equal(4);
    });

    it('Multiply 4 numbers', () => {
        expect(calculator.multiply(2, 2, 6, 10)).to.be.equal(240);
    });

    it('Multiply invalid parameters', () => {
        expect(() => {
            calculator.multiply('2', true, 'be or not to be');
        }).to.throw('Invalid types of parameters');
    });

    it('One parameter, it should return TypeError', () => {
        expect(() => {
            calculator.multiply(2);
        }).to.throw('Invalid types of parameters');
    });
});