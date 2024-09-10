(window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] = window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] || []).push([[4],{

/***/ "+HNA":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/colors.js ***!
  \********************************************************************************************************************/
/*! exports provided: MAX_COLOR_SATURATION, MAX_COLOR_HUE, MAX_COLOR_VALUE, MAX_COLOR_RGB, MAX_COLOR_RGBA, MAX_COLOR_ALPHA, MIN_HEX_LENGTH, MAX_HEX_LENGTH, MIN_RGBA_LENGTH, MAX_RGBA_LENGTH, HEX_REGEX, RGBA_REGEX, cssColor, rgb2hex, clamp, hsl2rgb, hsl2hsv, hsv2rgb, hsv2hex, rgb2hsv, hsv2hsl, getColorFromString, getColorFromRGBA, getColorFromHSV, getFullColorString, updateSV, updateH, updateRGB, updateA, correctRGB, correctHSV, correctHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_SATURATION", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_SATURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_HUE", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_HUE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_VALUE", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_VALUE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGB", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGBA", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_ALPHA", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIN_HEX_LENGTH", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MIN_HEX_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_HEX_LENGTH", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_HEX_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIN_RGBA_LENGTH", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MIN_RGBA_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_RGBA_LENGTH", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_RGBA_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEX_REGEX", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["HEX_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RGBA_REGEX", function() { return _consts__WEBPACK_IMPORTED_MODULE_0__["RGBA_REGEX"]; });

/* harmony import */ var _cssColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssColor */ "iZYe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssColor", function() { return _cssColor__WEBPACK_IMPORTED_MODULE_1__["cssColor"]; });

/* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return _rgb2hex__WEBPACK_IMPORTED_MODULE_2__["rgb2hex"]; });

/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clamp */ "SPjM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _clamp__WEBPACK_IMPORTED_MODULE_3__["clamp"]; });

/* harmony import */ var _hsl2rgb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsl2rgb */ "lO5p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return _hsl2rgb__WEBPACK_IMPORTED_MODULE_4__["hsl2rgb"]; });

/* harmony import */ var _hsl2hsv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hsl2hsv */ "tQgu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl2hsv", function() { return _hsl2hsv__WEBPACK_IMPORTED_MODULE_5__["hsl2hsv"]; });

/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return _hsv2rgb__WEBPACK_IMPORTED_MODULE_6__["hsv2rgb"]; });

/* harmony import */ var _hsv2hex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hsv2hex */ "uqLm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return _hsv2hex__WEBPACK_IMPORTED_MODULE_7__["hsv2hex"]; });

/* harmony import */ var _rgb2hsv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rgb2hsv */ "7NRl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb2hsv", function() { return _rgb2hsv__WEBPACK_IMPORTED_MODULE_8__["rgb2hsv"]; });

/* harmony import */ var _hsv2hsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hsv2hsl */ "hNd6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2hsl", function() { return _hsv2hsl__WEBPACK_IMPORTED_MODULE_9__["hsv2hsl"]; });

/* harmony import */ var _getColorFromString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getColorFromString */ "NV5/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromString", function() { return _getColorFromString__WEBPACK_IMPORTED_MODULE_10__["getColorFromString"]; });

/* harmony import */ var _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getColorFromRGBA */ "BB33");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromRGBA", function() { return _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_11__["getColorFromRGBA"]; });

/* harmony import */ var _getColorFromHSV__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getColorFromHSV */ "BT+F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromHSV", function() { return _getColorFromHSV__WEBPACK_IMPORTED_MODULE_12__["getColorFromHSV"]; });

/* harmony import */ var _getFullColorString__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getFullColorString */ "kxY9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullColorString", function() { return _getFullColorString__WEBPACK_IMPORTED_MODULE_13__["getFullColorString"]; });

/* harmony import */ var _updateSV__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updateSV */ "PX0R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSV", function() { return _updateSV__WEBPACK_IMPORTED_MODULE_14__["updateSV"]; });

/* harmony import */ var _updateH__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./updateH */ "Yql+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateH", function() { return _updateH__WEBPACK_IMPORTED_MODULE_15__["updateH"]; });

/* harmony import */ var _updateRGB__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updateRGB */ "tN0b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRGB", function() { return _updateRGB__WEBPACK_IMPORTED_MODULE_16__["updateRGB"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _updateA__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./updateA */ "ICEt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateA", function() { return _updateA__WEBPACK_IMPORTED_MODULE_17__["updateA"]; });

/* harmony import */ var _correctRGB__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./correctRGB */ "B2Cu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctRGB", function() { return _correctRGB__WEBPACK_IMPORTED_MODULE_18__["correctRGB"]; });

/* harmony import */ var _correctHSV__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./correctHSV */ "1yCa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctHSV", function() { return _correctHSV__WEBPACK_IMPORTED_MODULE_19__["correctHSV"]; });

/* harmony import */ var _correctHex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./correctHex */ "lOt9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctHex", function() { return _correctHex__WEBPACK_IMPORTED_MODULE_20__["correctHex"]; });























//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "1yCa":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/correctHSV.js ***!
  \************************************************************************************************************************/
/*! exports provided: correctHSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctHSV", function() { return correctHSV; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clamp */ "SPjM");


/** Corrects an HSV color to fall within the valid range. */
function correctHSV(color) {
    return {
        h: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.h, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_HUE"]),
        s: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.s, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_SATURATION"]),
        v: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.v, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_VALUE"])
    };
}
//# sourceMappingURL=correctHSV.js.map

/***/ }),

/***/ "6dv4":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/PropertyFieldColorPickerHost.module.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../postcss-loader/src??postcss!./PropertyFieldColorPickerHost.module.css */ "SQU/");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "AQiI":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/PropertyFieldColorPicker.js ***!
  \*************************************************************************************************************/
/*! exports provided: PropertyFieldColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPicker", function() { return PropertyFieldColorPicker; });
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_utilities_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/utilities/color */ "bQ/l");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "fVfA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/GeneralHelper */ "yVpZ");
/* harmony import */ var _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IPropertyFieldColorPicker */ "avHa");
/* harmony import */ var _PropertyFieldColorPickerHost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropertyFieldColorPickerHost */ "TPZ+");







var PropertyFieldColorPickerBuilder = /** @class */ (function () {
    function PropertyFieldColorPickerBuilder(_targetProperty, _properties) {
        //Properties defined by IPropertyPaneField
        this.type = _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneFieldType"].Custom;
        this.targetProperty = _targetProperty;
        this.properties = {
            key: _properties.key,
            label: _properties.label,
            onPropertyChange: _properties.onPropertyChange,
            selectedColor: _properties.selectedColor,
            disabled: _properties.disabled,
            isHidden: _properties.isHidden,
            alphaSliderHidden: _properties.alphaSliderHidden,
            properties: _properties.properties,
            style: _properties.style,
            iconName: _properties.iconName,
            onRender: this.onRender.bind(this)
        };
        if (typeof _properties.selectedColor === 'undefined') {
            this.color = '#ffffff';
        }
        else {
            if (typeof _properties.selectedColor === 'string') {
                this.color = _properties.selectedColor;
            }
            else {
                this.color = _properties.selectedColor.str;
            }
        }
        this.valueAsObject = _properties.valueAsObject;
    }
    PropertyFieldColorPickerBuilder.prototype.render = function () {
        if (!this.elem) {
            return;
        }
        this.onRender(this.elem);
    };
    PropertyFieldColorPickerBuilder.prototype.onRender = function (elem, ctx, changeCallback) {
        if (!this.elem) {
            this.elem = elem;
        }
        this.changeCB = changeCallback;
        var element = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PropertyFieldColorPickerHost__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: this.properties.label,
            alphaSliderHidden: this.properties.alphaSliderHidden,
            disabled: this.properties.disabled,
            isHidden: this.properties.isHidden,
            selectedColor: this.color,
            style: this.properties.style || _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_5__["PropertyFieldColorPickerStyle"].Inline,
            iconName: this.properties.iconName || 'Color',
            onColorChanged: this.onColorChanged.bind(this)
        });
        react_dom__WEBPACK_IMPORTED_MODULE_3__["render"](element, elem);
    };
    PropertyFieldColorPickerBuilder.prototype.onColorChanged = function (newColor) {
        if (this.properties.onPropertyChange && newColor !== null) {
            var newValue = (this.valueAsObject ? Object(office_ui_fabric_react_lib_utilities_color__WEBPACK_IMPORTED_MODULE_1__["getColorFromString"])(newColor) : newColor);
            var oldValue = (this.valueAsObject ? Object(office_ui_fabric_react_lib_utilities_color__WEBPACK_IMPORTED_MODULE_1__["getColorFromString"])(this.color) : this.color);
            this.color = newColor;
            this.properties.onPropertyChange(this.targetProperty, oldValue, newValue);
            Object(_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_4__["setPropertyValue"])(this.properties.properties, this.targetProperty, newValue);
            if (typeof this.changeCB !== 'undefined' && this.changeCB !== null) {
                this.changeCB(this.targetProperty, newValue);
            }
        }
    };
    return PropertyFieldColorPickerBuilder;
}());
function PropertyFieldColorPicker(targetProperty, properties) {
    return new PropertyFieldColorPickerBuilder(targetProperty, properties);
}
//# sourceMappingURL=PropertyFieldColorPicker.js.map

/***/ }),

/***/ "BT+F":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/getColorFromHSV.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: getColorFromHSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorFromHSV", function() { return getColorFromHSV; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* harmony import */ var _hsv2hex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsv2hex */ "uqLm");
/* harmony import */ var _rgbaOrHexString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_rgbaOrHexString */ "PSe/");




/**
 * Converts an HSV color (and optional alpha value) to a color object.
 * If `a` is not given, a default of 100 is used.
 * Hex in the returned value will *not* be prefixed with #.
 * If `a` is unspecified or 100, the result's `str` property will contain a hex value
 * (*not* prefixed with #)
 */
function getColorFromHSV(hsv, a) {
    var h = hsv.h, s = hsv.s, v = hsv.v;
    a = typeof a === 'number' ? a : _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"];
    var _a = Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_1__["hsv2rgb"])(h, s, v), r = _a.r, g = _a.g, b = _a.b;
    var hex = Object(_hsv2hex__WEBPACK_IMPORTED_MODULE_2__["hsv2hex"])(h, s, v);
    var str = Object(_rgbaOrHexString__WEBPACK_IMPORTED_MODULE_3__["_rgbaOrHexString"])(r, g, b, a, hex);
    return { a: a, b: b, g: g, h: h, hex: hex, r: r, s: s, str: str, v: v };
}
//# sourceMappingURL=getColorFromHSV.js.map

/***/ }),

/***/ "BoHr":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/shades.js ***!
  \********************************************************************************************************************/
/*! exports provided: Shade, isValidShade, isDark, getShade, getBackgroundShade, getContrastRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shade", function() { return Shade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidShade", function() { return isValidShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDark", function() { return isDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShade", function() { return getShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundShade", function() { return getBackgroundShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return getContrastRatio; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _hsv2hsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsv2hsl */ "hNd6");
/* harmony import */ var _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getColorFromRGBA */ "BB33");
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");





// Soften: to get closer to the background color's luminance
// (softening with a white background would be lightening, with black it'd be darkening)
// Strongen: opposite of soften
// Luminance multiplier constants for generating shades of a given color
var WhiteShadeTableBG = [0.027, 0.043, 0.082, 0.145, 0.184, 0.216, 0.349, 0.537]; // white bg
var BlackTintTableBG = [0.537, 0.45, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043]; // black bg
var WhiteShadeTable = [0.537, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043, 0.027]; // white fg
var BlackTintTable = [0.537, 0.45, 0.349, 0.216, 0.184, 0.145, 0.082, 0.043]; // black fg
var LumTintTable = [0.88, 0.77, 0.66, 0.55, 0.44, 0.33, 0.22, 0.11]; // light (strongen all)
var LumShadeTable = [0.11, 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, 0.88]; // dark (soften all)
var ColorTintTable = [0.96, 0.84, 0.7, 0.4, 0.12]; // default soften
var ColorShadeTable = [0.1, 0.24, 0.44]; // default strongen
// If the given shade's luminance is below/above these values, we'll swap to using the White/Black tables above
var LowLuminanceThreshold = 0.2;
var HighLuminanceThreshold = 0.8;
/** Shades of a given color, from softest to strongest. */
var Shade;
(function (Shade) {
    Shade[Shade["Unshaded"] = 0] = "Unshaded";
    Shade[Shade["Shade1"] = 1] = "Shade1";
    Shade[Shade["Shade2"] = 2] = "Shade2";
    Shade[Shade["Shade3"] = 3] = "Shade3";
    Shade[Shade["Shade4"] = 4] = "Shade4";
    Shade[Shade["Shade5"] = 5] = "Shade5";
    Shade[Shade["Shade6"] = 6] = "Shade6";
    Shade[Shade["Shade7"] = 7] = "Shade7";
    Shade[Shade["Shade8"] = 8] = "Shade8";
    // remember to update isValidShade()!
})(Shade || (Shade = {}));
/**
 * Returns true if the argument is a valid Shade value
 * @param shade - The Shade value to validate.
 */
function isValidShade(shade) {
    'use strict';
    return typeof shade === 'number' && shade >= Shade.Unshaded && shade <= Shade.Shade8;
}
function _isBlack(color) {
    return color.r === 0 && color.g === 0 && color.b === 0;
}
function _isWhite(color) {
    return color.r === _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"] && color.g === _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"] && color.b === _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"];
}
function _darken(hsv, factor) {
    return {
        h: hsv.h,
        s: hsv.s,
        v: _clamp(hsv.v - hsv.v * factor, 0, 100)
    };
}
function _lighten(hsv, factor) {
    return {
        h: hsv.h,
        s: _clamp(hsv.s - hsv.s * factor, 0, 100),
        v: _clamp(hsv.v + (100 - hsv.v) * factor, 0, 100)
    };
}
function _clamp(n, min, max) {
    return n; // Math.max(min, Math.min(n, max));
}
function isDark(color) {
    return Object(_hsv2hsl__WEBPACK_IMPORTED_MODULE_2__["hsv2hsl"])(color.h, color.s, color.v).l < 50;
}
/**
 * Given a color and a shade specification, generates the requested shade of the color.
 * Logic:
 * if white
 *  darken via tables defined above
 * if black
 *  lighten
 * if light
 *  strongen
 * if dark
 *  soften
 * else default
 *  soften or strongen depending on shade#
 * @param color - The base color whose shade is to be computed
 * @param shade - The shade of the base color to compute
 * @param isInverted - Default false. Whether the given theme is inverted (reverse strongen/soften logic)
 */
function getShade(color, shade, isInverted) {
    'use strict';
    if (isInverted === void 0) { isInverted = false; }
    if (!color) {
        return null;
    }
    if (shade === Shade.Unshaded || !isValidShade(shade)) {
        return color;
    }
    var hsl = Object(_hsv2hsl__WEBPACK_IMPORTED_MODULE_2__["hsv2hsl"])(color.h, color.s, color.v);
    var hsv = { h: color.h, s: color.s, v: color.v };
    var tableIndex = shade - 1;
    var _soften = _lighten;
    var _strongen = _darken;
    if (isInverted) {
        _soften = _darken;
        _strongen = _lighten;
    }
    if (_isWhite(color)) {
        // white
        hsv = _darken(hsv, WhiteShadeTable[tableIndex]);
    }
    else if (_isBlack(color)) {
        // black
        hsv = _lighten(hsv, BlackTintTable[tableIndex]);
    }
    else if (hsl.l / 100 > HighLuminanceThreshold) {
        // light
        hsv = _strongen(hsv, LumShadeTable[tableIndex]);
    }
    else if (hsl.l / 100 < LowLuminanceThreshold) {
        // dark
        hsv = _soften(hsv, LumTintTable[tableIndex]);
    }
    else {
        // default
        if (tableIndex < ColorTintTable.length) {
            hsv = _soften(hsv, ColorTintTable[tableIndex]);
        }
        else {
            hsv = _strongen(hsv, ColorShadeTable[tableIndex - ColorTintTable.length]);
        }
    }
    return Object(_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_3__["getColorFromRGBA"])(Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_4__["hsv2rgb"])(hsv.h, hsv.s, hsv.v), { a: color.a }));
}
// Background shades/tints are generated differently. The provided color will be guaranteed
//   to be the darkest or lightest one. If it is <50% luminance, it will always be the darkest,
//   otherwise it will always be the lightest.
function getBackgroundShade(color, shade, isInverted) {
    'use strict';
    if (isInverted === void 0) { isInverted = false; }
    if (!color) {
        return null;
    }
    if (shade === Shade.Unshaded || !isValidShade(shade)) {
        return color;
    }
    var hsv = { h: color.h, s: color.s, v: color.v };
    var tableIndex = shade - 1;
    if (!isInverted) {
        // lightish
        hsv = _darken(hsv, WhiteShadeTableBG[tableIndex]);
    }
    else {
        // default: if (hsl.l / 100 < .5) { // darkish
        hsv = _lighten(hsv, BlackTintTableBG[BlackTintTable.length - 1 - tableIndex]);
    }
    return Object(_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_3__["getColorFromRGBA"])(Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_4__["hsv2rgb"])(hsv.h, hsv.s, hsv.v), { a: color.a }));
}
/* Calculates the contrast ratio between two colors. Used for verifying
 * color pairs meet minimum accessibility requirements.
 * See: https://www.w3.org/TR/WCAG20/ section 1.4.3
 */
function getContrastRatio(color1, color2) {
    // Formula defined by: http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#contrast-ratiodef
    // relative luminance: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    /* calculate the intermediate value needed to calculating relative luminance */
    function _getThing(x) {
        if (x <= 0.03928) {
            return x / 12.92;
        }
        else {
            return Math.pow((x + 0.055) / 1.055, 2.4);
        }
    }
    var r1 = _getThing(color1.r / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var g1 = _getThing(color1.g / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var b1 = _getThing(color1.b / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var L1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1; // relative luminance of first color
    L1 += 0.05;
    var r2 = _getThing(color2.r / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var g2 = _getThing(color2.g / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var b2 = _getThing(color2.b / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]);
    var L2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2; // relative luminance of second color
    L2 += 0.05;
    // return the lighter color divided by darker
    return L1 / L2 > 1 ? L1 / L2 : L2 / L1;
}
//# sourceMappingURL=shades.js.map

/***/ }),

/***/ "OU8Q":
/*!******************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/index.js ***!
  \******************************************************************************************/
/*! exports provided: PropertyFieldColorPicker, PropertyFieldColorPickerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFieldColorPicker */ "AQiI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPicker", function() { return _PropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldColorPicker"]; });

/* harmony import */ var _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IPropertyFieldColorPicker */ "avHa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPickerStyle", function() { return _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_1__["PropertyFieldColorPickerStyle"]; });

/* harmony import */ var _PropertyFieldColorPickerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyFieldColorPickerHost */ "TPZ+");
/* empty/unused harmony star reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "PkS7":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/PropertyFieldColorPickerHost.module.scss.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PropertyFieldColorPickerHost.module.css */ "6dv4");
var styles = {
    pfColorPicker: 'pfColorPicker_f0b6c170',
    cpInlineTable: 'cpInlineTable_f0b6c170',
    cpInlineRow: 'cpInlineRow_f0b6c170',
    disabledCP: 'disabledCP_f0b6c170',
    hidden: 'hidden_f0b6c170'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 
//# sourceMappingURL=PropertyFieldColorPickerHost.module.scss.js.map

/***/ }),

/***/ "SQU/":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/PropertyFieldColorPickerHost.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".pfColorPicker_f0b6c170 .ms-ColorPicker-table{table-layout:fixed;width:100%}.pfColorPicker_f0b6c170 .ms-ColorPicker-table thead>tr>td:first-child{width:28%}.pfColorPicker_f0b6c170 .cpInlineTable_f0b6c170{border-spacing:0;width:100%}.pfColorPicker_f0b6c170 .cpInlineTable_f0b6c170 .cpInlineRow_f0b6c170{vertical-align:top}.pfColorPicker_f0b6c170 .disabledCP_f0b6c170{pointer-events:none;opacity:.4;border:none;padding:0;margin:0}.hidden_f0b6c170{display:none}", ""]);


/***/ }),

/***/ "TPZ+":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/PropertyFieldColorPickerHost.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/Label */ "AvzG");
/* harmony import */ var office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/ColorPicker */ "8oE+");
/* harmony import */ var office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Button */ "9QpN");
/* harmony import */ var _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PropertyFieldColorPickerHost.module.scss */ "PkS7");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IPropertyFieldColorPicker */ "avHa");
/* harmony import */ var _common_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/telemetry */ "TVYz");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var PropertyFieldColorPickerHost = /** @class */ (function (_super) {
    __extends(PropertyFieldColorPickerHost, _super);
    function PropertyFieldColorPickerHost(props, state) {
        var _this = _super.call(this, props) || this;
        _common_telemetry__WEBPACK_IMPORTED_MODULE_7__["track"]('PropertyFieldColorPicker', {
            disabled: props.disabled
        });
        _this.state = {
            errorMessage: undefined,
            inlinePickerShowing: false
        };
        _this.onTogglePicker = _this.onTogglePicker.bind(_this);
        return _this;
    }
    PropertyFieldColorPickerHost.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].pfColorPicker + " " + (this.props.isHidden ? _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].hidden : "") },
            this.props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Label__WEBPACK_IMPORTED_MODULE_1__["Label"], null, this.props.label),
            this.props.style === _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_6__["PropertyFieldColorPickerStyle"].Inline &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cpInlineTable },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: { width: "100%" } },
                                this.state.inlinePickerShowing &&
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ms-slideDownIn20" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], { color: this.props.selectedColor, onColorChanged: this.props.onColorChanged, alphaSliderHidden: this.props.alphaSliderHidden })),
                                !this.state.inlinePickerShowing &&
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ms-slideUpIn20 ms-borderColor-neutralDark", style: { backgroundColor: this.props.selectedColor, border: "1px solid" } }, "\u00A0")),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { className: _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].cpInlineRow },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Button__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { title: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["ColorPickerButtonTitle"], disabled: this.props.disabled, iconProps: { iconName: this.props.iconName, ariaLabel: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["ColorPickerButtonTitle"] }, onClick: this.onTogglePicker }))))),
            this.props.style === _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_6__["PropertyFieldColorPickerStyle"].Full && !this.props.disabled &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { width: 0, height: 0, overflow: 'hidden' } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", null)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], { color: this.props.selectedColor, onColorChanged: this.props.onColorChanged, alphaSliderHidden: this.props.alphaSliderHidden })),
            this.props.style === _IPropertyFieldColorPicker__WEBPACK_IMPORTED_MODULE_6__["PropertyFieldColorPickerStyle"].Full && this.props.disabled &&
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", { disabled: true, className: _PropertyFieldColorPickerHost_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].disabledCP },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], { color: this.props.selectedColor, alphaSliderHidden: this.props.alphaSliderHidden }))));
    };
    PropertyFieldColorPickerHost.prototype.onTogglePicker = function () {
        this.setState({
            inlinePickerShowing: !this.state.inlinePickerShowing
        });
    };
    return PropertyFieldColorPickerHost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PropertyFieldColorPickerHost);
//# sourceMappingURL=PropertyFieldColorPickerHost.js.map

/***/ }),

/***/ "avHa":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/colorPicker/IPropertyFieldColorPicker.js ***!
  \**************************************************************************************************************/
/*! exports provided: PropertyFieldColorPickerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPickerStyle", function() { return PropertyFieldColorPickerStyle; });
/**
 * Enum for specifying how the control should be shown
 */
var PropertyFieldColorPickerStyle;
(function (PropertyFieldColorPickerStyle) {
    PropertyFieldColorPickerStyle[PropertyFieldColorPickerStyle["Full"] = 1] = "Full";
    PropertyFieldColorPickerStyle[PropertyFieldColorPickerStyle["Inline"] = 2] = "Inline";
})(PropertyFieldColorPickerStyle || (PropertyFieldColorPickerStyle = {}));
//# sourceMappingURL=IPropertyFieldColorPicker.js.map

/***/ }),

/***/ "bQ/l":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: MAX_COLOR_SATURATION, MAX_COLOR_HUE, MAX_COLOR_VALUE, MAX_COLOR_RGB, MAX_COLOR_RGBA, MAX_COLOR_ALPHA, MIN_HEX_LENGTH, MAX_HEX_LENGTH, MIN_RGBA_LENGTH, MAX_RGBA_LENGTH, HEX_REGEX, RGBA_REGEX, cssColor, rgb2hex, clamp, hsl2rgb, hsl2hsv, hsv2rgb, hsv2hex, rgb2hsv, hsv2hsl, getColorFromString, getColorFromRGBA, getColorFromHSV, getFullColorString, updateSV, updateH, updateRGB, updateA, correctRGB, correctHSV, correctHex, Shade, isValidShade, isDark, getShade, getBackgroundShade, getContrastRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "+HNA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_SATURATION", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_SATURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_HUE", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_HUE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_VALUE", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_VALUE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGB", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGBA", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGBA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_ALPHA", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIN_HEX_LENGTH", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MIN_HEX_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_HEX_LENGTH", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_HEX_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIN_RGBA_LENGTH", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MIN_RGBA_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_RGBA_LENGTH", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["MAX_RGBA_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEX_REGEX", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["HEX_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RGBA_REGEX", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["RGBA_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssColor", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["cssColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["rgb2hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["hsl2rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl2hsv", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["hsl2hsv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["hsv2rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb2hsv", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["rgb2hsv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsv2hsl", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["hsv2hsl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromString", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["getColorFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromRGBA", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["getColorFromRGBA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorFromHSV", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["getColorFromHSV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullColorString", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["getFullColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSV", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["updateSV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateH", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["updateH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRGB", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["updateRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateA", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["updateA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctRGB", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["correctRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctHSV", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["correctHSV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correctHex", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["correctHex"]; });

/* harmony import */ var _shades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shades */ "BoHr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shade", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["Shade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidShade", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["isValidShade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDark", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["isDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShade", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["getShade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundShade", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["getBackgroundShade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return _shades__WEBPACK_IMPORTED_MODULE_1__["getContrastRatio"]; });

/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "6QFK");
/* empty/unused harmony star reexport *//* harmony import */ var _cssColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssColor */ "iZYe");
/* empty/unused harmony star reexport *//* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");
/* empty/unused harmony star reexport *//* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp */ "SPjM");
/* empty/unused harmony star reexport *//* harmony import */ var _hsl2rgb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hsl2rgb */ "lO5p");
/* empty/unused harmony star reexport *//* harmony import */ var _hsl2hsv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hsl2hsv */ "tQgu");
/* empty/unused harmony star reexport *//* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* empty/unused harmony star reexport *//* harmony import */ var _hsv2hex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hsv2hex */ "uqLm");
/* empty/unused harmony star reexport *//* harmony import */ var _rgb2hsv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rgb2hsv */ "7NRl");
/* empty/unused harmony star reexport *//* harmony import */ var _hsv2hsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hsv2hsl */ "hNd6");
/* empty/unused harmony star reexport *//* harmony import */ var _getColorFromString__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getColorFromString */ "NV5/");
/* empty/unused harmony star reexport *//* harmony import */ var _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getColorFromRGBA */ "BB33");
/* empty/unused harmony star reexport *//* harmony import */ var _getColorFromHSV__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getColorFromHSV */ "BT+F");
/* empty/unused harmony star reexport *//* harmony import */ var _getFullColorString__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./getFullColorString */ "kxY9");
/* empty/unused harmony star reexport *//* harmony import */ var _updateSV__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updateSV */ "PX0R");
/* empty/unused harmony star reexport *//* harmony import */ var _updateH__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./updateH */ "Yql+");
/* empty/unused harmony star reexport *//* harmony import */ var _updateRGB__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./updateRGB */ "tN0b");
/* empty/unused harmony star reexport *//* empty/unused harmony star reexport *//* harmony import */ var _updateA__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./updateA */ "ICEt");
/* empty/unused harmony star reexport *//* harmony import */ var _correctRGB__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./correctRGB */ "B2Cu");
/* empty/unused harmony star reexport *//* harmony import */ var _correctHSV__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./correctHSV */ "1yCa");
/* empty/unused harmony star reexport */






















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "hNd6":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/hsv2hsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hsv2hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hsl", function() { return hsv2hsl; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");

/** Converts HSV components to an HSL color. */
function hsv2hsl(h, s, v) {
    s /= _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_SATURATION"];
    v /= _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_VALUE"];
    var l = (2 - s) * v;
    var sl = s * v;
    sl /= l <= 1 ? l : 2 - l;
    sl = sl || 0;
    l /= 2;
    return { h: h, s: sl * 100, l: l * 100 };
}
//# sourceMappingURL=hsv2hsl.js.map

/***/ }),

/***/ "jl/f":
/*!**********************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/PropertyFieldColorPicker.js ***!
  \**********************************************************************************/
/*! exports provided: PropertyFieldColorPicker, PropertyFieldColorPickerStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propertyFields_colorPicker_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyFields/colorPicker/index */ "OU8Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPicker", function() { return _propertyFields_colorPicker_index__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldColorPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldColorPickerStyle", function() { return _propertyFields_colorPicker_index__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldColorPickerStyle"]; });


//# sourceMappingURL=PropertyFieldColorPicker.js.map

/***/ }),

/***/ "tN0b":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/updateRGB.js ***!
  \***********************************************************************************************************************/
/*! exports provided: updateRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRGB", function() { return updateRGB; });
/* harmony import */ var _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getColorFromRGBA */ "BB33");

/**
 * Gets a color with a single RGBA component updated to a new value.
 * Does not modify the original `color`. Alpha defaults to 100 if not set.
 */
function updateRGB(color, component, value) {
    return Object(_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_0__["getColorFromRGBA"])((_a = {
            r: color.r,
            g: color.g,
            b: color.b,
            a: color.a
        },
        _a[component] = value,
        _a));
    var _a;
}
//# sourceMappingURL=updateRGB.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.4.js.map