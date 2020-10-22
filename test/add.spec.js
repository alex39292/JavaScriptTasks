const Calculator = require('../unit_testing_framework/calculator/calculator')
const {expect} = require('chai')

describe('Tests for method add()', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator()
    })

    it('Simple sum with 2 numbers', function() {
        expect(calculator.add(2, 2)).to.be.equal(4)
    })

    it('Sum with 4 numbers', function() {
        expect(calculator.add(2, 2, 6, 10)).to.be.equal(20)
    })

    it('Sum invalid parameters', function() {
        expect(() => {
            calculator.add('2', true, 'be or not to be')
        }).to.throw('Invalid types of parameters')
    })

    it('One parameter, it should return TypeError', function() {
        expect(() => {
            calculator.add(2)
        }).to.throw('Invalid types of parameters')
    })
})
