// IMPORT MODULES under test here:
import { countsAsYes } from '../utils.js';

const test = QUnit.test;

test('should return true when provided a word that begins with letter y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes("yes to tests");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should return false when provided a word that begins with anything but y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes("not it");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should return false when empty string is entered', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes("");

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});