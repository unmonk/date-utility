'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const dateUtility = require('../index');

describe('#dateUtility', function() {
    it('should validate a valid date', function() {
        const result = dateUtility.isValidDate("01/01/2017");
        expect(result).to.equal(true);
    });

    it('should reject an invalid date', function() {
        const result = dateUtility.isValidDate("abcd");
        expect(result).to.equal(false);
    });

    it('should return a formatted date', function() {
        const result = dateUtility.getFormattedDate("01/01/2017");
        expect(result).to.equal("2017-01-01");
    });

    it('should return years since input year', function() {
        const result = dateUtility.getYearsSince(2015);
        expect(result).to.equal(2);
    });

    it('should return a number of years since input year ', function() {
        const result = dateUtility.getYearsSince(1944);
        assert.isNotNaN(result, result + " is NaN");
    });

    it('should return the current year ', function() {
        const result = dateUtility.getCurrentYear()  ;
        assert.isNotNaN(result, result + " is NaN");
    });



});