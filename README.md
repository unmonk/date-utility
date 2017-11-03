Date-Utility
============

A library that has some date verification and utilities with a dependency on Moment

## Installation

  `npm install date-utility`

## Usage

    const dateUtil = require('date-utility');

    const currentYear = dateUtil.getCurrentYear();   // 2017
    const age = dateUtil.getYearsSince(1944);   // 73
    const formattedDate = dateUtil.getFormattedDate("01/01/2017")  //"2017-01-01"
    const validDate = dateUtil.isValidDate("01/01/2017") //true

  


## Tests

  `npm test`

## Dependencies
moment
