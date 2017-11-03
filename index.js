/**
 * Utility functions to process dates
 */

'use strict';

const moment = require('moment');


const INPUT_FORMATS = ['YYYY-MM-DD', 'MM/DD/YYYY'];
const OUTPUT_FORMAT = 'YYYY-MM-DD';

/**
 * @param unformattedDate
 * @returns {*|moment.Moment}
 * @private
 */
function _getMoment(unformattedDate) {
    return moment(unformattedDate, INPUT_FORMATS);
}

/**
 * Returns true if dateIn is in a valid format.  Otherwise false is returned.
 * @param {string} dateIn
 * @return {boolean}
 * @public
 */
function isValidDate(dateIn) {

    const date = _getMoment(dateIn);
    return date.isValid();
}

/**
 * Returns date in a YYYY-MM-DD format
 * @param {string} unformattedDate
 * @return {string}
 * @public
 */
function getFormattedDate(unformattedDate) {

    var formattedDate;
    const date = _getMoment(unformattedDate);

    if (date.isValid()) {
        formattedDate = date.format(OUTPUT_FORMAT);
    } else {
        const errorMsg = 'Error: date-utility.getFormattedDate: Date \''
            + unformattedDate + '\' is not in a valid date format.';
        console.error(errorMsg);
        throw Error(errorMsg);
    }

    return formattedDate;
}

/**
 *
 * @param year
 * @returns {number}
 * @public
 */

function getYearsSince(year)  {
    const currentYear = moment().year();
    return currentYear - year;
}

/**
 *
 * @returns {moment.Moment | number}
 * @public
 */

function getCurrentYear()  {
    const currentYear = moment().year();
    return currentYear;
}

module.exports = {
    isValidDate : isValidDate,
    getCurrentYear: getCurrentYear,
    getFormattedDate : getFormattedDate,
    getYearsSince : getYearsSince
};

