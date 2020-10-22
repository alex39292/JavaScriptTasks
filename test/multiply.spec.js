const Calculator = require('../unit_testing_framework/calculator/calculator')
const {expect} = require('chai')

describe('Test for method multipy()', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator()
    })

    it('Multiply 2 numbers', function() {
        expect(calculator.multiply(2, 2)).to.be.equal(4)
    })

    it('Multiply 4 numbers', function() {
        expect(calculator.multiply(2, 2, 6, 10)).to.be.equal(240)
    })

    it('Multiply invalid parameters', function() {
        expect(() => {
            calculator.multiply('2', true, 'be or not to be')
        }).to.throw('Invalid types of parameters')
    })

    it('One parameter, it should return TypeError', function() {
        expect(() => {
            calculator.multiply(2)
        }).to.throw('Invalid types of parameters')
    })
})