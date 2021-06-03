// IMPORT MODULES under test here:
import { add, subtract, multiply, divide, mod, intdiv } from '../operations.js';

const test = QUnit.test;

// name your test by what it is testing
test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2,3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract function', (expect) => {
    const expected = 3;

    const actual = subtract(8, 5);

    expect.equal(actual, expected);
})

test('multiply function', (expect) => {
    const expected = 15;

    const actual = multiply(5, 3);

    expect.equal(actual, expected);
})

test('divide function', (expect) => {
    const expected = 10;

    const actual = divide(20,2);

    expect.equal(actual, expected);
})

test('modulo function', (expect) => {
    const expected = 1;

    const actual = mod(10,3);

    expect.equal(actual, expected);
})

test('integer division', (expect => {
    const expected = 1;

    const actual = intdiv(3, 2);

    expect.equal(actual, expected);
}))

test('pythagorean get hypotenuse', (expect) => {
    const expected = 25;

    const actual = '';

    expect.equal(actual, expected);
} )
