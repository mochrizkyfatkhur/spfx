(window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] = window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] || []).push([[5],{

/***/ "IAIq":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/number/PropertyFieldNumberHost.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react_lib_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react/lib/TextField */ "tNFa");
/* harmony import */ var _common_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/telemetry */ "TVYz");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "iRzo");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/GeneralHelper */ "yVpZ");
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






var PropertyFieldNumberHost = /** @class */ (function (_super) {
    __extends(PropertyFieldNumberHost, _super);
    function PropertyFieldNumberHost(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Validate if field value is a number
         * @param value
         */
        _this._validateNumber = function (value) {
            var nrValue = !_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(_this.props.precision) || _this.props.precision === 0 ? parseInt(value) : parseFloat(value);
            if (isNaN(nrValue)) {
                return PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4__["NotNumberValidationMessage"] + " " + value + ".";
            }
            var _a = _this.props, minValue = _a.minValue, maxValue = _a.maxValue;
            // Check if number is lower or equal to minimum value
            if (_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(minValue) && nrValue < minValue) {
                return PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4__["MinimumNumberValidationMessage"] + " " + minValue;
            }
            // Check if the number is greater than the maximum value
            if (_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(maxValue) && nrValue > maxValue) {
                return PropertyControlStrings__WEBPACK_IMPORTED_MODULE_4__["MaximumNumberValidationMessage"] + " " + maxValue;
            }
            if (_this.props.onGetErrorMessage) {
                return _this.props.onGetErrorMessage(nrValue);
            }
            else {
                return '';
            }
        };
        /**
         * On field change event handler
         */
        _this._onChanged = function (value) {
            var nrValue;
            var precision = _this.props.precision;
            if (!_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(precision)) {
                nrValue = parseFloat(value);
            }
            else if (precision === 0) {
                nrValue = parseInt(value);
            }
            else {
                var multiplier = Math.pow(10, precision);
                nrValue = Math.round((parseFloat(value) + 0.000000000000001) * multiplier) / multiplier;
            }
            // Update state
            _this.setState({
                value: value,
                roundedValue: nrValue
            });
            var _a = _this.props, minValue = _a.minValue, maxValue = _a.maxValue;
            if (!isNaN(nrValue)) {
                if ((!_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(minValue) || nrValue >= minValue) && (!_helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(maxValue) || nrValue <= maxValue)) {
                    // Trigger change for the web part
                    _this.props.onChanged(nrValue);
                }
            }
            else {
                _this.props.onChanged(undefined);
            }
        };
        _common_telemetry__WEBPACK_IMPORTED_MODULE_2__["track"]('PropertyFieldNumber', {
            disabled: props.disabled
        });
        _this.state = {
            value: _this.props.value ? _this.props.value.toFixed(props.precision || 0) : null,
            roundedValue: props.value
        };
        _this._async = new office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._delayedChange = _this._async.debounce(_this._onChanged, _this.props.deferredValidationTime ? _this.props.deferredValidationTime : 200);
        return _this;
    }
    /**
     * componentDidUpdate lifecycle hook
     *
     * @param prevProps
     * @param prevState
     */
    PropertyFieldNumberHost.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.value !== this.props.value && this.props.value !== this.state.roundedValue) {
            this.setState({
                value: _helpers_GeneralHelper__WEBPACK_IMPORTED_MODULE_5__["GeneralHelper"].isDefined(this.props.value) ? this.props.value.toString() : null
            });
        }
    };
    /**
     * Render field
     */
    PropertyFieldNumberHost.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_TextField__WEBPACK_IMPORTED_MODULE_1__["TextField"], { label: this.props.label, ariaLabel: this.props.ariaLabel, onChanged: this._delayedChange, value: this.state.value, description: this.props.description, placeholder: this.props.placeholder, errorMessage: this.props.errorMessage, onGetErrorMessage: this._validateNumber, deferredValidationTime: this.props.deferredValidationTime, disabled: this.props.disabled })));
    };
    return PropertyFieldNumberHost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (PropertyFieldNumberHost);
//# sourceMappingURL=PropertyFieldNumberHost.js.map

/***/ }),

/***/ "LatS":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/number/index.js ***!
  \*************************************************************************************/
/*! exports provided: PropertyFieldNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyFieldNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyFieldNumber */ "rZQq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldNumber", function() { return _PropertyFieldNumber__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldNumber"]; });

/* harmony import */ var _PropertyFieldNumberHost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyFieldNumberHost */ "IAIq");
/* empty/unused harmony star reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "rZQq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/number/PropertyFieldNumber.js ***!
  \***************************************************************************************************/
/*! exports provided: PropertyFieldNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldNumber", function() { return PropertyFieldNumber; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "fVfA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PropertyFieldNumberHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PropertyFieldNumberHost */ "IAIq");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var PropertyFieldNumberBuilder = /** @class */ (function () {
    function PropertyFieldNumberBuilder(_targetProperty, _properties) {
        this.type = _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneFieldType"].Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this._render.bind(this);
        this.properties.onDispose = this._dispose.bind(this);
    }
    PropertyFieldNumberBuilder.prototype._render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PropertyFieldNumberHost__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, props, { onChanged: this._onChanged.bind(this) }));
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    PropertyFieldNumberBuilder.prototype._dispose = function (elem) {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](elem);
    };
    PropertyFieldNumberBuilder.prototype._onChanged = function (value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldNumberBuilder;
}());
function PropertyFieldNumber(targetProperty, properties) {
    return new PropertyFieldNumberBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
//# sourceMappingURL=PropertyFieldNumber.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.5.js.map