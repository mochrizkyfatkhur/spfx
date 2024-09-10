(window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] = window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] || []).push([[2],{

/***/ "5zuL":
/*!***********************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/helpers/String.extensions.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ "8pf3");

/**
 * Parses number in invariant culture
 */
String.prototype.parseNumberInvariant = function () {
    return this._parseNumber((window.Sys && window.Sys.CultureInfo && window.Sys.CultureInfo.InvariantCulture) || _Constants__WEBPACK_IMPORTED_MODULE_0__["InvariantCulture"]);
};
/**
 * Parses number in provided culture
 */
String.prototype._parseNumber = function (culture) {
    var str = '' + this;
    str = str.trim();
    if (str.match(/^[+-]?infinity$/i)) {
        return parseFloat(str);
    }
    if (str.match(/^0x[a-f0-9]+$/i)) {
        return parseInt(str);
    }
    var numberFormat = culture.numberFormat;
    var patternParsed = str._parseNumberNegativePattern(numberFormat, numberFormat.NumberNegativePattern);
    var symbol = patternParsed[0];
    var digit = patternParsed[1];
    if (symbol === '' && numberFormat.NumberNegativePattern !== 1) {
        patternParsed = str._parseNumberNegativePattern(numberFormat, 1);
        symbol = patternParsed[0];
        digit = patternParsed[1];
    }
    if (symbol === '') {
        symbol = '+';
    }
    var exponent;
    var base;
    var scientificSymbolIndex = digit.indexOf('e');
    if (scientificSymbolIndex < 0) {
        scientificSymbolIndex = digit.indexOf('E');
    }
    if (scientificSymbolIndex < 0) {
        base = digit;
        exponent = null;
    }
    else {
        base = digit.substr(0, scientificSymbolIndex);
        exponent = digit.substr(scientificSymbolIndex + 1);
    }
    var intPart;
    var fractionalPart;
    var decimalSeparatorIdx = base.indexOf(numberFormat.NumberDecimalSeparator);
    if (decimalSeparatorIdx < 0) {
        intPart = base;
        fractionalPart = null;
    }
    else {
        intPart = base.substr(0, decimalSeparatorIdx);
        fractionalPart = base.substr(decimalSeparatorIdx + numberFormat.NumberDecimalSeparator.length);
    }
    intPart = intPart.split(numberFormat.NumberGroupSeparator).join('');
    var n = numberFormat.NumberGroupSeparator.replace(/\u00A0/g, ' ');
    if (numberFormat.NumberGroupSeparator !== n) {
        intPart = intPart.split(n).join('');
    }
    var result = symbol + intPart;
    if (fractionalPart !== null) {
        result += '.' + fractionalPart;
    }
    if (exponent !== null) {
        var exponentParsed = exponent._parseNumberNegativePattern(numberFormat, 1);
        if (exponentParsed[0] === '') {
            exponentParsed[0] = '+';
        }
        result += 'e' + exponentParsed[0] + exponentParsed[1];
    }
    if (result.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/)) {
        return parseFloat(result);
    }
    return Number.NaN;
};
/**
 * Internal method, Microsoft's replica to parse FriendlyFormat of date or digit
 */
String.prototype._parseNumberNegativePattern = function (numberFormat, pattern) {
    var negativeSign = numberFormat.NegativeSign;
    var positiveSign = numberFormat.PositiveSign;
    switch (pattern) {
        case 4:
            negativeSign = ' ' + negativeSign;
            positiveSign = ' ' + positiveSign;
            break;
        case 3:
            if (this.endsWith(negativeSign)) {
                return ['-', this.substr(0, this.length - negativeSign.length)];
            }
            else if (this.endsWith(positiveSign)) {
                return ['+', this.substr(0, this.length - positiveSign.length)];
            }
            break;
        case 2:
            negativeSign += ' ';
            positiveSign += ' ';
            break;
        case 1:
            if (this.startsWith(negativeSign)) {
                return ['-', this.substr(negativeSign.length)];
            }
            else if (this.startsWith(positiveSign)) {
                return ['+', this.substr(positiveSign.length)];
            }
            break;
        case 0:
            if (this.startsWith('(') && this.endsWith(')')) {
                return ['-', this.substr(1, this.length - 2)];
            }
    }
    return ['', this];
};
//# sourceMappingURL=String.extensions.js.map

/***/ }),

/***/ "8pf3":
/*!***************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/helpers/Constants.js ***!
  \***************************************************************************/
/*! exports provided: LoadedViewFieldsKey, FieldNamesMapping, InvariantCulture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedViewFieldsKey", function() { return LoadedViewFieldsKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldNamesMapping", function() { return FieldNamesMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantCulture", function() { return InvariantCulture; });
/**
 * Key that is used to store loaded fields in sessionStorage
 */
var LoadedViewFieldsKey = 'LBLoadedViewFields';
/**
 * Mapping between current field name and the name of the real field that contains the data
 */
var FieldNamesMapping = {
    'Title': {
        'storedName': 'Title'
    },
    'LinkTitle': {
        'storedName': 'Title'
    },
    'LinkTitleNoMenu': {
        'storedName': 'Title'
    },
    'LinkFilename': {
        'storedName': 'FileLeafRef'
    },
    'LinkFileNameNoMenu': {
        'storedName': 'FileLeafRef'
    },
    'FileLeafRef': {
        'storedName': 'FileLeafRef'
    },
    'URL': {
        'storedName': 'URL'
    },
    'URLwMenu': {
        'storedName': 'URL'
    }
};
/**
 * Invariant Culture
 */
var InvariantCulture = {
    name: '',
    numberFormat: {
        CurrencyDecimalDigits: 2,
        CurrencyDecimalSeparator: '.',
        IsReadOnly: true,
        CurrencyGroupSizes: [3],
        NumberGroupSizes: [3],
        PercentGroupSizes: [3],
        CurrencyGroupSeparator: ',',
        CurrencySymbol: '¤',
        NaNSymbol: 'NaN',
        CurrencyNegativePattern: 0,
        NumberNegativePattern: 1,
        PercentPositivePattern: 0,
        PercentNegativePattern: 0,
        NegativeInfinitySymbol: '-Infinity',
        NegativeSign: '-',
        NumberDecimalDigits: 2,
        NumberDecimalSeparator: '.',
        NumberGroupSeparator: ',',
        CurrencyPositivePattern: 0,
        PositiveInfinitySymbol: 'Infinity',
        PositiveSign: '+',
        PercentDecimalDigits: 2,
        PercentDecimalSeparator: '.',
        PercentGroupSeparator: ',',
        PercentSymbol: '%',
        PerMilleSymbol: '‰',
        NativeDigits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        DigitSubstitution: 1
    },
    dateTimeFormat: {
        AMDesignator: 'AM',
        Calendar: {
            MinSupportedDateTime: '@-62135568000000@',
            MaxSupportedDateTime: '@253402300799999@',
            AlgorithmType: 1,
            CalendarType: 1,
            Eras: [1],
            TwoDigitYearMax: 2029,
            IsReadOnly: true
        },
        DateSeparator: '/',
        FirstDayOfWeek: 0,
        CalendarWeekRule: 0,
        FullDateTimePattern: 'dddd, dd MMMM yyyy HH:mm:ss',
        LongDatePattern: 'dddd, dd MMMM yyyy',
        LongTimePattern: 'HH:mm:ss',
        MonthDayPattern: 'MMMM dd',
        PMDesignator: 'PM',
        RFC1123Pattern: 'ddd, dd MMM yyyy HH\':\'mm\':\'ss \'GMT\'',
        ShortDatePattern: 'MM/dd/yyyy',
        ShortTimePattern: 'HH:mm',
        SortableDateTimePattern: 'yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss',
        TimeSeparator: ':',
        UniversalSortableDateTimePattern: 'yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'',
        YearMonthPattern: 'yyyy MMMM',
        AbbreviatedDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ShortestDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        DayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        AbbreviatedMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
        MonthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
        IsReadOnly: true,
        NativeCalendarName: 'Gregorian Calendar',
        AbbreviatedMonthGenitiveNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''],
        MonthGenitiveNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ''],
        eras: [1, 'A.D.', null, 0]
    }
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "yVpZ":
/*!*******************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/helpers/GeneralHelper.js ***!
  \*******************************************************************************/
/*! exports provided: IMG_SUPPORTED_EXTENSIONS, GeneralHelper, setPropertyValue, getPropertyValue, toRelativeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_SUPPORTED_EXTENSIONS", function() { return IMG_SUPPORTED_EXTENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralHelper", function() { return GeneralHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropertyValue", function() { return setPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyValue", function() { return getPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRelativeUrl", function() { return toRelativeUrl; });
/* harmony import */ var _String_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./String.extensions */ "5zuL");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__);



var IMG_SUPPORTED_EXTENSIONS = ".gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png,.jxr,.svg";
/**
 * Helper with general methods to simplify some routines
 */
var GeneralHelper = /** @class */ (function () {
    function GeneralHelper() {
    }
    /**
     * Trims slash at the end of URL if needed
     * @param url URL
     */
    GeneralHelper.trimSlash = function (url) {
        if (url.lastIndexOf('/') === url.length - 1)
            return url.slice(0, -1);
        return url;
    };
    /**
     * Encodes text
     * @param text text to encode
     */
    GeneralHelper.encodeText = function (text) {
        var n = /[<>&'"\\]/g;
        return text ? text.replace(n, this._getEncodedChar) : '';
    };
    /**
     * Copy of Microsoft's GetRelativeDateTimeString from SP.dateTimeUtil
     */
    GeneralHelper.getRelativeDateTimeString = function (format) {
        var formatParts = format.split('|');
        var result = null;
        var placeholdersString = null;
        if (formatParts[0] === '0')
            return format.substring(2);
        var isFuture = formatParts[1] === '1';
        var formatType = formatParts[2];
        var timeString = formatParts.length >= 4 ? formatParts[3] : null;
        var dayString = formatParts.length >= 5 ? formatParts[4] : null;
        switch (formatType) {
            case '1':
                result = isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AFewSecondsFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AFewSeconds'];
                break;
            case '2':
                result = isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AboutAMinuteFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AboutAMinute'];
                break;
            case '3':
                placeholdersString = this.getLocalizedCountValue(isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XMinutesFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XMinutes'], isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XMinutesFutureIntervals'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XMinutesIntervals'], Number(timeString));
                break;
            case '4':
                result = isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AboutAnHourFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_AboutAnHour'];
                break;
            case '5':
                if (timeString === null) {
                    result = isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_Tomorrow'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_Yesterday'];
                }
                else {
                    placeholdersString = isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_TomorrowAndTime'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_YesterdayAndTime'];
                }
                break;
            case '6':
                placeholdersString = this.getLocalizedCountValue(isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XHoursFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XHours'], isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XHoursFutureIntervals'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XHoursIntervals'], Number(timeString));
                break;
            case '7':
                if (dayString === null) {
                    result = timeString;
                }
                else {
                    placeholdersString = PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_DayAndTime'];
                }
                break;
            case '8':
                placeholdersString = this.getLocalizedCountValue(isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XDaysFuture'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XDays'], isFuture ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XDaysFutureIntervals'] : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_XDaysIntervals'], Number(timeString));
                break;
            case '9':
                result = PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["DateTime"]['L_RelativeDateTime_Today'];
        }
        if (placeholdersString !== null) {
            result = placeholdersString.replace("{0}", timeString);
            if (dayString !== null) {
                result = result.replace("{1}", dayString);
            }
        }
        return result;
    };
    /**
     * Copy of Microsoft's GetLocalizedCountValue from SP.dateTimeUtil.
     * I've tried to rename all the vars to have meaningful names... but some were too unclear
     */
    GeneralHelper.getLocalizedCountValue = function (format, first, second) {
        if (format === undefined || first === undefined || second === undefined)
            return null;
        var result = '';
        var a = -1;
        var firstOperandOptions = first.split('||');
        for (var firstOperandOptionsIdx = 0, firstOperandOptionsLen = firstOperandOptions.length; firstOperandOptionsIdx < firstOperandOptionsLen; firstOperandOptionsIdx++) {
            var firstOperandOption = firstOperandOptions[firstOperandOptionsIdx];
            if (firstOperandOption === null || firstOperandOption === '')
                continue;
            var optionParts = firstOperandOption.split(',');
            for (var optionPartsIdx = 0, optionPartsLen = optionParts.length; optionPartsIdx < optionPartsLen; optionPartsIdx++) {
                var optionPart = optionParts[optionPartsIdx];
                if (optionPart === null || optionPart === '')
                    continue;
                if (isNaN(optionPart.parseNumberInvariant())) {
                    var dashParts = optionPart.split('-');
                    if (dashParts === null || dashParts.length !== 2)
                        continue;
                    var j = void 0, n = void 0;
                    if (dashParts[0] === '')
                        j = 0;
                    else if (isNaN(dashParts[0].parseNumberInvariant()))
                        continue;
                    else
                        j = parseInt(dashParts[0]);
                    if (second >= j) {
                        if (dashParts[1] === '') {
                            a = firstOperandOptionsIdx;
                            break;
                        }
                        else if (isNaN(dashParts[1].parseNumberInvariant()))
                            continue;
                        else
                            n = parseInt(dashParts[1]);
                        if (second <= n) {
                            a = firstOperandOptionsIdx;
                            break;
                        }
                    }
                }
                else {
                    var p = parseInt(optionPart);
                    if (second === p) {
                        a = firstOperandOptionsIdx;
                        break;
                    }
                }
            }
            if (a !== -1)
                break;
        }
        if (a !== -1) {
            var e = format.split('||');
            if (e !== null && e[a] !== null && e[a] !== '')
                result = e[a];
        }
        return result;
    };
    /**
     * Extracts text from HTML strings without creating HTML elements
     * @param html HTML string
     */
    GeneralHelper.getTextFromHTML = function (html) {
        var result = html;
        var oldResult = result;
        var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        var tagOrComment = new RegExp('<(?:'
            // Comment body.
            + '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            + '|/?[a-z]'
            + tagBody
            + ')>', 'gi');
        do {
            oldResult = result;
            result = result.replace(tagOrComment, '');
        } while (result !== result);
        return result;
    };
    /**
     * Checks if value is defined (not null and not undefined)
     * @param value value
     */
    GeneralHelper.isDefined = function (value) {
        return typeof value !== 'undefined' && value !== null;
    };
    /**
     * Creates Document element based on Xml string
     * @param xmlString XML string to parse
     */
    GeneralHelper.parseXml = function (xmlString) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(xmlString, 'text/xml');
        return xml;
    };
    /**
     * Returns absoulute domain URL.
     * @param url
     */
    GeneralHelper.getAbsoluteDomainUrl = function (url) {
        if (url !== undefined) {
            var myURL = new URL(url.toLowerCase());
            return myURL.protocol + "//" + myURL.host;
        }
        else {
            return undefined;
        }
    };
    /**
     * To support IE11 that has no support for File constructor
     * @param blob
     */
    GeneralHelper.getFileFromBlob = function (blob, fileName) {
        var result = null;
        // IE 11 foesn't support File API, create a workaround to return Blob with fileName assigned.
        try {
            result = new File([blob], fileName);
        }
        catch (ieErr) {
            result = blob;
            result.fileName = fileName;
        }
        return result;
    };
    GeneralHelper.formatBytes = function (bytes, decimals) {
        if (bytes === 0) {
            return PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["EmptyFileSize"];
        }
        var k = 1024;
        var dm = decimals <= 0 ? 0 : decimals || 2;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + PropertyControlStrings__WEBPACK_IMPORTED_MODULE_2__["SizeUnit"][i];
    };
    /**
     * Returns file name without extension.
     */
    GeneralHelper.getFileNameWithoutExtension = function (itemUrl) {
        var fileNameWithExtension = GeneralHelper.getFileNameFromUrl(itemUrl);
        var fileNameTokens = fileNameWithExtension.split(".");
        var fileName = fileNameTokens[0];
        return fileName;
    };
    /**
     * Returns file name with the extension
     */
    GeneralHelper.getFileNameFromUrl = function (itemUrl) {
        var urlTokens = itemUrl.split("?");
        var url = urlTokens[0];
        var tokens = url.split("/");
        var fileNameWithExtension = tokens[tokens.length - 1];
        return fileNameWithExtension;
    };
    GeneralHelper.isImage = function (fileName) {
        var acceptableExtensions = IMG_SUPPORTED_EXTENSIONS.split(",");
        var thisExtension = GeneralHelper.getFileExtension(fileName);
        return acceptableExtensions.indexOf(thisExtension) > -1;
    };
    /**
     * Returns extension of the file
     */
    GeneralHelper.getFileExtension = function (fileName) {
        // Split the URL on the dots
        var splitFileName = fileName.toLowerCase().split('.');
        // Take the last value
        var extensionValue = splitFileName.pop();
        // Check if there are query string params in place
        if (extensionValue.indexOf('?') !== -1) {
            // Split the string on the question mark and return the first part
            var querySplit = extensionValue.split('?');
            extensionValue = querySplit[0];
        }
        return "." + extensionValue;
    };
    GeneralHelper._getEncodedChar = function (c) {
        var o = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "\\": "&#92;"
        };
        return o[c];
    };
    return GeneralHelper;
}());

var setPropertyValue = function (properties, targetProperty, value) {
    if (!properties) {
        return;
    }
    if (targetProperty.indexOf('.') === -1) { // simple prop
        properties[targetProperty] = value;
    }
    else {
        _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["set"](properties, targetProperty, value);
    }
};
var getPropertyValue = function (properties, targetProperty) {
    if (!properties) {
        return undefined;
    }
    if (targetProperty.indexOf('.') === -1) {
        return properties[targetProperty];
    }
    return _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_1__["get"](properties, targetProperty);
};
var toRelativeUrl = function (absoluteUrl) {
    if (!absoluteUrl) {
        return '';
    }
    return absoluteUrl.replace(/^(?:\/\/|[^/]+)*\//, '/');
};
//# sourceMappingURL=GeneralHelper.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.2.js.map