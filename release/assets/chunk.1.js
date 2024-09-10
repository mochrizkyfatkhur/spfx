(window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] = window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] || []).push([[1],{

/***/ "+aGg":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: CalloutContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContent", function() { return CalloutContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalloutContent.base */ "XZgV");
/* harmony import */ var _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent.styles */ "XHtT");



var CalloutContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__["CalloutContentBase"], _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'CalloutContent' });
//# sourceMappingURL=CalloutContent.js.map

/***/ }),

/***/ "/Phj":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Divider/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalDivider */ "3nfX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0Xhg":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/Button.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.types */ "8Hty");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "W0Zu");
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "wXwR");
/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "A9FN");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconButton/IconButton */ "RnIT");
/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "UhdI");









/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated Use the individual *Button components instead.
 * {@docCategory Button}
 */
var Button = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].command:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__["ActionButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].compound:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].icon:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__["IconButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].primary:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["PrimaryButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            default:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
        }
    };
    return Button;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=Button.js.map

/***/ }),

/***/ "1XSK":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js ***!
  \********************************************************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");



/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._disposables = [];
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    if (_this.props.onDismiss) {
                        _this.props.onDismiss(ev);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this._onFocus = function () {
            _this._containsFocus = true;
        };
        _this._onBlur = function (ev) {
            if (_this._root.current && _this._root.current.contains(ev.relatedTarget)) {
                _this._containsFocus = false;
            }
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this.state = { needsVerticalScrollBar: false };
        return _this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        if (this._root.current) {
            this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(this._root.current, 'focus', this._onFocus, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(this._root.current, 'blur', this._onBlur, true));
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["doesElementContainFocus"])(this._root.current)) {
                this._containsFocus = true;
            }
        }
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentDidUpdate = function () {
        this._updateScrollBarAsync();
        this._async.dispose();
    };
    Popup.prototype.componentWillUnmount = function () {
        this._disposables.forEach(function (dispose) { return dispose(); });
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, style = _a.style;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this._root }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, style: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined, outline: 'none' }, style) }), this.props.children));
    };
    Popup.prototype._updateScrollBarAsync = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._getScrollBar();
        });
    };
    Popup.prototype._getScrollBar = function () {
        // If overflowY is overriden, don't waste time calculating whether the scrollbar is necessary.
        if (this.props.style && this.props.style.overflowY) {
            return;
        }
        var needsVerticalScrollBar = false;
        if (this._root && this._root.current && this._root.current.firstElementChild) {
            // ClientHeight returns the client height of an element rounded to an
            // integer. On some browsers at different zoom levels this rounding
            // can generate different results for the root container and child even
            // though they are the same height. This causes us to show a scroll bar
            // when not needed. Ideally we would use BoundingClientRect().height
            // instead however seems that the API is 90% slower than using ClientHeight.
            // Therefore instead we will calculate the difference between heights and
            // allow for a 1px difference to still be considered ok and not show the
            // scroll bar.
            var rootHeight = this._root.current.clientHeight;
            var firstChildHeight = this._root.current.firstElementChild.clientHeight;
            if (rootHeight > 0 && firstChildHeight > rootHeight) {
                needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
            }
        }
        if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
            this.setState({
                needsVerticalScrollBar: needsVerticalScrollBar
            });
        }
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    return Popup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Popup.js.map

/***/ }),

/***/ "1sZu":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusZone */ "Mz9Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _FocusZone__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FocusZone.types */ "pRvW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneDirection"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "1xxT":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CommandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return CommandButton; });
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "wXwR");

/**
 * {@docCategory Button}
 */
var CommandButton = _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__["ActionButton"];
//# sourceMappingURL=CommandButton.js.map

/***/ }),

/***/ "2bYP":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContextualMenu, getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase, DirectionalHint, ContextualMenuItemType, ContextualMenuItem, ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenu */ "3VRL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.base */ "IypE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["getSubmenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["canAnyMenuItemsCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuBase"]; });

/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.types */ "ApDL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"]; });

/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItem */ "qQHi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"]; });

/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenuItem.base */ "dvb8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_4__["ContextualMenuItemBase"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "3VRL":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: ContextualMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return ContextualMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenu.base */ "IypE");
/* harmony import */ var _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenu.styles */ "WGa6");





// This is to prevent cyclic import with ContextualMenu.base.tsx.
var LocalContextualMenu;
function onRenderSubMenu(subMenuProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LocalContextualMenu, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, subMenuProps));
}
LocalContextualMenu = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuBase"], _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"], function () {
    return {
        onRenderSubMenu: onRenderSubMenu
    };
}, { scope: 'ContextualMenu' });
/**
 * ContextualMenu description
 */
var ContextualMenu = LocalContextualMenu;
//# sourceMappingURL=ContextualMenu.js.map

/***/ }),

/***/ "3nfX":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js ***!
  \********************************************************************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return VerticalDivider; });
/* harmony import */ var _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalDivider.styles */ "7BzU");
/* harmony import */ var _VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalDivider.base */ "CDio");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");



var VerticalDivider = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["styled"])(_VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__["VerticalDividerBase"], _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_0__["getStyles"], undefined, {
    scope: 'VerticalDivider'
});
//# sourceMappingURL=VerticalDivider.js.map

/***/ }),

/***/ "4/X0":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ColorPicker, ColorPickerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPicker */ "JTa0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _ColorPicker__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"]; });

/* harmony import */ var _ColorPicker_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker.base */ "53eK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerBase", function() { return _ColorPicker_base__WEBPACK_IMPORTED_MODULE_1__["ColorPickerBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "4wCw":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return getIsChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return hasSubmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return isItemDisabled; });
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
function hasSubmenu(item) {
    return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}
//# sourceMappingURL=contextualMenuUtility.js.map

/***/ }),

/***/ "53eK":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.base.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: ColorPickerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerBase", function() { return ColorPickerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../TextField */ "tNFa");
/* harmony import */ var _ColorRectangle_ColorRectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorRectangle/ColorRectangle */ "Lde7");
/* harmony import */ var _ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorSlider/ColorSlider */ "icO1");
/* harmony import */ var _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/color/consts */ "6QFK");
/* harmony import */ var _utilities_color_getColorFromString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/color/getColorFromString */ "NV5/");
/* harmony import */ var _utilities_color_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/color/getColorFromRGBA */ "BB33");
/* harmony import */ var _utilities_color_updateA__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/color/updateA */ "ICEt");
/* harmony import */ var _utilities_color_updateH__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/color/updateH */ "Yql+");
/* harmony import */ var _utilities_color_correctRGB__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/color/correctRGB */ "B2Cu");
/* harmony import */ var _utilities_color_correctHex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/color/correctHex */ "lOt9");






// These imports are separated to help with bundling







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var colorComponents = ['hex', 'r', 'g', 'b', 'a'];
/**
 * {@docCategory ColorPicker}
 */
var ColorPickerBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColorPickerBase, _super);
    function ColorPickerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onSVChanged = function (ev, color) {
            _this._updateColor(ev, color);
        };
        _this._onHChanged = function (ev, h) {
            _this._updateColor(ev, Object(_utilities_color_updateH__WEBPACK_IMPORTED_MODULE_10__["updateH"])(_this.state.color, h));
        };
        _this._onAChanged = function (ev, a) {
            _this._updateColor(ev, Object(_utilities_color_updateA__WEBPACK_IMPORTED_MODULE_9__["updateA"])(_this.state.color, Math.round(a)));
        };
        _this._onBlur = function (event) {
            var _a = _this.state, color = _a.color, editingColor = _a.editingColor;
            if (!editingColor) {
                return;
            }
            // If there was an intermediate incorrect value (such as too large or empty), correct it.
            var value = editingColor.value, component = editingColor.component;
            var isHex = component === 'hex';
            var minLength = isHex ? _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MIN_HEX_LENGTH"] : _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MIN_RGBA_LENGTH"];
            if (value.length >= minLength && (isHex || !isNaN(Number(value)))) {
                // Real value. Clamp to appropriate length (hex) or range (rgba).
                var newColor = void 0;
                if (isHex) {
                    newColor = Object(_utilities_color_getColorFromString__WEBPACK_IMPORTED_MODULE_7__["getColorFromString"])('#' + Object(_utilities_color_correctHex__WEBPACK_IMPORTED_MODULE_12__["correctHex"])(value));
                }
                else {
                    newColor = Object(_utilities_color_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_8__["getColorFromRGBA"])(Object(_utilities_color_correctRGB__WEBPACK_IMPORTED_MODULE_11__["correctRGB"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, color, (_b = {}, _b[component] = Number(value), _b))));
                }
                // Update state and call onChange
                _this._updateColor(event, newColor);
            }
            else {
                // Intermediate value was an empty string, too short (hex only), or just . (alpha only).
                // Just clear the intermediate state and revert to the previous value.
                _this.setState({ editingColor: undefined });
            }
            var _b;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('ColorPicker', props, {
            onColorChanged: 'onChange'
        });
        _this.state = {
            color: _getColorFromProps(props) || Object(_utilities_color_getColorFromString__WEBPACK_IMPORTED_MODULE_7__["getColorFromString"])('#ffffff')
        };
        _this._textChangeHandlers = {};
        for (var _i = 0, colorComponents_1 = colorComponents; _i < colorComponents_1.length; _i++) {
            var component = colorComponents_1[_i];
            _this._textChangeHandlers[component] = _this._onTextChange.bind(_this, component);
        }
        _this._textLabels = {
            r: props.redLabel,
            g: props.greenLabel,
            b: props.blueLabel,
            a: props.alphaLabel,
            hex: props.hexLabel
        };
        return _this;
    }
    Object.defineProperty(ColorPickerBase.prototype, "color", {
        get: function () {
            return this.state.color;
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerBase.prototype.componentWillReceiveProps = function (newProps) {
        var color = _getColorFromProps(newProps);
        if (color) {
            this._updateColor(undefined, color);
        }
    };
    ColorPickerBase.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var theme = props.theme, className = props.className, styles = props.styles;
        var color = this.state.color;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.panel },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ColorRectangle_ColorRectangle__WEBPACK_IMPORTED_MODULE_4__["ColorRectangle"], { color: color, onChange: this._onSVChanged }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_5__["ColorSlider"], { className: "is-hue", minValue: 0, maxValue: _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_COLOR_HUE"], value: color.h, onChange: this._onHChanged }),
                !props.alphaSliderHidden && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_5__["ColorSlider"], { className: "is-alpha", isAlpha: true, overlayStyle: { background: "linear-gradient(to right, transparent 0, #" + color.hex + " 100%)" }, minValue: 0, maxValue: _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_COLOR_ALPHA"], value: color.a, onChange: this._onAChanged })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: classNames.table, cellPadding: "0", cellSpacing: "0" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { className: classNames.tableHeader },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: classNames.tableHexCell }, props.hexLabel),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, props.redLabel),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, props.greenLabel),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, props.blueLabel),
                            !props.alphaSliderHidden && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, props.alphaLabel))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, colorComponents.map(function (comp) {
                            if (comp === 'a' && props.alphaSliderHidden) {
                                return null;
                            }
                            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: comp, style: comp === 'hex' ? undefined : { width: '18%' } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_TextField__WEBPACK_IMPORTED_MODULE_3__["TextField"], { className: classNames.input, onChange: _this._textChangeHandlers[comp], onBlur: _this._onBlur, value: _this._getDisplayValue(comp), spellCheck: false, ariaLabel: _this._textLabels[comp] })));
                        })))))));
    };
    ColorPickerBase.prototype._getDisplayValue = function (component) {
        var _a = this.state, color = _a.color, editingColor = _a.editingColor;
        if (editingColor && editingColor.component === component) {
            return editingColor.value;
        }
        if (color[component] === null || color[component] === undefined) {
            return '';
        }
        else {
            return String(color[component]);
        }
    };
    ColorPickerBase.prototype._onTextChange = function (component, event, newValue) {
        var color = this.state.color;
        var isHex = component === 'hex';
        var isAlpha = component === 'a';
        newValue = (newValue || '').substr(0, isHex ? _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_HEX_LENGTH"] : _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_RGBA_LENGTH"]);
        // Ignore what the user typed if it contains invalid characters
        var validCharsRegex = isHex ? _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["HEX_REGEX"] : _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["RGBA_REGEX"];
        if (!validCharsRegex.test(newValue)) {
            // Reset the value
            // TODO: once TextField controlled mode works properly, just return without setting state
            this.setState({ color: color });
            return;
        }
        // Determine if the entry is valid (different methods for hex, alpha, and RGB)
        var isValid;
        if (newValue === '') {
            // Empty string is obviously not valid
            isValid = false;
        }
        else if (isHex) {
            // Technically hex values of length 3 are also valid, but committing the value here would
            // cause it to be automatically converted to a value of length 6, which may not be what the
            // user wanted if they're not finished typing. (Values of length 3 will be committed on blur.)
            isValid = newValue.length === _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_HEX_LENGTH"];
        }
        else if (isAlpha) {
            isValid = Number(newValue) <= _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_COLOR_ALPHA"];
        }
        else {
            isValid = Number(newValue) <= _utilities_color_consts__WEBPACK_IMPORTED_MODULE_6__["MAX_COLOR_RGB"];
        }
        if (!isValid) {
            // If the new value is an empty string or other invalid value, save that to display.
            // (if the user still hasn't entered anything on blur, the last value is restored)
            this.setState({ editingColor: { component: component, value: newValue } });
        }
        else if (String(color[component]) === newValue) {
            // If the new value is the same as the current value, mostly ignore it.
            // Exception is that if the user was previously editing the value (but hadn't yet entered
            // a new valid value), we should clear the intermediate value.
            if (this.state.editingColor) {
                this.setState({ editingColor: undefined });
            }
            else {
                // TODO: remove once TextField is properly controlled
                this.setState({ color: color });
            }
        }
        else {
            // Should be a valid color. Update the value.
            var newColor = isHex
                ? Object(_utilities_color_getColorFromString__WEBPACK_IMPORTED_MODULE_7__["getColorFromString"])('#' + newValue)
                : Object(_utilities_color_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_8__["getColorFromRGBA"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, color, (_a = {}, _a[component] = Number(newValue), _a)));
            this._updateColor(event, newColor);
        }
        var _a;
    };
    /**
     * Update the displayed color and call change handlers if appropriate.
     * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
     * @param newColor - Updated color
     */
    ColorPickerBase.prototype._updateColor = function (ev, newColor) {
        var _this = this;
        if (!newColor) {
            return;
        }
        var _a = this.state, color = _a.color, editingColor = _a.editingColor;
        var isDifferentColor = newColor.h !== color.h || newColor.str !== color.str;
        if (isDifferentColor || editingColor) {
            this.setState({ color: newColor, editingColor: undefined }, function () {
                if (ev && _this.props.onChange) {
                    _this.props.onChange(ev, newColor);
                }
                // To preserve the existing behavior, this one is called even when the change comes from a
                // props update (which is not very useful)
                if (_this.props.onColorChanged) {
                    _this.props.onColorChanged(newColor.str, newColor);
                }
            });
        }
    };
    ColorPickerBase.defaultProps = {
        hexLabel: 'Hex',
        redLabel: 'Red',
        greenLabel: 'Green',
        blueLabel: 'Blue',
        alphaLabel: 'Alpha'
    };
    return ColorPickerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function _getColorFromProps(props) {
    var color = props.color;
    return typeof color === 'string' ? Object(_utilities_color_getColorFromString__WEBPACK_IMPORTED_MODULE_7__["getColorFromString"])(color) : color;
}
//# sourceMappingURL=ColorPicker.base.js.map

/***/ }),

/***/ "5SYA":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js ***!
  \***************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};
//# sourceMappingURL=Layer.styles.js.map

/***/ }),

/***/ "5U38":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \*******************************************************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FocusZone/index */ "1sZu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneDirection"]; });


//# sourceMappingURL=FocusZone.js.map

/***/ }),

/***/ "5ZAT":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: ButtonGlobalClassNames, getBaseButtonClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGlobalClassNames", function() { return ButtonGlobalClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseButtonClassNames", function() { return getBaseButtonClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "Gc2k");



var ButtonGlobalClassNames = {
    msButton: 'ms-Button',
    msButtonIcon: 'ms-Button-icon',
    msButtonMenuIcon: 'ms-Button-menuIcon',
    msButtonLabel: 'ms-Button-label',
    msButtonDescription: 'ms-Button-description',
    msButtonScreenReaderText: 'ms-Button-screenReaderText',
    msButtonFlexContainer: 'ms-Button-flexContainer',
    msButtonTextContainer: 'ms-Button-textContainer'
};
var getBaseButtonClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme, styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(ButtonGlobalClassNames, theme || {});
    var isExpanded = expanded && !isSplit;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        root: [
            classNames.msButton,
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: (_a = {},
                        _a[":hover ." + classNames.msButtonIcon] = styles.iconExpandedHovered,
                        // menuIcon falls back to rootExpandedHovered to support original behavior
                        _a[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconExpandedHovered || styles.rootExpandedHovered,
                        _a[':hover'] = styles.rootExpandedHovered,
                        _a)
                }
            ],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: (_b = {
                        ':hover': styles.rootHovered
                    },
                    _b[":hover ." + classNames.msButtonLabel] = styles.labelHovered,
                    _b[":hover ." + classNames.msButtonIcon] = styles.iconHovered,
                    _b[":hover ." + classNames.msButtonDescription] = styles.descriptionHovered,
                    _b[":hover ." + classNames.msButtonMenuIcon] = styles.menuIconHovered,
                    _b[':focus'] = styles.rootFocused,
                    _b[':active'] = styles.rootPressed,
                    _b[":active ." + classNames.msButtonIcon] = styles.iconPressed,
                    _b[":active ." + classNames.msButtonDescription] = styles.descriptionPressed,
                    _b[":active ." + classNames.msButtonMenuIcon] = styles.menuIconPressed,
                    _b)
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed
                }
            },
            className
        ],
        flexContainer: [classNames.msButtonFlexContainer, styles.flexContainer],
        textContainer: [classNames.msButtonTextContainer, styles.textContainer],
        icon: [
            classNames.msButtonIcon,
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled
        ],
        label: [classNames.msButtonLabel, styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            classNames.msButtonMenuIcon,
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && !isSplit && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed
                }
            },
            isExpanded && ['is-expanded', styles.menuIconExpanded]
        ],
        description: [
            classNames.msButtonDescription,
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled
        ],
        screenReaderText: [classNames.msButtonScreenReaderText, styles.screenReaderText]
    });
    var _a, _b;
});
//# sourceMappingURL=BaseButton.classNames.js.map

/***/ }),

/***/ "6QFK":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/consts.js ***!
  \********************************************************************************************************************/
/*! exports provided: MAX_COLOR_SATURATION, MAX_COLOR_HUE, MAX_COLOR_VALUE, MAX_COLOR_RGB, MAX_COLOR_RGBA, MAX_COLOR_ALPHA, MIN_HEX_LENGTH, MAX_HEX_LENGTH, MIN_RGBA_LENGTH, MAX_RGBA_LENGTH, HEX_REGEX, RGBA_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_SATURATION", function() { return MAX_COLOR_SATURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_HUE", function() { return MAX_COLOR_HUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_VALUE", function() { return MAX_COLOR_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGB", function() { return MAX_COLOR_RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_RGBA", function() { return MAX_COLOR_RGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_COLOR_ALPHA", function() { return MAX_COLOR_ALPHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_HEX_LENGTH", function() { return MIN_HEX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_HEX_LENGTH", function() { return MAX_HEX_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_RGBA_LENGTH", function() { return MIN_RGBA_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_RGBA_LENGTH", function() { return MAX_RGBA_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEX_REGEX", function() { return HEX_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_REGEX", function() { return RGBA_REGEX; });
var MAX_COLOR_SATURATION = 100;
var MAX_COLOR_HUE = 359;
var MAX_COLOR_VALUE = 100;
var MAX_COLOR_RGB = 255;
/** @deprecated Use MAX_COLOR_RGB (255) or MAX_COLOR_ALPHA (100) */
var MAX_COLOR_RGBA = MAX_COLOR_RGB;
var MAX_COLOR_ALPHA = 100;
/** Minimum length for a hexadecimal color string (not including the #) */
var MIN_HEX_LENGTH = 3;
/** Maximum length for a hexadecimal color string (not including the #) */
var MAX_HEX_LENGTH = 6;
/** Minimum length for a string of an RGBA color component */
var MIN_RGBA_LENGTH = 1;
/** Maximum length for a string of an RGBA color component */
var MAX_RGBA_LENGTH = 3;
/** Regular expression matching only valid hexadecimal chars */
var HEX_REGEX = /^[\da-f]{0,6}$/i;
/** Regular expression matching only numbers */
var RGBA_REGEX = /^\d{0,3}$/;
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ "7BzU":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.styles.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var theme = props.theme, getClassNames = props.getClassNames, className = props.className;
    if (!theme) {
        throw new Error('Theme is undefined or null.');
    }
    if (getClassNames) {
        var names = getClassNames(theme);
        return {
            wrapper: [names.wrapper],
            divider: [names.divider]
        };
    }
    return {
        wrapper: [
            {
                display: 'inline-flex',
                height: '100%',
                alignItems: 'center'
            },
            className
        ],
        divider: [
            {
                width: 1,
                height: '100%',
                backgroundColor: theme.palette.neutralTertiaryAlt
            }
        ]
    };
};
//# sourceMappingURL=VerticalDivider.styles.js.map

/***/ }),

/***/ "7NRl":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/rgb2hsv.js ***!
  \*********************************************************************************************************************/
/*! exports provided: rgb2hsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hsv", function() { return rgb2hsv; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");

/** Converts RGB components to an HSV color. */
function rgb2hsv(r, g, b) {
    var h = NaN;
    var s;
    var v;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    // hue
    if (delta === 0) {
        h = 0;
    }
    else if (r === max) {
        h = ((g - b) / delta) % 6;
    }
    else if (g === max) {
        h = (b - r) / delta + 2;
    }
    else if (b === max) {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    // saturation
    s = Math.round((max === 0 ? 0 : delta / max) * 100);
    // value
    v = Math.round((max / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]) * 100);
    return { h: h, s: s, v: v };
}
//# sourceMappingURL=rgb2hsv.js.map

/***/ }),

/***/ "7wWa":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js ***!
  \************************************************************************************************************************/
/*! exports provided: LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.notification */ "ukOW");




var LayerHost = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_3__["notifyHostChanged"])(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=LayerHost.js.map

/***/ }),

/***/ "8Hty":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js ***!
  \****************************************************************************************************************************/
/*! exports provided: ElementType, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/**
 * {@docCategory Button}
 */
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType || (ElementType = {}));
/**
 * {@docCategory Button}
 */
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType || (ButtonType = {}));
//# sourceMappingURL=Button.types.js.map

/***/ }),

/***/ "8oE+":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/ColorPicker.js ***!
  \*********************************************************************************************************/
/*! exports provided: ColorPicker, ColorPickerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ColorPicker_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ColorPicker/index */ "4/X0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _components_ColorPicker_index__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerBase", function() { return _components_ColorPicker_index__WEBPACK_IMPORTED_MODULE_0__["ColorPickerBase"]; });


//# sourceMappingURL=ColorPicker.js.map

/***/ }),

/***/ "94wZ":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CommandBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return CommandBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "zKx7");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton.styles */ "CZVv");





/**
 * {@docCategory Button}
 */
var CommandBarButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--commandBar", styles: Object(_CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    CommandBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CommandBarButton', ['theme', 'styles'], true)
    ], CommandBarButton);
    return CommandBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=CommandBarButton.js.map

/***/ }),

/***/ "9D85":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: getSplitButtonVerticalDividerClassNames, getItemClassNames, getItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSplitButtonVerticalDividerClassNames", function() { return getSplitButtonVerticalDividerClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClassNames", function() { return getItemClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemStyles", function() { return getItemStyles; });
/* harmony import */ var _Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider/VerticalDivider.classNames */ "uWrk");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "G64Q");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "iRzo");




var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMaxMedium"]);
var getSplitButtonVerticalDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme) {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])(Object(_Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__["getDividerClassNames"])(theme), {
        wrapper: {
            position: 'absolute',
            right: 28,
            selectors: (_a = {},
                _a[MediumScreenSelector] = {
                    right: 32 // fontSize of the icon increased from 12px to 16px
                },
                _a)
        },
        divider: {
            height: 16,
            width: 1
        }
    });
    var _a;
});
var GlobalClassNames = {
    item: 'ms-ContextualMenu-item',
    divider: 'ms-ContextualMenu-divider',
    root: 'ms-ContextualMenu-link',
    isChecked: 'is-checked',
    isExpanded: 'is-expanded',
    isDisabled: 'is-disabled',
    linkContent: 'ms-ContextualMenu-linkContent',
    linkContentMenu: 'ms-ContextualMenu-linkContent',
    icon: 'ms-ContextualMenu-icon',
    iconColor: 'ms-ContextualMenu-iconColor',
    checkmarkIcon: 'ms-ContextualMenu-checkmarkIcon',
    subMenuIcon: 'ms-ContextualMenu-submenuIcon',
    label: 'ms-ContextualMenu-itemText',
    secondaryText: 'ms-ContextualMenu-secondaryText'
};
/**
 * @deprecated To be removed in 7.0.
 * @internal
 * This is a package-internal method that has been depended on.
 * It is being kept in this form for backwards compatibility.
 * It should be cleaned up in 7.0.
 *
 * TODO: Audit perf. impact of and potentially remove memoizeFunction.
 * https://github.com/OfficeDev/office-ui-fabric-react/issues/5534
 */
var getItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className) {
    var styles = Object(_ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["getMenuItemStyles"])(theme);
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getGlobalClassNames"])(GlobalClassNames, theme);
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])({
        item: [classNames.item, styles.item, itemClassName],
        divider: [classNames.divider, styles.divider, dividerClassName],
        root: [
            classNames.root,
            styles.root,
            checked && [classNames.isChecked, styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && [classNames.isExpanded, styles.rootExpanded],
            disabled && [classNames.isDisabled, styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_a = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _a)
                }
            ],
            className
        ],
        splitPrimary: [
            styles.root,
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: (_b = {
                            ':hover': styles.rootHovered,
                            ':hover ~ $splitMenu': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _b["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _b)
                }
            ]
        ],
        splitMenu: [
            styles.root,
            {
                flexBasis: '0',
                padding: '0 8px',
                minWidth: 28
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: (_c = {
                            ':hover': styles.rootHovered,
                            ':active': styles.rootPressed
                        },
                        _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _c["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:hover"] = { background: 'inherit;' },
                        _c)
                }
            ]
        ],
        anchorLink: styles.anchorLink,
        linkContent: [classNames.linkContent, styles.linkContent],
        linkContentMenu: [
            classNames.linkContentMenu,
            styles.linkContent,
            {
                justifyContent: 'center'
            }
        ],
        icon: [
            classNames.icon,
            knownIcon && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && [classNames.isDisabled, styles.iconDisabled]
        ],
        iconColor: styles.iconColor,
        checkmarkIcon: [classNames.checkmarkIcon, knownIcon && styles.checkmarkIcon, styles.icon, iconClassName],
        subMenuIcon: [classNames.subMenuIcon, styles.subMenuIcon, subMenuClassName],
        label: [classNames.label, styles.label],
        secondaryText: [classNames.secondaryText, styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            {
                alignItems: 'flex-start'
            },
            !disabled &&
                !checked && [
                {
                    selectors: (_d = {},
                        _d["." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus, ." + _Utilities__WEBPACK_IMPORTED_MODULE_3__["IsFocusVisibleClassName"] + " &:focus:hover"] = styles.rootFocused,
                        _d)
                }
            ]
        ]
    });
    var _a, _b, _c, _d;
});
/**
 * Wrapper function for generating ContextualMenuItem classNames which adheres to
 * the getStyles API, but invokes memoized className generator function with
 * primitive values.
 *
 * @param props the ContextualMenuItem style props used to generate its styles.
 */
var getItemStyles = function (props) {
    var theme = props.theme, disabled = props.disabled, expanded = props.expanded, checked = props.checked, isAnchorLink = props.isAnchorLink, knownIcon = props.knownIcon, itemClassName = props.itemClassName, dividerClassName = props.dividerClassName, iconClassName = props.iconClassName, subMenuClassName = props.subMenuClassName, primaryDisabled = props.primaryDisabled, className = props.className;
    return getItemClassNames(theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled, className);
};
//# sourceMappingURL=ContextualMenu.classNames.js.map

/***/ }),

/***/ "9QpN":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Button.js ***!
  \****************************************************************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button/index */ "gCc8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ActionButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CompoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["DefaultButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["MessageBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["PrimaryButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["IconButton"]; });


//# sourceMappingURL=Button.js.map

/***/ }),

/***/ "A6zI":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorSlider/ColorSlider.base.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ColorSliderBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSliderBase", function() { return ColorSliderBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
/**
 * {@docCategory ColorPicker}
 */
var ColorSliderBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColorSliderBase, _super);
    function ColorSliderBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onMouseDown = function (ev) {
            _this._events.on(window, 'mousemove', _this._onMouseMove, true);
            _this._events.on(window, 'mouseup', _this._onMouseUp, true);
            _this._onMouseMove(ev);
        };
        _this._onMouseMove = function (ev) {
            if (!_this._root.current) {
                return;
            }
            var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged, minValue = _a.minValue, maxValue = _a.maxValue;
            var rectSize = _this._root.current.getBoundingClientRect();
            var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
            var newValue = Math.min(maxValue, Math.max(minValue, currentPercentage * maxValue));
            _this.setState({
                currentValue: newValue
            });
            if (onChange) {
                onChange(ev, newValue);
            }
            if (onChanged) {
                onChanged(newValue);
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._onMouseUp = function (ev) {
            _this._events.off();
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('ColorSlider', props, {
            onChanged: 'onChange'
        });
        var value = _this.props.value;
        _this.state = {
            currentValue: value
        };
        return _this;
    }
    ColorSliderBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps && newProps.value) {
            this.setState({ currentValue: newProps.value });
        }
    };
    ColorSliderBase.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    ColorSliderBase.prototype.render = function () {
        var _a = this.props, isAlpha = _a.isAlpha, minValue = _a.minValue, maxValue = _a.maxValue, overlayStyle = _a.overlayStyle, theme = _a.theme, className = _a.className, styles = _a.styles;
        var currentValue = this.state.currentValue;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className
        });
        var currentPercentage = (100 * (currentValue - minValue)) / (maxValue - minValue);
        var hueStyle = {
            background: 
            // tslint:disable-next-line:max-line-length
            'linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)'
        };
        var alphaStyle = {
            backgroundImage: 
            // tslint:disable-next-line:max-line-length
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)'
        };
        var sliderStyle = isAlpha ? alphaStyle : hueStyle;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._root, className: classNames.root, onMouseDown: this._onMouseDown, style: sliderStyle },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sliderOverlay, style: overlayStyle }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.sliderThumb, style: { left: currentPercentage + '%' } })));
    };
    ColorSliderBase.defaultProps = {
        minValue: 0,
        maxValue: 100,
        thumbColor: 'inherit',
        value: 0
    };
    return ColorSliderBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=ColorSlider.base.js.map

/***/ }),

/***/ "A9FN":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CompoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return CompoundButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "zKx7");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompoundButton.styles */ "bAjc");





/**
 * {@docCategory Button}
 */
var CompoundButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: Object(_CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary) })));
    };
    CompoundButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CompoundButton', ['theme', 'styles'], true)
    ], CompoundButton);
    return CompoundButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=CompoundButton.js.map

/***/ }),

/***/ "ASEy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/KeytipData.js ***!
  \********************************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeytipData/index */ "IMrf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });


//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "ApDL":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: DirectionalHint, ContextualMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return ContextualMenuItemType; });
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });


/**
 * {@docCategory ContextualMenu}
 */
var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));
//# sourceMappingURL=ContextualMenu.types.js.map

/***/ }),

/***/ "B2Cu":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/correctRGB.js ***!
  \************************************************************************************************************************/
/*! exports provided: correctRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctRGB", function() { return correctRGB; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clamp */ "SPjM");


/** Corrects an RGB color to fall within the valid range.  */
function correctRGB(color) {
    return {
        r: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.r, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]),
        g: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.g, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]),
        b: Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.b, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]),
        a: typeof color.a === 'number' ? Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(color.a, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]) : color.a
    };
}
//# sourceMappingURL=correctRGB.js.map

/***/ }),

/***/ "BB33":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/getColorFromRGBA.js ***!
  \******************************************************************************************************************************/
/*! exports provided: getColorFromRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorFromRGBA", function() { return getColorFromRGBA; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _rgb2hsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb2hsv */ "7NRl");
/* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");
/* harmony import */ var _rgbaOrHexString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_rgbaOrHexString */ "PSe/");




/** Converts an RGBA color to a color object (alpha defaults to 100). */
function getColorFromRGBA(rgba) {
    var _a = rgba.a, a = _a === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"] : _a, b = rgba.b, g = rgba.g, r = rgba.r;
    var _b = Object(_rgb2hsv__WEBPACK_IMPORTED_MODULE_1__["rgb2hsv"])(r, g, b), h = _b.h, s = _b.s, v = _b.v;
    var hex = Object(_rgb2hex__WEBPACK_IMPORTED_MODULE_2__["rgb2hex"])(r, g, b);
    var str = Object(_rgbaOrHexString__WEBPACK_IMPORTED_MODULE_3__["_rgbaOrHexString"])(r, g, b, a, hex);
    return { a: a, b: b, g: g, h: h, hex: hex, r: r, s: s, str: str, v: v };
}
//# sourceMappingURL=getColorFromRGBA.js.map

/***/ }),

/***/ "Bswb":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \*****************************************************************************************************/
/*! exports provided: Callout, FocusTrapCallout, DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Callout/index */ "z2r6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["FocusTrapCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });


//# sourceMappingURL=Callout.js.map

/***/ }),

/***/ "BxdP":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, disabled, expanded, checked, primaryDisabled) {
    return {
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
        splitButtonContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonContainer, checked &&
            !disabled && [
            styles.splitButtonContainerChecked,
            {
                selectors: {
                    ':hover': styles.splitButtonContainerCheckedHovered
                }
            }
        ], !disabled &&
            !checked && [
            {
                selectors: {
                    ':hover': styles.splitButtonContainerHovered,
                    ':focus': styles.splitButtonContainerFocused
                }
            }
        ], disabled && styles.splitButtonContainerDisabled),
        icon: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled, !disabled && primaryDisabled && styles.splitButtonMenuIcon),
        flexContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonFlexContainer),
        divider: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonDivider, (primaryDisabled || disabled) && styles.splitButtonDividerDisabled)
    };
});
//# sourceMappingURL=SplitButton.classNames.js.map

/***/ }),

/***/ "CDio":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.base.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: VerticalDividerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDividerBase", function() { return VerticalDividerBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["classNamesFunction"])();
var VerticalDividerBase = function (props) {
    var styles = props.styles, theme = props.theme, deprecatedGetClassNames = props.getClassNames, className = props.className;
    var classNames = getClassNames(styles, { theme: theme, getClassNames: deprecatedGetClassNames, className: className });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classNames.wrapper },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classNames.divider })));
};
//# sourceMappingURL=VerticalDivider.base.js.map

/***/ }),

/***/ "CZVv":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "aWrN");




var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var baseSplitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var commandButtonHighContrastFocus = {
        left: 4,
        top: 4,
        bottom: 4,
        right: 4,
        border: 'none'
    };
    var commandButtonStyles = {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, { inset: -1, highContrastStyle: commandButtonHighContrastFocus }),
            theme.fonts.medium,
            {
                minWidth: '40px',
                backgroundColor: theme.palette.neutralLighter,
                color: theme.palette.neutralPrimary,
                padding: '0 4px',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: 'none'
                    },
                    _a)
            }
        ],
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _c)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            marginTop: 4,
            marginBottom: 4
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    color: theme.palette.neutralDark,
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _d)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
    var _a, _b, _c, _d;
});
//# sourceMappingURL=CommandBarButton.styles.js.map

/***/ }),

/***/ "Cz2c":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.base.js ***!
  \***************************************************************************************************************************/
/*! exports provided: FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return FabricBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fabric.styles */ "oHZS");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var FabricBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FabricBase, _super);
    function FabricBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._disposables = [];
        _this._onMouseDown = function (ev) {
            _this.setState({ isFocusVisible: false });
        };
        _this._onKeyDown = function (ev) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isDirectionalKeyCode"])(ev.which)) {
                _this.setState({ isFocusVisible: true });
            }
        };
        _this.state = { isFocusVisible: false };
        return _this;
    }
    FabricBase.prototype.render = function () {
        var _a = this.props, className = _a.className, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["className"]);
        var classNames = getClassNames(_Fabric_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"], {
            theme: this.props.theme,
            className: className,
            isFocusVisible: this.state.isFocusVisible
        });
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(rest, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, { className: classNames.root, ref: this._rootElement }));
    };
    FabricBase.prototype.componentDidMount = function () {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(this._rootElement.current);
        if (win) {
            this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(win, 'mousedown', this._onMouseDown, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(win, 'keydown', this._onKeyDown, true));
        }
    };
    FabricBase.prototype.componentWillUnmount = function () {
        this._disposables.forEach(function (dispose) { return dispose(); });
    };
    return FabricBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Fabric.base.js.map

/***/ }),

/***/ "D89h":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "iePh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "NUVe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony import */ var _LayerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerHost */ "7wWa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _LayerHost__WEBPACK_IMPORTED_MODULE_2__["LayerHost"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "DCO0":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js ***!
  \********************************************************************************************************************************/
/*! exports provided: BaseDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecorator", function() { return BaseDecorator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");


var BaseDecorator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        // tslint:disable-next-line:typedef
        _this._skipComponentRefResolution = true;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["hoistMethods"])(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["unhoistMethods"])(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

//# sourceMappingURL=BaseDecorator.js.map

/***/ }),

/***/ "FQnb":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Layer.js ***!
  \***************************************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "e1Yi");
/* harmony import */ var _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layer/index */ "D89h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_1__["LayerHost"]; });



//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "FpBO":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.styles.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    return {
        root: [
            'ms-ColorPicker',
            theme.fonts.medium,
            {
                position: 'relative',
                maxWidth: 300
            },
            className
        ],
        panel: [
            'ms-ColorPicker-panel',
            {
                padding: '16px'
            }
        ],
        table: [
            'ms-ColorPicker-table',
            {
                tableLayout: 'fixed',
                width: '100%'
            }
        ],
        tableHeader: [
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme.fonts.small)
        ],
        tableHexCell: [
            {
                width: '25%'
            }
        ],
        input: [
            'ms-ColorPicker-input',
            {
                width: '100%',
                border: 'none',
                boxSizing: 'border-box',
                height: 30,
                selectors: {
                    '&.ms-TextField': {
                        paddingRight: 2
                    },
                    '& .ms-TextField-field': {
                        minWidth: 'auto',
                        padding: 5,
                        textOverflow: 'clip'
                    }
                }
            }
        ]
    };
};
//# sourceMappingURL=ColorPicker.styles.js.map

/***/ }),

/***/ "G64Q":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CONTEXTUAL_MENU_ITEM_HEIGHT, getMenuItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXTUAL_MENU_ITEM_HEIGHT", function() { return CONTEXTUAL_MENU_ITEM_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemStyles", function() { return getMenuItemStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");



var CONTEXTUAL_MENU_ITEM_HEIGHT = '32px';
var MediumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]);
var getItemHighContrastStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return {
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none'
            },
            _a)
    };
    var _a;
});
var getMenuItemStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;
    var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box'
            }
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: ContextualMenuItemDividerColor,
            position: 'relative'
        },
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            fonts.medium,
            {
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 8px 0 4px',
                textAlign: 'left'
            }
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    opacity: 1
                },
                _a)
        },
        rootHovered: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootFocused: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootChecked: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getItemHighContrastStyles()),
        rootPressed: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor }, getItemHighContrastStyles()),
        rootExpanded: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%'
        },
        anchorLink: {
            padding: '0px 8px 0 4px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box'
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        secondaryText: {
            color: theme.palette.neutralSecondary,
            paddingLeft: '20px',
            textAlign: 'right'
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            width: '14px',
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0'
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'inherit'
                },
                _b['$root:hover &'] = {
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText'
                        },
                        _c)
                },
                _b['$root:focus &'] = {
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText'
                        },
                        _d)
                },
                _b)
        },
        iconDisabled: {
            color: semanticColors.disabledBodyText
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'HighlightText'
                },
                _e)
        },
        subMenuIcon: {
            height: CONTEXTUAL_MENU_ITEM_HEIGHT,
            lineHeight: CONTEXTUAL_MENU_ITEM_HEIGHT,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].small,
            selectors: (_f = {},
                _f[MediumScreenSelector] = {
                    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].icon // 16px
                },
                _f)
        },
        splitButtonFlexContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            {
                display: 'flex',
                height: CONTEXTUAL_MENU_ITEM_HEIGHT,
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        ]
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(menuItemStyles);
    var _a, _b, _c, _d, _e, _f;
});
//# sourceMappingURL=ContextualMenu.cnstyles.js.map

/***/ }),

/***/ "Glho":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/FocusTrapZone.js ***!
  \***********************************************************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FocusTrapZone/index */ "UDac");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return _components_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusTrapZone"]; });


//# sourceMappingURL=FocusTrapZone.js.map

/***/ }),

/***/ "I7qx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Fabric.js ***!
  \****************************************************************************************************/
/*! exports provided: Fabric, FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Fabric/index */ "NARb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__["FabricBase"]; });


//# sourceMappingURL=Fabric.js.map

/***/ }),

/***/ "ICEt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/updateA.js ***!
  \*********************************************************************************************************************/
/*! exports provided: updateA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateA", function() { return updateA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _rgbaOrHexString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rgbaOrHexString */ "PSe/");


/**
 * Gets a color with the given alpha value and the same other components as `color`.
 * Does not modify the original color.
 */
function updateA(color, a) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, color, { a: a, str: Object(_rgbaOrHexString__WEBPACK_IMPORTED_MODULE_1__["_rgbaOrHexString"])(color.r, color.g, color.b, a, color.hex) });
}
//# sourceMappingURL=updateA.js.map

/***/ }),

/***/ "IMrf":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipData */ "bJL8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _KeytipData__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "IaJs":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "aWrN");




var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            color: semanticColors.actionLink
        },
        rootHovered: {
            color: semanticColors.actionLinkHovered,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            color: palette.themePrimary
        },
        rootExpanded: {
            color: palette.themePrimary
        },
        rootChecked: {
            backgroundColor: semanticColors.buttonBackgroundChecked
        },
        rootCheckedHovered: {
            backgroundColor: semanticColors.buttonBackgroundHovered
        },
        rootDisabled: {
            color: semanticColors.disabledText
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
    var _a;
});
//# sourceMappingURL=IconButton.styles.js.map

/***/ }),

/***/ "Iqyr":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Popup/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "1XSK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "IypE":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return getSubmenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return canAnyMenuItemsCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return ContextualMenuBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.types */ "ApDL");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../FocusZone */ "5U38");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "cRpF");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "p6i1");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Callout */ "Bswb");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContextualMenuItem */ "qQHi");
/* harmony import */ var _ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContextualMenuItemWrapper/index */ "rJVp");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContextualMenu.classNames */ "9D85");














var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
    disableCaching: true
});
var getContextualMenuItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])({
    disableCaching: true
});
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
var NavigationIdleDelay = 250 /* ms */;
var ContextualMenuBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuBase, _super);
    function ContextualMenuBase(props) {
        var _this = _super.call(this, props) || this;
        _this._mounted = false;
        _this.dismiss = function (ev, dismissAll) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev, dismissAll);
            }
        };
        _this._onRenderMenuList = function (menuListProps, defaultRender) {
            var indexCorrection = 0;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: _this._classNames.list, onKeyDown: _this._onKeyDown, onKeyUp: _this._onKeyUp, role: "menu" }, menuListProps.items.map(function (item, index) {
                var menuItem = _this._renderMenuItem(item, index, indexCorrection, menuListProps.totalItemCount, menuListProps.hasCheckmarks, menuListProps.hasIcons);
                if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider && item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
                    var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    indexCorrection += indexIncrease;
                }
                return menuItem;
            })));
        };
        _this._onKeyDown = function (ev) {
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            // On Mac, pressing escape dismisses all levels of native context menus
            var dismissAllMenus = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].escape && (Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isMac"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isIOS"])());
            return _this._keyHandler(ev, _this._shouldHandleKeyDown, dismissAllMenus);
        };
        _this._shouldHandleKeyDown = function (ev) {
            return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].escape || _this._shouldCloseSubMenu(ev) || (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up && (ev.altKey || ev.metaKey));
        };
        _this._onMenuFocusCapture = function (ev) {
            if (_this.props.delayUpdateFocusOnHover) {
                _this._shouldUpdateFocusOnMouseEvent = true;
            }
        };
        _this._onKeyUp = function (ev) {
            return _this._keyHandler(ev, _this._shouldHandleKeyUp, true /* dismissAllMenus */);
        };
        /**
         * We close the menu on key up only if ALL of the following are true:
         * - Most recent key down was alt or meta (command)
         * - The alt/meta key down was NOT followed by some other key (such as down/up arrow to
         *   expand/collapse the menu)
         * - We're not on a Mac (or iOS)
         *
         * This is because on Windows, pressing alt moves focus to the application menu bar or similar,
         * closing any open context menus. There is not a similar behavior on Macs.
         */
        _this._shouldHandleKeyUp = function (ev) {
            var keyPressIsAltOrMetaAlone = _this._lastKeyDownWasAltOrMeta && _this._isAltOrMeta(ev);
            _this._lastKeyDownWasAltOrMeta = false;
            return !!keyPressIsAltOrMetaAlone && !(Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isIOS"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["isMac"])());
        };
        /**
         * Calls `shouldHandleKey` to determine whether the keyboard event should be handled;
         * if so, stops event propagation and dismisses menu(s).
         * @param ev - The keyboard event.
         * @param shouldHandleKey - Returns whether we should handle this keyboard event.
         * @param dismissAllMenus - If true, dismiss all menus. Otherwise, dismiss only the current menu.
         * Only does anything if `shouldHandleKey` returns true.
         * @returns Whether the event was handled.
         */
        _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
            var handled = false;
            if (shouldHandleKey(ev)) {
                _this._isFocusingPreviousElement = true;
                ev.preventDefault();
                ev.stopPropagation();
                _this.dismiss(ev, dismissAllMenus);
                handled = true;
            }
            return handled;
        };
        /**
         * Checks if the submenu should be closed
         */
        _this._shouldCloseSubMenu = function (ev) {
            var submenuCloseKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].right : _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].left;
            if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
                return false;
            }
            return (_this._adjustedFocusZoneProps.direction === _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical ||
                (!!_this._adjustedFocusZoneProps.checkForNoWrap && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shouldWrapFocus"])(ev.target, 'data-no-horizontal-wrap')));
        };
        _this._onMenuKeyDown = function (ev) {
            // Mark as handled if onKeyDown returns true (for handling collapse cases)
            // or if we are attempting to expand a submenu
            var handled = _this._onKeyDown(ev);
            if (handled || !_this._host) {
                return;
            }
            // If we have a modifier key being pressed, we do not want to move focus.
            // Otherwise, handle up and down keys.
            var hasModifier = !!(ev.altKey || ev.metaKey);
            var isUp = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].up;
            var isDown = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down;
            if (!hasModifier && (isUp || isDown)) {
                var elementToFocus = isUp
                    ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getLastFocusable"])(_this._host, _this._host.lastChild, true)
                    : Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getFirstFocusable"])(_this._host, _this._host.firstChild, true);
                if (elementToFocus) {
                    elementToFocus.focus();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                _this._async.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
                _this._isScrollIdle = true;
            }, NavigationIdleDelay);
        };
        _this._onItemMouseEnterBase = function (item, ev, target) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onItemMouseMoveBase = function (item, ev, target) {
            var targetElement = ev.currentTarget;
            // Always do this check to make sure we record a mouseMove if needed (even if we are timed out)
            if (_this._shouldUpdateFocusOnMouseEvent) {
                _this._gotMouseMove = true;
            }
            else {
                return;
            }
            if (!_this._isScrollIdle ||
                _this._enterTimerId !== undefined ||
                targetElement === _this._targetWindow.document.activeElement) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
            if (_this.state.expandedMenuItemKey !== undefined) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.setActive) {
                try {
                    _this._host.setActive();
                }
                catch (e) {
                    /* no-op */
                }
            }
            else {
                _this._host.focus();
            }
        };
        _this._onItemMouseDown = function (item, ev) {
            if (item.onMouseDown) {
                item.onMouseDown(item, ev);
            }
        };
        _this._onItemClick = function (item, ev) {
            _this._onItemClickBase(item, ev, ev.currentTarget);
        };
        _this._onItemClickBase = function (item, ev, target) {
            var items = getSubmenuItems(item);
            // Cancel a async menu item hover timeout action from being taken and instead
            // just trigger the click event instead.
            _this._cancelSubMenuTimer();
            if (!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item) && (!items || !items.length)) {
                // This is an item without a menu. Click it.
                _this._executeItemClick(item, ev);
            }
            else {
                if (item.key !== _this.state.expandedMenuItemKey) {
                    // This has a collapsed sub menu. Expand it.
                    _this.setState({
                        // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                        // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                        // between a real click event and a keypress event (detail should be the number of mouse clicks).
                        // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                        // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                        // and "" for pressing "Enter" with Narrator on.
                        expandedByMouseClick: ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse'
                    });
                    _this._onItemSubMenuExpand(item, target);
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onAnchorClick = function (item, ev) {
            _this._executeItemClick(item, ev);
            ev.stopPropagation();
        };
        _this._executeItemClick = function (item, ev) {
            if (item.disabled || item.isDisabled) {
                return;
            }
            var dismiss = false;
            if (item.onClick) {
                dismiss = !!item.onClick(ev, item);
            }
            else if (_this.props.onItemClick) {
                dismiss = !!_this.props.onItemClick(ev, item);
            }
            (dismiss || !ev.defaultPrevented) && _this.dismiss(ev, true);
        };
        _this._onItemKeyDown = function (item, ev) {
            var openKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].left : _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].right;
            if (!item.disabled &&
                (ev.which === openKey || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].enter || (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].down && (ev.altKey || ev.metaKey)))) {
                _this.setState({
                    expandedByMouseClick: false
                });
                _this._onItemSubMenuExpand(item, ev.currentTarget);
                ev.preventDefault();
            }
        };
        // Cancel a async menu item hover timeout action from being taken and instead
        // do new upcoming behavior
        _this._cancelSubMenuTimer = function () {
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
        };
        _this._onItemSubMenuExpand = function (item, target) {
            if (_this.state.expandedMenuItemKey !== item.key) {
                if (_this.state.expandedMenuItemKey) {
                    _this._onSubMenuDismiss();
                }
                // Focus the target to ensure when we close it, we're focusing on the correct element.
                target.focus();
                _this.setState({
                    expandedMenuItemKey: item.key,
                    submenuTarget: target
                });
            }
        };
        /**
         * This function is called ASYNCHRONOUSLY, and so there is a chance it is called
         * after the component is unmounted. The _mounted property is added to prevent
         * from calling setState() after unmount. Do NOT copy this pattern in synchronous
         * code.
         */
        _this._onSubMenuDismiss = function (ev, dismissAll) {
            if (dismissAll) {
                _this.dismiss(ev, dismissAll);
            }
            else if (_this._mounted) {
                _this.setState({
                    dismissedMenuItemKey: _this.state.expandedMenuItemKey,
                    expandedMenuItemKey: undefined,
                    submenuTarget: undefined
                });
            }
        };
        _this._getSubMenuId = function (item) {
            var subMenuId = _this.state.subMenuId;
            if (item.subMenuProps && item.subMenuProps.id) {
                subMenuId = item.subMenuProps.id;
            }
            return subMenuId;
        };
        _this._onPointerAndTouchEvent = function (ev) {
            _this._cancelSubMenuTimer();
        };
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('ContextualMenu')
        };
        _this._warnDeprecations({
            getMenuClassNames: 'styles'
        });
        _this._isFocusingPreviousElement = false;
        _this._isScrollIdle = true;
        _this._shouldUpdateFocusOnMouseEvent = !_this.props.delayUpdateFocusOnHover;
        _this._gotMouseMove = false;
        return _this;
    }
    ContextualMenuBase.prototype.shouldComponentUpdate = function (newProps, newState) {
        if (this.props.hidden && newProps.hidden) {
            // Do not update when hidden.
            return false;
        }
        return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shallowCompare"])(this.props, newProps) || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shallowCompare"])(this.state, newState);
    };
    ContextualMenuBase.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.hidden !== this.props.hidden) {
            if (newProps.hidden) {
                this._onMenuClosed();
            }
            else {
                this._onMenuOpened();
                this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
            }
        }
        if (newProps.delayUpdateFocusOnHover !== this.props.delayUpdateFocusOnHover) {
            // update shouldUpdateFocusOnMouseEvent to follow what was passed in
            this._shouldUpdateFocusOnMouseEvent = !newProps.delayUpdateFocusOnHover;
            // If shouldUpdateFocusOnMouseEvent is false, we need to reset gotMouseMove to false
            this._gotMouseMove = this._shouldUpdateFocusOnMouseEvent && this._gotMouseMove;
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenuBase.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        if (!this.props.hidden) {
            this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
        }
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenuBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onMenuOpened();
        }
        this._mounted = true;
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenuBase.prototype.componentWillUnmount = function () {
        this._tryFocusPreviousActiveElement();
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._events.dispose();
        this._async.dispose();
        this._mounted = false;
    };
    ContextualMenuBase.prototype.render = function () {
        var _this = this;
        var isBeakVisible = this.props.isBeakVisible;
        var _a = this.props, items = _a.items, labelElementId = _a.labelElementId, id = _a.id, className = _a.className, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, alignTargetEdge = _a.alignTargetEdge, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, useTargetAsMinWidth = _a.useTargetAsMinWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, shouldFocusOnContainer = _a.shouldFocusOnContainer, title = _a.title, styles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b, _c = _a.onRenderMenuList, onRenderMenuList = _c === void 0 ? this._onRenderMenuList : _c, focusZoneProps = _a.focusZoneProps, getMenuClassNames = _a.getMenuClassNames;
        this._classNames = getMenuClassNames
            ? getMenuClassNames(theme, className)
            : getClassNames(styles, {
                theme: theme,
                className: className
            });
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (!!item.iconProps) {
                    return true;
                }
                if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section && item.sectionProps && itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        this._adjustedFocusZoneProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, focusZoneProps, { direction: this._getFocusZoneDirection() });
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = this.state.expandedMenuItemKey && this.props.hidden !== true ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["ResponsiveMode"].medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
            var targetWidth = targetBoundingRect.width - 2 /* Accounts for 1px border */;
            if (useTargetWidth) {
                contextMenuStyle = {
                    width: targetWidth
                };
            }
            else if (useTargetAsMinWidth) {
                contextMenuStyle = {
                    minWidth: targetWidth
                };
            }
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var totalItemCount = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider && item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
                    var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    totalItemCount += itemCount;
                }
            }
            var calloutStyles = !getMenuClassNames && this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.callout
                : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_8__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ styles: calloutStyles }, calloutProps, { target: target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-ContextualMenu-Callout', calloutProps && calloutProps.className), setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, onScroll: this._onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed, alignTargetEdge: alignTargetEdge, hidden: this.props.hidden }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "aria-label": ariaLabel, "aria-labelledby": labelElementId, style: contextMenuStyle, ref: function (host) { return (_this._host = host); }, id: id, className: this._classNames.container, tabIndex: shouldFocusOnContainer ? 0 : -1, onKeyDown: this._onMenuKeyDown, onKeyUp: this._onKeyUp, onFocusCapture: this._onMenuFocusCapture },
                    title && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.title },
                        " ",
                        title,
                        " "),
                    items && items.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._adjustedFocusZoneProps, { className: this._classNames.root, isCircularNavigation: true, handleTabKey: _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneTabbableElements"].all }), onRenderMenuList({
                        items: items,
                        totalItemCount: totalItemCount,
                        hasCheckmarks: hasCheckmarks,
                        hasIcons: hasIcons
                    }, this._onRenderMenuList))) : null,
                    submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu))));
        }
        else {
            return null;
        }
    };
    ContextualMenuBase.prototype._onMenuOpened = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
        this._gotMouseMove = false;
        this.props.onMenuOpened && this.props.onMenuOpened(this.props);
    };
    ContextualMenuBase.prototype._onMenuClosed = function () {
        this._events.off(this._targetWindow, 'resize', this.dismiss);
        this._tryFocusPreviousActiveElement();
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._shouldUpdateFocusOnMouseEvent = !this.props.delayUpdateFocusOnHover;
        // We need to dismiss any submenu related state properties,
        // so that when the menu is shown again, the submenu is collapsed
        this.setState({
            expandedByMouseClick: undefined,
            dismissedMenuItemKey: undefined,
            expandedMenuItemKey: undefined,
            submenuTarget: undefined
        });
    };
    ContextualMenuBase.prototype._tryFocusPreviousActiveElement = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, const react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            // Note: Cannot be replaced by this._async.setTimout because those will be removed by the time this is called.
            setTimeout(function () {
                _this._previousActiveElement && _this._previousActiveElement.focus();
            }, 0);
        }
    };
    /**
     * Gets the focusZoneDirection by using the arrowDirection if specified,
     * the direction specificed in the focusZoneProps, or defaults to FocusZoneDirection.vertical
     */
    ContextualMenuBase.prototype._getFocusZoneDirection = function () {
        var focusZoneProps = this.props.focusZoneProps;
        return focusZoneProps && focusZoneProps.direction !== undefined ? focusZoneProps.direction : _FocusZone__WEBPACK_IMPORTED_MODULE_4__["FocusZoneDirection"].vertical;
    };
    ContextualMenuBase.prototype._onRenderSubMenu = function (subMenuProps, defaultRender) {
        throw Error('ContextualMenuBase: onRenderSubMenu callback is null or undefined. ' +
            'Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.');
    };
    ContextualMenuBase.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        var iconProps = item.iconProps || { iconName: 'None' };
        var getItemClassNames = item.getItemClassNames, itemProps = item.itemProps;
        var styles = itemProps ? itemProps.styles : undefined;
        // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        var itemClassNames;
        // IContextualMenuItem#getItemClassNames for backwards compatibility
        // otherwise uses mergeStyles for class names.
        if (getItemClassNames) {
            itemClassNames = getItemClassNames(this.props.theme, Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item), this.state.expandedMenuItemKey === item.key, !!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["getIsChecked"])(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
        }
        else {
            var itemStyleProps = {
                theme: this.props.theme,
                disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
                expanded: this.state.expandedMenuItemKey === item.key,
                checked: !!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["getIsChecked"])(item),
                isAnchorLink: !!item.href,
                knownIcon: iconProps.iconName !== 'None',
                itemClassName: item.className,
                dividerClassName: dividerClassName,
                iconClassName: iconProps.className,
                subMenuClassName: subMenuIconClassName,
                primaryDisabled: item.primaryDisabled
            };
            var menuItemStyles = this._classNames.subComponentStyles
                ? this._classNames.subComponentStyles.menuItem
                : undefined;
            // We need to generate default styles then override if styles are provided
            // since the ContextualMenu currently handles item classNames.
            itemClassNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_11__["mergeStyleSets"])(getContextualMenuItemClassNames(_ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__["getItemStyles"], itemStyleProps), getContextualMenuItemClassNames(menuItemStyles, itemStyleProps), getContextualMenuItemClassNames(styles, itemStyleProps));
        }
        if (item.text === '-' || item.name === '-') {
            item.itemType = _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider;
        }
        switch (item.itemType) {
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                break;
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section:
                renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenuBase.prototype._renderSectionItem = function (sectionItem, menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var sectionProps = sectionItem.sectionProps;
        if (!sectionProps) {
            return;
        }
        var headerItem;
        if (sectionProps.title) {
            var headerContextualMenuItem = {
                key: "section-" + sectionProps.title + "-title",
                itemType: _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header,
                text: sectionProps.title
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (sectionProps.items && sectionProps.items.length > 0) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "presentation", key: sectionProps.key || sectionItem.key || "section-" + index },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: this._classNames.list },
                        sectionProps.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem && this._renderListItem(headerItem, sectionItem.key || index, menuClassNames, sectionItem.title),
                        sectionProps.items.map(function (contextualMenuItem, itemsIndex) {
                            return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, sectionProps.items.length, hasCheckmarks, hasIcons);
                        }),
                        sectionProps.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenuBase.prototype._renderListItem = function (content, key, classNames, title) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "presentation", title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenuBase.prototype._renderSeparator = function (index, classNames, top, fromSection) {
        if (fromSection || index > 0) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "separator", key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'), className: classNames.divider, "aria-hidden": "true" }));
        }
        return null;
    };
    ContextualMenuBase.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return item.onRender(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ 'aria-posinset': focusableElementIndex + 1, 'aria-setsize': totalItemCount }, item), this.dismiss);
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenuBase.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props.contextualMenuItemAs, ChildrenRenderer = _a === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_9__["ContextualMenuItem"] : _a;
        var itemProps = item.itemProps;
        var divHtmlProperties = itemProps && Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_5__["divProperties"]);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ className: this._classNames.header }, divHtmlProperties, { style: item.style }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined, hasIcons: hasIcons }, itemProps))));
    };
    ContextualMenuBase.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuAnchor"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onAnchorClick, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuButton"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuSplitButton"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss, expandedMenuItemKey: expandedMenuItemKey, onTap: this._onPointerAndTouchEvent }));
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    ContextualMenuBase.prototype._isAltOrMeta = function (ev) {
        return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_5__["KeyCodes"].alt || ev.key === 'Meta';
    };
    ContextualMenuBase.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /**
     * Handles updating focus when mouseEnter or mouseMove fire.
     * As part of updating focus, This function will also update
     * the expand/collapse state accordingly.
     */
    ContextualMenuBase.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
        var _this = this;
        var targetElement = target ? target : ev.currentTarget;
        var _a = this.props.subMenuHoverDelay, timeoutDuration = _a === void 0 ? NavigationIdleDelay : _a;
        if (item.key === this.state.expandedMenuItemKey) {
            return;
        }
        if (this._enterTimerId !== undefined) {
            this._async.clearTimeout(this._enterTimerId);
            this._enterTimerId = undefined;
        }
        // If the menu is not expanded we can update focus without any delay
        if (this.state.expandedMenuItemKey === undefined) {
            targetElement.focus();
        }
        // Delay updating expanding/dismissing the submenu
        // and only set focus if we have not already done so
        if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
            ev.stopPropagation();
            this._enterTimerId = this._async.setTimeout(function () {
                targetElement.focus();
                _this.setState({
                    expandedByMouseClick: true
                });
                _this._onItemSubMenuExpand(item, targetElement);
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
        else {
            this._enterTimerId = this._async.setTimeout(function () {
                _this._onSubMenuDismiss(ev);
                targetElement.focus();
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
    };
    ContextualMenuBase.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                shouldFocusOnContainer: this.state.expandedByMouseClick,
                directionalHint: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].leftTopEdge : _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].rightTopEdge,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false
            };
            if (item.subMenuProps) {
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["assign"])(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenuBase.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that mathes a given key if any.
     * @param key - The key of the item to match
     * @param items - The items to look for the key
     */
    ContextualMenuBase.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenuBase.prototype._setTargetWindowAndElement = function (target) {
        var currentElement = this._host;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getDocument"])(currentElement);
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(currentElement);
        }
    };
    // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
    ContextualMenuBase.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        gapSpace: 0,
        directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_3__["DirectionalHint"].bottomAutoEdge,
        beakWidth: 16
    };
    ContextualMenuBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["withResponsiveMode"]
    ], ContextualMenuBase);
    return ContextualMenuBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));

//# sourceMappingURL=ContextualMenu.base.js.map

/***/ }),

/***/ "J67R":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: KeytipManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return KeytipManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipConstants */ "pDCd");



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = [];
        this.persistedKeytips = [];
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns {KeytipManager} Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns {string} Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to array
        persisted ? this.persistedKeytips.push(uniqueKeytip) : this.keytips.push(uniqueKeytip);
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_ADDED;
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
            keytip: props,
            uniqueID: uniqueKeytip.uniqueID
        });
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var keytipIndex = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["findIndex"])(this.keytips, function (ktp) {
            return ktp.uniqueID === uniqueID;
        });
        if (keytipIndex >= 0) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = this.keytips[keytipIndex].keytip.visible;
            // Update keytip in this.keytips
            this.keytips = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(this.keytips, uniqueKeytip, keytipIndex);
            // Raise event
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_UPDATED, {
                keytip: uniqueKeytip.keytip,
                uniqueID: uniqueKeytip.uniqueID
            });
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        if (persisted) {
            // Remove keytip from this.persistedKeytips
            this.persistedKeytips = this.persistedKeytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        else {
            // Remove keytip from this.keytips
            this.keytips = this.keytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_REMOVED;
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
            keytip: keytipToRemove,
            uniqueID: uniqueID
        });
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns {IKeytipProps[]} All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        return this.keytips.map(function (uniqueKeytip) {
            return uniqueKeytip.keytip;
        });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = keytipProps.keySequences.slice();
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["find"])(this.getKeytips(), function (keytip) {
                return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"])(fullSequence, keytip.keySequences);
            });
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     *
     * @param overflowButtonSequences
     * @param keytipSequences
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns {IUniqueKeytip} IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getId"])(); }
        return { keytip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());

//# sourceMappingURL=KeytipManager.js.map

/***/ }),

/***/ "JTa0":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorPicker.js ***!
  \********************************************************************************************************************************/
/*! exports provided: ColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _ColorPicker_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker.base */ "53eK");
/* harmony import */ var _ColorPicker_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker.styles */ "FpBO");



var ColorPicker = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ColorPicker_base__WEBPACK_IMPORTED_MODULE_1__["ColorPickerBase"], _ColorPicker_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ColorPicker' });
//# sourceMappingURL=ColorPicker.js.map

/***/ }),

/***/ "LTJ4":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/hsv2rgb.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hsv2rgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return hsv2rgb; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");

/** Converts HSV components to an RGB color. Does not set the alpha value. */
function hsv2rgb(h, s, v) {
    s = s / 100;
    v = v / 100;
    var rgb = [];
    var c = v * s;
    var hh = h / 60;
    var x = c * (1 - Math.abs((hh % 2) - 1));
    var m = v - c;
    switch (Math.floor(hh)) {
        case 0:
            rgb = [c, x, 0];
            break;
        case 1:
            rgb = [x, c, 0];
            break;
        case 2:
            rgb = [0, c, x];
            break;
        case 3:
            rgb = [0, x, c];
            break;
        case 4:
            rgb = [x, 0, c];
            break;
        case 5:
            rgb = [c, 0, x];
            break;
    }
    return {
        r: Math.round(_consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"] * (rgb[0] + m)),
        g: Math.round(_consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"] * (rgb[1] + m)),
        b: Math.round(_consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"] * (rgb[2] + m))
    };
}
//# sourceMappingURL=hsv2rgb.js.map

/***/ }),

/***/ "LXZO":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");



var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent',
            border: '1px solid transparent'
        },
        rootHovered: {
            color: theme.palette.themePrimary,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        iconHovered: {
            color: theme.palette.themePrimary
        },
        rootPressed: {
            color: theme.palette.black
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        iconPressed: {
            color: theme.palette.themeDarker
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            color: theme.palette.black
        },
        iconChecked: {
            color: theme.palette.themeDarker
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        },
        textContainer: {
            flexGrow: 0
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, actionButtonStyles, customStyles);
    var _a;
});
//# sourceMappingURL=ActionButton.styles.js.map

/***/ }),

/***/ "Lde7":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorRectangle/ColorRectangle.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ColorRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRectangle", function() { return ColorRectangle; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ColorRectangle_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorRectangle.base */ "cLFc");
/* harmony import */ var _ColorRectangle_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorRectangle.styles */ "QUsa");



var ColorRectangle = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ColorRectangle_base__WEBPACK_IMPORTED_MODULE_1__["ColorRectangleBase"], _ColorRectangle_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ColorRectangle' });
//# sourceMappingURL=ColorRectangle.js.map

/***/ }),

/***/ "LkE5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Popup.js ***!
  \***************************************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Popup/index */ "Iqyr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });


//# sourceMappingURL=Popup.js.map

/***/ }),

/***/ "ME9p":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "Gc2k");


var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
    var semanticColors = theme.semanticColors;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none',
        outlineColor: 'ButtonText'
    };
    return {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, highContrastStyle: buttonHighContrastFocus }),
            theme.fonts.medium,
            {
                boxSizing: 'border-box',
                border: '1px solid ' + border,
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px',
                borderRadius: 0,
                margin: 0,
                selectors: {
                    // IE11 workaround for preventing shift of child elements of a button when active.
                    ':active > *': {
                        position: 'relative',
                        left: 0,
                        top: 0
                    }
                }
            }
        ],
        rootDisabled: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, { inset: -1, highContrastStyle: buttonHighContrastFocus }),
            {
                backgroundColor: disabledBackground,
                color: disabledText,
                cursor: 'default',
                pointerEvents: 'none',
                selectors: (_a = {
                        ':hover': noOutline,
                        ':focus': noOutline
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'grayText',
                        bordercolor: 'grayText'
                    },
                    _a)
            }
        ],
        iconDisabled: {
            color: disabledText
        },
        menuIconDisabled: {
            color: disabledText
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textContainer: {
            flexGrow: 1
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]
    };
    var _a;
});
//# sourceMappingURL=BaseButton.styles.js.map

/***/ }),

/***/ "Mz9Y":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js ***!
  \****************************************************************************************************************************/
/*! exports provided: FocusZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return FocusZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FocusZone.types */ "pRvW");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uifabric/merge-styles */ "RGr6");





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var focusZoneStyles;
var focusZoneClass = 'ms-FocusZone';
// Helper function that will return a class for when the root is focused
function getRootClass() {
    if (!focusZoneStyles) {
        focusZoneStyles = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_4__["mergeStyles"])({
            selectors: {
                ':focus': {
                    outline: 'none'
                }
            }
        }, focusZoneClass);
    }
    return focusZoneStyles;
}
var _allInstances = {};
var _outerZones = new Set();
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._disposables = [];
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onFocus = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, onFocusNotification = _a.onFocusNotification;
            var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);
            var newActiveElement;
            if (onFocusNotification) {
                onFocusNotification();
            }
            if (isImmediateDescendant) {
                newActiveElement = ev.target;
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        newActiveElement = parentElement;
                        break;
                    }
                    parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            var initialElementFocused = !_this._activeElement;
            // If the new active element is a child of this zone and received focus,
            // update alignment an immediate descendant
            if (newActiveElement && newActiveElement !== _this._activeElement) {
                if (isImmediateDescendant || initialElementFocused) {
                    _this._setFocusAlignment(newActiveElement, initialElementFocused);
                }
                _this._activeElement = newActiveElement;
                if (initialElementFocused) {
                    _this._updateTabIndexes();
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
        };
        _this._onBlur = function () {
            _this._setParkedFocus(false);
        };
        /**
         * Handle global tab presses so that we can patch tabindexes on the fly.
         */
        _this._onKeyDownCapture = function (ev) {
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].tab) {
                _outerZones.forEach(function (zone) { return zone._updateTabIndexes(); });
            }
        };
        _this._onMouseDown = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(target)) {
                    _this._setActiveElement(target, true);
                }
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
            if (disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (document.activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (isInnerZoneKeystroke && isInnerZoneKeystroke(ev) && _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusSubZone"])(ev.target)) {
                    if (!_this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                switch (ev.which) {
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].space:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].left:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical && _this._moveFocusLeft()) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].right:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical && _this._moveFocusRight()) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].up:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal && _this._moveFocusUp()) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].down:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal && _this._moveFocusDown()) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].pageDown:
                        if (_this._moveFocusPaging(true)) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].pageUp:
                        if (_this._moveFocusPaging(false)) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].tab:
                        if (_this.props.allowTabKey ||
                            _this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneTabbableElements"].all ||
                            (_this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneTabbableElements"].inputOnly && _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal || direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional) {
                                var tabWithDirection = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? !ev.shiftKey : ev.shiftKey;
                                focusChanged = tabWithDirection ? _this._moveFocusLeft() : _this._moveFocusRight();
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].home:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, false)) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current && firstChild && _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].end:
                        if (_this._isElementInput(ev.target) && !_this._shouldInputLoseFocus(ev.target, true)) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current && _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case _Utilities__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"].enter:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._getHorizontalDistanceFromCenter = function (isForward, activeRect, targetRect) {
            var leftAlignment = _this._focusAlignment.x;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            var targetRectBottom = Math.floor(targetRect.bottom);
            var activeRectTop = Math.floor(activeRect.top);
            var isValidCandidateOnpagingDown = isForward && targetRectTop > activeRectBottom;
            var isValidCandidateOnpagingUp = !isForward && targetRectBottom < activeRectTop;
            if (isValidCandidateOnpagingDown || isValidCandidateOnpagingUp) {
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    return 0;
                }
                return Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
            }
            else {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
        };
        // Manage componentRef resolution.
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["warnDeprecations"])('FocusZone', props, {
                rootProps: undefined,
                allowTabKey: 'handleTabKey',
                elementType: 'as',
                ariaDescribedBy: 'aria-describedby',
                ariaLabelledBy: 'aria-labelledby'
            });
        }
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('FocusZone');
        _this._focusAlignment = {
            x: 0,
            y: 0
        };
        _this._processingTabKey = false;
        return _this;
    }
    /** Used for testing purposes only. */
    FocusZone.getOuterZones = function () {
        return _outerZones.size;
    };
    FocusZone.prototype.componentDidMount = function () {
        var root = this._root.current;
        _allInstances[this._id] = this;
        if (root) {
            var windowElement = root.ownerDocument.defaultView;
            var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== document.body && parentElement.nodeType === 1) {
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                _outerZones.add(this);
                if (windowElement && _outerZones.size === 1) {
                    this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(windowElement, 'keydown', this._onKeyDownCapture, true));
                }
            }
            this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(root, 'blur', this._onBlur, true));
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentDidUpdate = function () {
        var root = this._root.current;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])(root);
        if (doc && this._lastIndexPath && (doc.activeElement === doc.body || doc.activeElement === root)) {
            // The element has been removed after the render, attempt to restore focus.
            var elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getFocusableByIndexPath"])(root, this._lastIndexPath);
            if (elementToFocus) {
                this._setActiveElement(elementToFocus, true);
                elementToFocus.focus();
                this._setParkedFocus(false);
            }
            else {
                // We had a focus path to restore, but now that path is unresolvable. Park focus
                // on the container until we can try again.
                this._setParkedFocus(true);
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
        if (!this._isInnerZone) {
            _outerZones.delete(this);
        }
        // Dispose all events.
        this._disposables.forEach(function (d) { return d(); });
        // Clear function references so their closures can be garbage-collected.
        delete this._disposables;
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
        var Tag = this.props.as || this.props.elementType || 'div';
        // Note, right before rendering/reconciling proceeds, we need to record if focus
        // was in the zone before the update. This helper will track this and, if focus
        // was actually in the zone, what the index path to the element is at this time.
        // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
        // the case the element was removed.
        this._evaluateFocusBeforeRender();
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ role: "presentation", "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }, divProps, rootProps, { 
            // Once the getClassName correctly memoizes inputs this should
            // be replaced so that className is passed to getRootClass and is included there so
            // the class names will always be in the same order.
            className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(getRootClass(), className), ref: this._root, "data-focuszone-id": this._id, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement && this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._root.current, this._activeElement) &&
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            // when we Set focus to a specific child, we should recalculate the alignment depend on its position
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference, rather than a center based on
     * the last horizontal motion.
     * @param point - the new reference point.
     */
    FocusZone.prototype.setFocusAlignment = function (point) {
        this._focusAlignment = point;
    };
    FocusZone.prototype._evaluateFocusBeforeRender = function () {
        var root = this._root.current;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])(root);
        if (doc) {
            var focusedElement = doc.activeElement;
            // Only update the index path if we are not parked on the root.
            if (focusedElement !== root) {
                var shouldRestoreFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(root, focusedElement, false);
                this._lastIndexPath = shouldRestoreFocus ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getElementIndexPath"])(root, doc.activeElement) : undefined;
            }
        }
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    FocusZone.prototype._setParkedFocus = function (isParked) {
        var root = this._root.current;
        if (root && this._isParked !== isParked) {
            this._isParked = isParked;
            if (isParked) {
                if (!this.props.allowFocusRoot) {
                    this._parkedTabIndex = root.getAttribute('tabindex');
                    root.setAttribute('tabindex', '-1');
                }
                root.focus();
            }
            else {
                if (!this.props.allowFocusRoot) {
                    if (this._parkedTabIndex) {
                        root.setAttribute('tabindex', this._parkedTabIndex);
                        this._parkedTabIndex = undefined;
                    }
                    else {
                        root.removeAttribute('tabindex');
                    }
                }
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignment) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["raiseClick"])(target);
                return true;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, element) : Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.x;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.x;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
                // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
                // This is important, because we want to be comparing the top of the target rect
                // with the bottom of the active rect.
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            if (topBottomComparison && targetRect.right <= activeRect.right && _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else {
                if (!shouldWrap) {
                    distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])(), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])()) {
                // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
                // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
                // This is important, because we want to be comparing the bottom of the target rect
                // with the top of the active rect.
                topBottomComparison = targetRect.bottom.toFixed(3) > activeRect.top.toFixed(3);
            }
            else {
                topBottomComparison = targetRect.top.toFixed(3) < activeRect.bottom.toFixed(3);
            }
            if (topBottomComparison && targetRect.left >= activeRect.left && _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusPaging = function (isForward, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        if (useDefaultWrap === void 0) {
            useDefaultWrap = true;
        }
        var element = this._activeElement;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var scrollableParent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["findScrollableParent"])(element);
        if (!scrollableParent) {
            return false;
        }
        var candidateDistance = -1;
        var candidateElement = undefined;
        var targetTop = -1;
        var targetBottom = -1;
        var pagesize = scrollableParent.clientHeight;
        var activeRect = element.getBoundingClientRect();
        do {
            element = isForward ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, element) : Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, element);
            if (element) {
                var targetRect = element.getBoundingClientRect();
                var targetRectTop = Math.floor(targetRect.top);
                var activeRectBottom = Math.floor(activeRect.bottom);
                var targetRectBottom = Math.floor(targetRect.bottom);
                var activeRectTop = Math.floor(activeRect.top);
                var elementDistance = this._getHorizontalDistanceFromCenter(isForward, activeRect, targetRect);
                var isElementPassedPageSizeOnPagingDown = isForward && targetRectTop > activeRectBottom + pagesize;
                var isElementPassedPageSizeOnPagingUp = !isForward && targetRectBottom < activeRectTop - pagesize;
                if (isElementPassedPageSizeOnPagingDown || isElementPassedPageSizeOnPagingUp) {
                    break;
                }
                if (elementDistance > -1) {
                    // for paging down
                    if (isForward && targetRectTop > targetTop) {
                        targetTop = targetRectTop;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else if (!isForward && targetRectBottom < targetBottom) {
                        // for paging up
                        targetBottom = targetRectBottom;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else {
                        if (candidateDistance === -1 || elementDistance <= candidateDistance) {
                            candidateDistance = elementDistance;
                            candidateElement = element;
                        }
                    }
                }
            }
        } while (element);
        var changedFocus = false;
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
            this._setFocusAlignment(candidateElement, false, true);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, this._root.current.firstElementChild, true));
            }
            return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, this._root.current.lastElementChild, true, true, true));
        }
        return changedFocus;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional && (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = {
                    x: left,
                    y: top_1
                };
            }
            if (isHorizontal) {
                this._focusAlignment.x = left;
            }
            if (isVertical) {
                this._focusAlignment.y = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== document.body) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(parentElement)) {
                return parentElement;
            }
            parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return parentElement;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey && element && element.type && ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of length and it is forward.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
            // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
            // callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward) ||
                (!!this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return !!this.props.checkForNoWrap ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shouldWrapFocus"])(element, noWrapDataAttribute) : true;
    };
    /**
     * Returns true if the element is a descendant of the FocusZone through a React portal.
     */
    FocusZone.prototype._portalContainsElement = function (element) {
        return element && !!this._root.current && Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["portalContainsElement"])(element, this._root.current);
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional
    };
    return FocusZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=FocusZone.js.map

/***/ }),

/***/ "NARb":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Fabric/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: Fabric, FabricBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fabric */ "p6XH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _Fabric__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });

/* harmony import */ var _Fabric_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabric.base */ "Cz2c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricBase", function() { return _Fabric_base__WEBPACK_IMPORTED_MODULE_1__["FabricBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "NUVe":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js ***!
  \*************************************************************************************************************************/
/*! exports provided: LayerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "fVfA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fabric */ "I7qx");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Layer_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layer.notification */ "ukOW");






var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._createLayerElement = function () {
            var hostId = _this.props.hostId;
            var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(_this._rootRef.current);
            var host = _this._getHost();
            if (!doc || !host) {
                return;
            }
            // If one was already existing, remove.
            _this._removeLayerElement();
            var layerElement = doc.createElement('div');
            var classNames = _this._getClassNames();
            layerElement.className = classNames.root;
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setPortalAttribute"])(layerElement);
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(layerElement, _this._rootRef.current);
            _this.props.insertFirst ? host.insertBefore(layerElement, host.firstChild) : host.appendChild(layerElement);
            _this.setState({
                hostId: hostId,
                layerElement: layerElement
            }, function () {
                var _a = _this.props, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted;
                if (onLayerMounted) {
                    onLayerMounted();
                }
                if (onLayerDidMount) {
                    onLayerDidMount();
                }
            });
        };
        _this.state = {};
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])('Layer', props, {
                onLayerMounted: 'onLayerDidMount'
            });
        }
        return _this;
    }
    LayerBase.prototype.componentDidMount = function () {
        var hostId = this.props.hostId;
        this._createLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["registerLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype.render = function () {
        var layerElement = this.state.layerElement;
        var classNames = this._getClassNames();
        var eventBubblingEnabled = this.props.eventBubblingEnabled;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ms-layer", ref: this._rootRef }, layerElement &&
            react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (!eventBubblingEnabled && _getFilteredEvents()), { className: classNames.content }), this.props.children), layerElement)));
    };
    LayerBase.prototype.componentDidUpdate = function () {
        if (this.props.hostId !== this.state.hostId) {
            this._createLayerElement();
        }
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var hostId = this.props.hostId;
        this._removeLayerElement();
        if (hostId) {
            Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["unregisterLayer"])(hostId, this._createLayerElement);
        }
    };
    LayerBase.prototype._removeLayerElement = function () {
        var onLayerWillUnmount = this.props.onLayerWillUnmount;
        var layerElement = this.state.layerElement;
        if (onLayerWillUnmount) {
            onLayerWillUnmount();
        }
        if (layerElement && layerElement.parentNode) {
            var parentNode = layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(layerElement);
            }
        }
    };
    LayerBase.prototype._getClassNames = function () {
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        return classNames;
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(this._rootRef.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            var defaultHostSelector = Object(_Layer_notification__WEBPACK_IMPORTED_MODULE_5__["getDefaultTarget"])();
            return defaultHostSelector ? doc.querySelector(defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var _onFilterEvent = function (ev) {
    // We should just be able to check ev.bubble here and only stop events that are bubbling up. However, even though mouseenter and
    //    mouseleave do NOT bubble up, they are showing up as bubbling. Therefore we stop events based on event name rather than ev.bubble.
    if (ev.eventPhase === Event.BUBBLING_PHASE && ev.type !== 'mouseenter' && ev.type !== 'mouseleave') {
        ev.stopPropagation();
    }
};
var _filteredEventProps;
function _getFilteredEvents() {
    if (!_filteredEventProps) {
        _filteredEventProps = {};
        [
            'onClick',
            'onContextMenu',
            'onDoubleClick',
            'onDrag',
            'onDragEnd',
            'onDragEnter',
            'onDragExit',
            'onDragLeave',
            'onDragOver',
            'onDragStart',
            'onDrop',
            'onMouseDown',
            'onMouseEnter',
            'onMouseLeave',
            'onMouseMove',
            'onMouseOver',
            'onMouseOut',
            'onMouseUp',
            'onKeyDown',
            'onKeyPress',
            'onKeyUp',
            'onFocus',
            'onBlur',
            'onChange',
            'onInput',
            'onInvalid',
            'onSubmit'
        ].forEach(function (name) { return (_filteredEventProps[name] = _onFilterEvent); });
    }
    return _filteredEventProps;
}
//# sourceMappingURL=Layer.base.js.map

/***/ }),

/***/ "NV5/":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/getColorFromString.js ***!
  \********************************************************************************************************************************/
/*! exports provided: getColorFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorFromString", function() { return getColorFromString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _cssColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssColor */ "iZYe");
/* harmony import */ var _getColorFromRGBA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getColorFromRGBA */ "BB33");



/**
 * Converts a CSS color string to a color object.
 * Note that hex colors *must* be prefixed with # to be considered valid.
 *
 * `inputColor` will be used unmodified as the `str` property of the returned object.
 * Alpha defaults to 100 if not specified in `inputColor`.
 * Returns undefined if the color string is invalid/not recognized.
 */
function getColorFromString(inputColor) {
    var color = Object(_cssColor__WEBPACK_IMPORTED_MODULE_1__["cssColor"])(inputColor);
    if (!color) {
        return;
    }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_getColorFromRGBA__WEBPACK_IMPORTED_MODULE_2__["getColorFromRGBA"])(color), { str: inputColor });
}
//# sourceMappingURL=getColorFromString.js.map

/***/ }),

/***/ "PS37":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js ***!
  \***************************************************************************************************************************/
/*! exports provided: sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return sequencesToID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return mergeOverflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return ktpTargetFromSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return ktpTargetFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return getAriaDescribedBy; });
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipConstants */ "pDCd");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");


/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"] + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"]);
    }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_PREFIX"]);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = overflowKeySequences.slice().pop();
    var newKeySequences = keySequences.slice();
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["addElementAtIndex"])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns {string} String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"] + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns {string} String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"] + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_LAYER_ID"];
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}
//# sourceMappingURL=KeytipUtils.js.map

/***/ }),

/***/ "PSe/":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/_rgbaOrHexString.js ***!
  \******************************************************************************************************************************/
/*! exports provided: _rgbaOrHexString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_rgbaOrHexString", function() { return _rgbaOrHexString; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");

/**
 * @internal
 * Get a CSS color string from some color components.
 * If `a` is specified and not 100, returns an `rgba()` string.
 * Otherwise returns `hex` prefixed with #.
 */
function _rgbaOrHexString(r, g, b, a, hex) {
    return a === _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"] || typeof a !== 'number' ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + a / _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"] + ")";
}
//# sourceMappingURL=_rgbaOrHexString.js.map

/***/ }),

/***/ "PX0R":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/updateSV.js ***!
  \**********************************************************************************************************************/
/*! exports provided: updateSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSV", function() { return updateSV; });
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");
/* harmony import */ var _rgbaOrHexString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_rgbaOrHexString */ "PSe/");



/**
 * Gets a color with the same hue as `color` and other components updated to match the given
 * saturation and value.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
function updateSV(color, s, v) {
    var _a = Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_0__["hsv2rgb"])(color.h, s, v), r = _a.r, g = _a.g, b = _a.b;
    var hex = Object(_rgb2hex__WEBPACK_IMPORTED_MODULE_1__["rgb2hex"])(r, g, b);
    return {
        a: color.a,
        b: b,
        g: g,
        h: color.h,
        hex: hex,
        r: r,
        s: s,
        str: Object(_rgbaOrHexString__WEBPACK_IMPORTED_MODULE_2__["_rgbaOrHexString"])(r, g, b, color.a, hex),
        v: v
    };
}
//# sourceMappingURL=updateSV.js.map

/***/ }),

/***/ "QUsa":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorRectangle/ColorRectangle.styles.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");

var getStyles = function (props) {
    var className = props.className;
    return {
        root: [
            'ms-ColorPicker-colorRect',
            {
                position: 'relative',
                marginBottom: 10,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        MsHighContrastAdjust: 'none'
                    },
                    _a)
            },
            className
        ],
        light: [
            'ms-ColorPicker-light',
            {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'linear-gradient(to right, white 0%, transparent 100%)'
            }
        ],
        dark: [
            'ms-ColorPicker-dark',
            {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0, #000 100%)'
            }
        ],
        thumb: [
            'ms-ColorPicker-thumb',
            {
                position: 'absolute',
                width: 20,
                height: 20,
                background: 'white',
                border: '1px solid rgba(255,255,255,.8)',
                borderRadius: '50%',
                boxShadow: '0 0 15px -5px black',
                transform: 'translate(-50%, -50%)'
            }
        ]
    };
    var _a;
};
//# sourceMappingURL=ColorRectangle.styles.js.map

/***/ }),

/***/ "QpUN":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/FocusTrapCallout.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: FocusTrapCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return FocusTrapCallout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Callout */ "zLl/");
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FocusTrapZone */ "Glho");




/**
 * A special Callout that uses FocusTrapZone to trap focus
 * @param props - Props for the component
 */
var FocusTrapCallout = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_2__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone__WEBPACK_IMPORTED_MODULE_3__["FocusTrapZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ disabled: props.hidden }, props.focusTrapProps), props.children)));
};
//# sourceMappingURL=FocusTrapCallout.js.map

/***/ }),

/***/ "RnIT":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "zKx7");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _IconButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconButton.styles */ "IaJs");





/**
 * {@docCategory Button}
 */
var IconButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--icon", styles: Object(_IconButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderText: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"], onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    IconButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('IconButton', ['theme', 'styles'], true)
    ], IconButton);
    return IconButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=IconButton.js.map

/***/ }),

/***/ "SPjM":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/clamp.js ***!
  \*******************************************************************************************************************/
/*! exports provided: clamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/** Clamp a value to ensure it falls within a given range. */
function clamp(value, max, min) {
    if (min === void 0) { min = 0; }
    return value < min ? min : value > max ? max : value;
}
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "SYcA":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/rgb2hex.js ***!
  \*********************************************************************************************************************/
/*! exports provided: rgb2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return rgb2hex; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clamp */ "SPjM");


/** Converts RGB components to a hex color string (without # prefix). */
function rgb2hex(r, g, b) {
    return [_rgbToPaddedHex(r), _rgbToPaddedHex(g), _rgbToPaddedHex(b)].join('');
}
/** Converts an RGB component to a 0-padded hex component of length 2. */
function _rgbToPaddedHex(num) {
    num = Object(_clamp__WEBPACK_IMPORTED_MODULE_1__["clamp"])(num, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_RGB"]);
    var hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
//# sourceMappingURL=rgb2hex.js.map

/***/ }),

/***/ "SkZD":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: MessageBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return MessageBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "W0Zu");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageBarButton.styles */ "d/LW");





/**
 * {@docCategory MessageBar}
 */
var MessageBarButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageBarButton, _super);
    function MessageBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { styles: Object(_MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] }));
    };
    MessageBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('MessageBarButton', ['theme', 'styles'], true)
    ], MessageBarButton);
    return MessageBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=MessageBarButton.js.map

/***/ }),

/***/ "UDac":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusTrapZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusTrapZone */ "tmP0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return _FocusTrapZone__WEBPACK_IMPORTED_MODULE_0__["FocusTrapZone"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UhdI":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "W0Zu");




/**
 * {@docCategory Button}
 */
var PrimaryButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { primary: true, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_2__["nullRender"] }));
    };
    PrimaryButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('PrimaryButton', ['theme', 'styles'], true)
    ], PrimaryButton);
    return PrimaryButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=PrimaryButton.js.map

/***/ }),

/***/ "VK3g":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/positioning.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, positionCard, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning/index */ "k9Zi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Position"]; });


//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "W0Zu":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DefaultButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return DefaultButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "zKx7");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton.styles */ "YYC1");





/**
 * {@docCategory Button}
 */
var DefaultButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: Object(_DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    DefaultButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('DefaultButton', ['theme', 'styles'], true)
    ], DefaultButton);
    return DefaultButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=DefaultButton.js.map

/***/ }),

/***/ "WGa6":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "G64Q");


var GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open'
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors;
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            classNames.isopen,
            {
                backgroundColor: semanticColors.bodyBackground,
                minWidth: '180px'
            },
            className
        ],
        container: [
            classNames.container,
            {
                selectors: {
                    ':focus': { outline: 0 }
                }
            }
        ],
        list: [
            classNames.list,
            classNames.isopen,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0'
            }
        ],
        header: [
            classNames.header,
            fonts.small,
            {
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["CONTEXTUAL_MENU_ITEM_HEIGHT"],
                lineHeight: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["CONTEXTUAL_MENU_ITEM_HEIGHT"],
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left'
            }
        ],
        title: [
            classNames.title,
            {
                fontSize: '16px',
                paddingRight: '14px',
                paddingLeft: '14px',
                paddingBottom: '5px',
                paddingTop: '5px',
                backgroundColor: palette.neutralLight
            }
        ],
        subComponentStyles: { callout: {}, menuItem: {} }
    };
};
//# sourceMappingURL=ContextualMenu.styles.js.map

/***/ }),

/***/ "WRwi":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return ContextualMenuAnchor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "oUON");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "ASEy");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "cRpF");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "qQHi");







var ContextualMenuAnchor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuAnchor, _super);
    function ContextualMenuAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._getSubmenuTarget = function () {
            return _this._anchor.current ? _this._anchor.current : undefined;
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
            if (onItemClick) {
                onItemClick(item, ev);
            }
        };
        return _this;
    }
    ContextualMenuAnchor.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var anchorRel = item.rel;
        if (item.target && item.target.toLowerCase() === '_blank') {
            anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
        }
        var subMenuId = this._getSubMenuId(item);
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["anchorProperties"]);
        var disabled = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item);
        var itemProps = item.itemProps;
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: item.keytipProps, ariaDescribedBy: nativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined, "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item), style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onMouseMove: _this._onItemMouseMove, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); })));
    };
    return ContextualMenuAnchor;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]));

//# sourceMappingURL=ContextualMenuAnchor.js.map

/***/ }),

/***/ "X6uu":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js ***!
  \********************************************************************************************************************/
/*! exports provided: DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return DirectionalHint; });
var DirectionalHint = {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    topLeftEdge: 0,
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    topCenter: 1,
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    topRightEdge: 2,
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    topAutoEdge: 3,
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    bottomLeftEdge: 4,
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    bottomCenter: 5,
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    bottomRightEdge: 6,
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    bottomAutoEdge: 7,
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    leftTopEdge: 8,
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    leftCenter: 9,
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    leftBottomEdge: 10,
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    rightTopEdge: 11,
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    rightCenter: 12,
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    rightBottomEdge: 13
};
//# sourceMappingURL=DirectionalHint.js.map

/***/ }),

/***/ "XHtT":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette;
    return {
        container: [
            classNames.container,
            {
                position: 'relative'
            }
        ],
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: palette.neutralLight,
                boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText'
                    },
                    _a)
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth }
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: palette.white,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)'
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: palette.white
            }
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: palette.white,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative'
            },
            overflowYHidden && {
                overflowY: 'hidden'
            },
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ]
    };
    var _a;
};
//# sourceMappingURL=CalloutContent.styles.js.map

/***/ }),

/***/ "XZgV":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js ***!
  \************************************************************************************************************************************/
/*! exports provided: CalloutContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContentBase", function() { return CalloutContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/positioning */ "VK3g");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Popup */ "LkE5");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Styling */ "Gc2k");








var ANIMATIONS = (_a = {},
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].top] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideUpIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].bottom] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideDownIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].left] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideLeftIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["RectangleEdge"].right] = _Styling__WEBPACK_IMPORTED_MODULE_6__["AnimationClassNames"].slideRightIn10,
    _a);
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["classNamesFunction"])({
    disableCaching: true
});
var BORDER_WIDTH = 1;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
// role and role description go hand-in-hand. Both would be included by spreading getNativeProps for a basic element
// This constant array can be used to filter these out of native props spread on callout root and apply them together on
// calloutMain (the Popup component within the callout)
var ARIA_ROLE_ATTRIBUTES = ['role', 'aria-roledescription'];
var CalloutContentBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalloutContentBase, _super);
    function CalloutContentBase(props) {
        var _this = _super.call(this, props) || this;
        _this._hostElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._calloutElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._hasListeners = false;
        _this._disposables = [];
        _this.dismiss = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
        };
        _this._dismissOnScroll = function (ev) {
            var preventDismissOnScroll = _this.props.preventDismissOnScroll;
            if (_this.state.positions && !preventDismissOnScroll) {
                _this._dismissOnClickOrScroll(ev);
            }
        };
        _this._dismissOnResize = function (ev) {
            var preventDismissOnResize = _this.props.preventDismissOnResize;
            if (!preventDismissOnResize) {
                _this.dismiss(ev);
            }
        };
        _this._dismissOnLostFocus = function (ev) {
            var preventDismissOnLostFocus = _this.props.preventDismissOnLostFocus;
            if (!preventDismissOnLostFocus) {
                _this._dismissOnClickOrScroll(ev);
            }
        };
        _this._setInitialFocus = function () {
            if (_this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions && _this._calloutElement.current) {
                _this._didSetInitialFocus = true;
                _this._async.requestAnimationFrame(function () { return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["focusFirstChild"])(_this._calloutElement.current); }, _this._calloutElement.current);
            }
        };
        _this._onComponentDidMount = function () {
            _this._addListeners();
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_3__["Async"](_this);
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            // @TODO it looks like this is not even being used anymore.
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContentBase.prototype.componentDidUpdate = function () {
        if (!this.props.hidden) {
            this._setInitialFocus();
            if (!this._hasListeners) {
                this._addListeners();
            }
            this._updateAsyncPosition();
        }
        else {
            if (this._hasListeners) {
                this._removeListeners();
            }
        }
    };
    CalloutContentBase.prototype.shouldComponentUpdate = function (newProps, newState) {
        if (this.props.hidden && newProps.hidden) {
            // Do not update when hidden.
            return false;
        }
        return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(this.props, newProps) || !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(this.state, newState);
    };
    CalloutContentBase.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContentBase.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._disposables.forEach(function (dispose) { return dispose(); });
    };
    CalloutContentBase.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we
        // do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if ((newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) && !this._blockResetHeight) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
        // Ensure positioning is recalculated when we are about to show a persisted menu.
        if (!newProps.hidden && newProps.hidden !== this.props.hidden) {
            this._maxHeight = undefined;
            // Target might have been updated while hidden.
            this._setTargetWindowAndElement(newTarget);
            this.setState({
                positions: undefined
            });
            this._didSetInitialFocus = false;
            this._bounds = undefined;
        }
        this._blockResetHeight = false;
    };
    CalloutContentBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onComponentDidMount();
        }
    };
    CalloutContentBase.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var target = this.props.target;
        var _a = this.props, styles = _a.styles, style = _a.style, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth, finalHeight = _a.finalHeight, _b = _a.hideOverflow, hideOverflow = _b === void 0 ? !!finalHeight : _b, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll, _c = _a.shouldRestoreFocus, shouldRestoreFocus = _c === void 0 ? true : _c;
        target = this._getTarget();
        var positions = this.state.positions;
        var getContentMaxHeight = this._getMaxHeight() ? this._getMaxHeight() + this.state.heightOffset : undefined;
        var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight ? calloutMaxHeight : getContentMaxHeight;
        var overflowYHidden = hideOverflow;
        var beakVisible = isBeakVisible && !!target;
        this._classNames = getClassNames(styles, {
            theme: this.props.theme,
            className: className,
            overflowYHidden: overflowYHidden,
            calloutWidth: calloutWidth,
            positions: positions,
            beakWidth: beakWidth,
            backgroundColor: backgroundColor,
            calloutMaxWidth: calloutMaxWidth
        });
        var overflowStyle = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, style, { maxHeight: contentMaxHeight }, (overflowYHidden && { overflowY: 'hidden' }));
        var visibilityStyle = this.props.hidden ? { visibility: 'hidden' } : undefined;
        // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
        var content = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._hostElement, className: this._classNames.container, style: visibilityStyle },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["divProperties"], ARIA_ROLE_ATTRIBUTES), { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._calloutElement }),
                beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.beak, style: this._getBeakPosition() }),
                beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.beakCurtain }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_5__["Popup"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, ARIA_ROLE_ATTRIBUTES), { ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: this._classNames.calloutMain, onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: shouldRestoreFocus, style: overflowStyle }), children))));
        return content;
    };
    CalloutContentBase.prototype._dismissOnClickOrScroll = function (ev) {
        var target = ev.target;
        var isEventTargetOutsideCallout = this._hostElement.current && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._hostElement.current, target);
        if ((!this._target && isEventTargetOutsideCallout) ||
            (ev.target !== this._targetWindow &&
                isEventTargetOutsideCallout &&
                (this._target.stopPropagation ||
                    (!this._target || (target !== this._target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._target, target)))))) {
            this.dismiss(ev);
        }
    };
    CalloutContentBase.prototype._addListeners = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._disposables.push(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow, 'scroll', _this._dismissOnScroll, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow, 'resize', _this._dismissOnResize, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["on"])(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true));
            _this._hasListeners = true;
        }, 0);
    };
    CalloutContentBase.prototype._removeListeners = function () {
        this._disposables.forEach(function (dispose) { return dispose(); });
        this._disposables = [];
        this._hasListeners = false;
    };
    CalloutContentBase.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); }, this._calloutElement.current);
    };
    CalloutContentBase.prototype._getBeakPosition = function () {
        var positions = this.state.positions;
        var beakPostionStyle = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
        if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
            beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
            beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakPostionStyle;
    };
    CalloutContentBase.prototype._updatePosition = function () {
        // Try to update the target, page might have changed
        this._setTargetWindowAndElement(this._getTarget());
        var positions = this.state.positions;
        var hostElement = this._hostElement.current;
        var calloutElement = this._calloutElement.current;
        // If we expect a target element to position against, we need to wait until `this._target` is resolved. Otherwise
        // we can try to position.
        var expectsTarget = !!this.props.target;
        if (hostElement && calloutElement && (!expectsTarget || this._target)) {
            var currentProps = void 0;
            currentProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["assign"])(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            // If there is a finalHeight given then we assume that the user knows and will handle
            // additional positioning adjustments so we should call positionCard
            var newPositions = this.props.finalHeight
                ? Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["positionCard"])(currentProps, hostElement, calloutElement, positions)
                : Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["positionCallout"])(currentProps, hostElement, calloutElement, positions);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else if (this._positionAttempts > 0) {
                // Only call the onPositioned callback if the callout has been re-positioned at least once.
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned(this.state.positions);
                }
            }
        }
    };
    CalloutContentBase.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    // Max height should remain as synchronous as possible, which is why it is not done using set state.
    // It needs to be synchronous since it will impact the ultimate position of the callout.
    CalloutContentBase.prototype._getMaxHeight = function () {
        var _this = this;
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                // overlap with the target.
                var totalGap_1 = gapSpace + beakWidth + BORDER_WIDTH * 2;
                this._async.requestAnimationFrame(function () {
                    if (_this._target) {
                        _this._maxHeight = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_4__["getMaxHeight"])(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
                        _this._blockResetHeight = true;
                        _this.forceUpdate();
                    }
                }, this._target);
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
        return (this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
    };
    CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
        var currentElement = this._calloutElement.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])(currentElement);
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(currentElement);
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(target.toElement);
                this._target = target;
            }
            else if (target.getBoundingClientRect) {
                var targetElement = target;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(targetElement);
                this._target = target;
                // HTMLImgElements can have x and y values. The check for it being a point must go last.
            }
            else {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(currentElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])(currentElement);
        }
    };
    CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement.current && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;
                if (!calloutMainElem) {
                    return;
                }
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer, _this._calloutElement.current);
                }
            }, this._calloutElement.current);
        }
    };
    CalloutContentBase.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    CalloutContentBase.defaultProps = {
        preventDismissOnLostFocus: false,
        preventDismissOnScroll: false,
        preventDismissOnResize: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].bottomAutoEdge
    };
    return CalloutContentBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var _a;
//# sourceMappingURL=CalloutContent.base.js.map

/***/ }),

/***/ "YYC1":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "aWrN");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "hlEU");





var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT
        },
        label: {
            fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, defaultButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), splitButtonStyles, customStyles);
});
//# sourceMappingURL=DefaultButton.styles.js.map

/***/ }),

/***/ "Yql+":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/updateH.js ***!
  \*********************************************************************************************************************/
/*! exports provided: updateH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateH", function() { return updateH; });
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");
/* harmony import */ var _rgbaOrHexString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_rgbaOrHexString */ "PSe/");



/**
 * Gets a color with the same saturation and value as `color` and the other components updated
 * to match the given hue.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
function updateH(color, h) {
    var _a = Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_0__["hsv2rgb"])(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
    var hex = Object(_rgb2hex__WEBPACK_IMPORTED_MODULE_1__["rgb2hex"])(r, g, b);
    return {
        a: color.a,
        b: b,
        g: g,
        h: h,
        hex: hex,
        r: r,
        s: color.s,
        str: Object(_rgbaOrHexString__WEBPACK_IMPORTED_MODULE_2__["_rgbaOrHexString"])(r, g, b, color.a, hex),
        v: color.v
    };
}
//# sourceMappingURL=updateH.js.map

/***/ }),

/***/ "aWrN":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");


var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none'
    };
    var splitButtonDivider = {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8
    };
    var splitButtonDividerDisabled = {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8,
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                backgroundColor: 'GrayText'
            },
            _a)
    };
    var splitButtonStyles = {
        splitButtonContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, { highContrastStyle: buttonHighContrastFocus }),
            {
                display: 'inline-flex',
                selectors: {
                    '.ms-Button--default, .ms-Button--primary': {
                        borderRight: 'none'
                    }
                }
            }
        ],
        splitButtonContainerFocused: {
            outline: 'none!important'
        },
        splitButtonMenuButton: {
            padding: 6,
            height: 'auto',
            boxSizing: 'border-box',
            border: 0,
            borderRadius: 0,
            outline: 'transparent',
            userSelect: 'none',
            display: 'inline-block',
            textDecoration: 'none',
            textAlign: 'center',
            cursor: 'pointer',
            verticalAlign: 'top',
            width: 32,
            marginLeft: -1,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: "1px solid white",
                    borderLeft: 'none'
                },
                _b)
        },
        splitButtonDivider: splitButtonDivider,
        splitButtonDividerDisabled: splitButtonDividerDisabled,
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: (_c = {
                    ':hover': {
                        cursor: 'default'
                    }
                },
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: "1px solid GrayText",
                    color: 'GrayText',
                    backgroundColor: 'Window'
                },
                _c)
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        splitButtonContainerDisabled: {
            outline: 'none',
            border: 'none'
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(splitButtonStyles, customStyles);
    var _a, _b, _c;
});
//# sourceMappingURL=SplitButton.styles.js.map

/***/ }),

/***/ "bAjc":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "aWrN");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "hlEU");





var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ]
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        descriptionHovered: {
            color: theme.palette.white,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit',
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'inherit'
                },
                _c)
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, compoundButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    var _a, _b, _c;
});
//# sourceMappingURL=CompoundButton.styles.js.map

/***/ }),

/***/ "bJL8":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js ***!
  \******************************************************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return KeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/keytips/KeytipManager */ "J67R");
/* harmony import */ var _utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/keytips/KeytipUtils */ "PS37");





/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KeytipData, _super);
    function KeytipData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keytipManager = _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_3__["KeytipManager"].getInstance();
        return _this;
    }
    KeytipData.prototype.componentDidMount = function () {
        // Register Keytip in KeytipManager
        if (this.props.keytipProps) {
            this._uniqueId = this._keytipManager.register(this._getKtpProps());
        }
    };
    KeytipData.prototype.componentWillUnmount = function () {
        // Unregister Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.componentDidUpdate = function () {
        // Update Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.render = function () {
        var _a = this.props, children = _a.children, keytipProps = _a.keytipProps, ariaDescribedBy = _a.ariaDescribedBy;
        var nativeKeytipProps = {};
        if (keytipProps) {
            nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
        }
        return children(nativeKeytipProps);
    };
    KeytipData.prototype._getKtpProps = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ disabled: this.props.disabled }, this.props.keytipProps);
    };
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps - props for Keytip
     * @param describedByPrepend - ariaDescribedBy value to prepend
     */
    KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
        if (keytipProps) {
            // Add the parent overflow sequence if necessary
            var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps);
            // Construct aria-describedby and data-ktp-id attributes and return
            var ariaDescribedBy = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["getAriaDescribedBy"])(newKeytipProps.keySequences);
            var keySequences = newKeytipProps.keySequences.slice();
            if (newKeytipProps.overflowSetSequence) {
                keySequences = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["mergeOverflows"])(keySequences, newKeytipProps.overflowSetSequence);
            }
            var ktpId = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_4__["sequencesToID"])(keySequences);
            return {
                'aria-describedby': Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(describedByPrepend, ariaDescribedBy),
                'data-ktp-target': ktpId,
                'data-ktp-execute-target': ktpId
            };
        }
        return undefined;
    };
    return KeytipData;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=KeytipData.js.map

/***/ }),

/***/ "cLFc":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorRectangle/ColorRectangle.base.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ColorRectangleBase, _getNewColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRectangleBase", function() { return ColorRectangleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getNewColor", function() { return _getNewColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/color/consts */ "6QFK");
/* harmony import */ var _utilities_color_getFullColorString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/color/getFullColorString */ "kxY9");
/* harmony import */ var _utilities_color_updateSV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/color/updateSV */ "PX0R");
/* harmony import */ var _utilities_color_clamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/color/clamp */ "SPjM");







var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
/**
 * {@docCategory ColorPicker}
 */
var ColorRectangleBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ColorRectangleBase, _super);
    function ColorRectangleBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onMouseDown = function (ev) {
            _this._events.on(window, 'mousemove', _this._onMouseMove, true);
            _this._events.on(window, 'mouseup', _this._disableEvents, true);
            _this._onMouseMove(ev);
        };
        _this._onMouseMove = function (ev) {
            var _a = _this.props, color = _a.color, onSVChanged = _a.onSVChanged, onChange = _a.onChange;
            if (!_this._root.current) {
                return;
            }
            // If the primary button (1) isn't pressed, the user is no longer dragging, so turn off the
            // event handlers and exit. (this may only be relevant while debugging)
            // tslint:disable-next-line:no-bitwise
            if (!(ev.buttons & 1)) {
                _this._disableEvents();
                return;
            }
            var newColor = _getNewColor(ev, color, _this._root.current);
            if (newColor) {
                _this.setState({
                    color: newColor
                });
                if (onChange) {
                    onChange(ev, newColor);
                }
                if (onSVChanged) {
                    onSVChanged(newColor.s, newColor.v);
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._disableEvents = function () {
            _this._events.off();
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_this);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('ColorRectangle', props, {
            onSVChanged: 'onChange'
        });
        var color = _this.props.color;
        _this.state = {
            color: color
        };
        return _this;
    }
    Object.defineProperty(ColorRectangleBase.prototype, "color", {
        get: function () {
            return this.state.color;
        },
        enumerable: true,
        configurable: true
    });
    ColorRectangleBase.prototype.componentWillReceiveProps = function (newProps) {
        var color = newProps.color;
        this.setState({
            color: color
        });
    };
    ColorRectangleBase.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    ColorRectangleBase.prototype.render = function () {
        var _a = this.props, minSize = _a.minSize, theme = _a.theme, className = _a.className, styles = _a.styles;
        var color = this.state.color;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._root, className: classNames.root, style: { minWidth: minSize, minHeight: minSize, backgroundColor: Object(_utilities_color_getFullColorString__WEBPACK_IMPORTED_MODULE_4__["getFullColorString"])(color) }, onMouseDown: this._onMouseDown },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.light }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.dark }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.thumb, style: { left: color.s + '%', top: _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_VALUE"] - color.v + '%', backgroundColor: color.str } })));
    };
    ColorRectangleBase.defaultProps = {
        minSize: 220
    };
    return ColorRectangleBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Exported for testing only.
 * @internal
 */
function _getNewColor(ev, prevColor, root) {
    var rectSize = root.getBoundingClientRect();
    var sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
    var vPercentage = (ev.clientY - rectSize.top) / rectSize.height;
    return Object(_utilities_color_updateSV__WEBPACK_IMPORTED_MODULE_5__["updateSV"])(prevColor, Object(_utilities_color_clamp__WEBPACK_IMPORTED_MODULE_6__["clamp"])(sPercentage * _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_SATURATION"], _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_SATURATION"]), Object(_utilities_color_clamp__WEBPACK_IMPORTED_MODULE_6__["clamp"])(_utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_VALUE"] - vPercentage * _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_VALUE"], _utilities_color_consts__WEBPACK_IMPORTED_MODULE_3__["MAX_COLOR_VALUE"]));
}
//# sourceMappingURL=ColorRectangle.base.js.map

/***/ }),

/***/ "cRpF":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextualMenuUtility */ "4wCw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["getIsChecked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["hasSubmenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["isItemDisabled"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "d/LW":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "ME9p");



var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var messageBarButtonStyles = {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, {
                inset: 1,
                highContrastStyle: {
                    outlineOffset: '-4px',
                    outlineColor: 'ActiveBorder'
                },
                borderColor: 'transparent'
            }),
            {
                backgroundColor: theme.palette.neutralQuaternaryAlt,
                color: theme.palette.neutralPrimary
            }
        ],
        rootHovered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralTertiary,
            color: theme.palette.neutralDark
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, messageBarButtonStyles, customStyles);
});
//# sourceMappingURL=MessageBarButton.styles.js.map

/***/ }),

/***/ "dvb8":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return ContextualMenuItemBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "cRpF");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "uUJR");





var renderItemIcon = function (props) {
    var item = props.item, hasIcons = props.hasIcons, classNames = props.classNames;
    var iconProps = item.iconProps;
    if (!hasIcons) {
        return null;
    }
    if (item.onRenderIcon) {
        return item.onRenderIcon(props);
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconProps, { className: classNames.icon }));
};
var renderCheckMarkIcon = function (_a) {
    var onCheckmarkClick = _a.onCheckmarkClick, item = _a.item, classNames = _a.classNames;
    var isItemChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["getIsChecked"])(item);
    if (onCheckmarkClick) {
        // Ensures that the item is passed as the first argument to the checkmark click callback.
        var onClick = function (e) { return onCheckmarkClick(item, e); };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { iconName: isItemChecked ? 'CheckMark' : '', className: classNames.checkmarkIcon, onClick: onClick });
    }
    return null;
};
var renderItemName = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.text || item.name) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.label }, item.text || item.name);
    }
    return null;
};
var renderSecondaryText = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.secondaryText) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.secondaryText }, item.secondaryText);
    }
    return null;
};
var renderSubMenuIcon = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item)) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ iconName: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon }));
    }
    return null;
};
var ContextualMenuItemBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemBase, _super);
    function ContextualMenuItemBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openSubMenu = function () {
            var _a = _this.props, item = _a.item, openSubMenu = _a.openSubMenu, getSubmenuTarget = _a.getSubmenuTarget;
            if (getSubmenuTarget) {
                var submenuTarget = getSubmenuTarget();
                if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && openSubMenu && submenuTarget) {
                    openSubMenu(item, submenuTarget);
                }
            }
        };
        _this.dismissSubMenu = function () {
            var _a = _this.props, item = _a.item, dismissSubMenu = _a.dismissSubMenu;
            if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && dismissSubMenu) {
                dismissSubMenu();
            }
        };
        _this.dismissMenu = function (dismissAll) {
            var dismissMenu = _this.props.dismissMenu;
            if (dismissMenu) {
                dismissMenu(undefined /* ev */, dismissAll);
            }
        };
        return _this;
    }
    ContextualMenuItemBase.prototype.render = function () {
        var _a = this.props, item = _a.item, classNames = _a.classNames;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent },
            renderCheckMarkIcon(this.props),
            renderItemIcon(this.props),
            renderItemName(this.props),
            renderSecondaryText(this.props),
            renderSubMenuIcon(this.props)));
    };
    return ContextualMenuItemBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=ContextualMenuItem.base.js.map

/***/ }),

/***/ "gCc8":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton */ "zKx7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _BaseButton__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.types */ "8Hty");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "0Xhg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "wXwR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__["ActionButton"]; });

/* harmony import */ var _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton/CommandBarButton */ "94wZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__["CommandBarButton"]; });

/* harmony import */ var _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommandButton/CommandButton */ "1xxT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__["CommandButton"]; });

/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "A9FN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"]; });

/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "W0Zu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__["DefaultButton"]; });

/* harmony import */ var _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageBarButton/MessageBarButton */ "SkZD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__["MessageBarButton"]; });

/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "UhdI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"]; });

/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconButton/IconButton */ "RnIT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__["IconButton"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "h2Qe":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorSlider/ColorSlider.styles.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var theme = props.theme, className = props.className;
    var palette = theme.palette;
    return {
        root: [
            'ms-ColorPicker-slider',
            {
                position: 'relative',
                height: 20,
                marginBottom: 5,
                border: "1px solid " + palette.neutralLight,
                boxSizing: 'border-box'
            },
            className
        ],
        sliderOverlay: [
            'ms-ColorPicker-sliderOverlay',
            {
                content: '',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        ],
        sliderThumb: [
            'ms-ColorPicker-thumb',
            'is-slider',
            {
                position: 'absolute',
                width: 20,
                height: 20,
                background: 'white',
                border: '1px solid rgba(255,255,255,.8)',
                borderRadius: '50%',
                boxShadow: '0 0 15px -5px black',
                transform: 'translate(-50%, -50%)',
                top: '50%'
            }
        ]
    };
};
//# sourceMappingURL=ColorSlider.styles.js.map

/***/ }),

/***/ "hlEU":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js ***!
  \****************************************************************************************************************************/
/*! exports provided: standardStyles, primaryStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardStyles", function() { return standardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryStyles", function() { return primaryStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

function standardStyles(theme) {
    var s = theme.semanticColors;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundChecked = s.buttonBackgroundChecked;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootChecked: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: buttonTextCheckedHovered
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _b)
        },
        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _c)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8,
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'WindowText'
                },
                _d)
        },
        splitButtonDividerDisabled: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c, _d;
}
function primaryStyles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDarkAlt,
            color: theme.palette.white,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _c)
        },
        rootExpanded: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootDisabled: {
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window'
                },
                _d)
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _e)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.white,
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8,
            selectors: (_f = {},
                _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'Window'
                },
                _f)
        },
        splitButtonDividerDisabled: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: (_g = {},
                _g[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    backgroundColor: 'WindowText'
                },
                _g[':hover'] = {
                    backgroundColor: theme.palette.themeDark,
                    selectors: (_h = {},
                        _h[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _h)
                },
                _g)
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuIcon: {
            color: theme.palette.white
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
}
//# sourceMappingURL=ButtonThemes.js.map

/***/ }),

/***/ "iZYe":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/cssColor.js ***!
  \**********************************************************************************************************************/
/*! exports provided: cssColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssColor", function() { return cssColor; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _hsl2rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsl2rgb */ "lO5p");


/**
 * Converts a valid CSS color string to an RGB color.
 * Note that hex colors *must* be prefixed with # to be considered valid.
 * Alpha in returned color defaults to 100.
 * Four and eight digit hex values (with alpha) are supported if the current browser supports them.
 */
function cssColor(color) {
    if (!color) {
        return undefined;
    }
    // Need to check the following valid color formats: RGB(A), HSL(A), hex, named color
    // First check for well formatted RGB(A), HSL(A), and hex formats at the start.
    // This is for perf (no creating an element) and catches the intentional "transparent" color
    //   case early on.
    var easyColor = _rgba(color) || _hex6(color) || _hex3(color) || _hsla(color);
    if (easyColor) {
        return easyColor;
    }
    // if the above fails, do the more expensive catch-all
    return _browserCompute(color);
}
/**
 * Uses the browser's getComputedStyle() to determine what the passed-in color is.
 * This assumes _rgba, _hex6, _hex3, and _hsla have already been tried and all failed.
 * This works by attaching an element to the DOM, which may fail in server-side rendering
 *   or with headless browsers.
 */
function _browserCompute(str) {
    if (typeof document === 'undefined') {
        // don't throw an error when used server-side
        return undefined;
    }
    var elem = document.createElement('div');
    elem.style.backgroundColor = str;
    // This element must be attached to the DOM for getComputedStyle() to have a value
    elem.style.position = 'absolute';
    elem.style.top = '-9999px';
    elem.style.left = '-9999px';
    elem.style.height = '1px';
    elem.style.width = '1px';
    document.body.appendChild(elem);
    var eComputedStyle = getComputedStyle(elem);
    var computedColor = eComputedStyle && eComputedStyle.backgroundColor;
    document.body.removeChild(elem);
    // computedColor is always an RGB(A) string, except for invalid colors in IE/Edge which return 'transparent'
    // browsers return one of these if the color string is invalid,
    // so need to differentiate between an actual error and intentionally passing in this color
    if (computedColor === 'rgba(0, 0, 0, 0)' || computedColor === 'transparent') {
        switch (str.trim()) {
            // RGB and HSL were already checked at the start of the function
            case 'transparent':
            case '#0000':
            case '#00000000':
                return { r: 0, g: 0, b: 0, a: 0 };
        }
        return undefined;
    }
    return _rgba(computedColor);
}
/**
 * If `str` is in valid `rgb()` or `rgba()` format, returns an RGB color (alpha defaults to 100).
 * Otherwise returns undefined.
 */
function _rgba(str) {
    if (!str) {
        return undefined;
    }
    var match = str.match(/^rgb(a?)\(([\d., ]+)\)$/);
    if (match) {
        var hasAlpha = !!match[1];
        var expectedPartCount = hasAlpha ? 4 : 3;
        var parts = match[2].split(/ *, */).map(Number);
        if (parts.length === expectedPartCount) {
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: hasAlpha ? parts[3] * 100 : _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]
            };
        }
    }
}
/**
 * If `str` is in `hsl()` or `hsla()` format, returns an RGB color (alpha defaults to 100).
 * Otherwise returns undefined.
 */
function _hsla(str) {
    var match = str.match(/^hsl(a?)\(([\d., ]+)\)$/);
    if (match) {
        var hasAlpha = !!match[1];
        var expectedPartCount = hasAlpha ? 4 : 3;
        var parts = match[2].split(/ *, */).map(Number);
        if (parts.length === expectedPartCount) {
            var rgba = Object(_hsl2rgb__WEBPACK_IMPORTED_MODULE_1__["hsl2rgb"])(parts[0], parts[1], parts[2]);
            rgba.a = hasAlpha ? parts[3] * 100 : _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"];
            return rgba;
        }
    }
}
/**
 * If `str` is in valid 6-digit hex format *with* # prefix, returns an RGB color (with alpha 100).
 * Otherwise returns undefined.
 */
function _hex6(str) {
    if ('#' === str[0] && 7 === str.length && /^#[\da-fA-F]{6}$/.test(str)) {
        return {
            r: parseInt(str.slice(1, 3), 16),
            g: parseInt(str.slice(3, 5), 16),
            b: parseInt(str.slice(5, 7), 16),
            a: _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]
        };
    }
}
/**
 * If `str` is in valid 3-digit hex format *with* # prefix, returns an RGB color (with alpha 100).
 * Otherwise returns undefined.
 */
function _hex3(str) {
    if ('#' === str[0] && 4 === str.length && /^#[\da-fA-F]{3}$/.test(str)) {
        return {
            r: parseInt(str[1] + str[1], 16),
            g: parseInt(str[2] + str[2], 16),
            b: parseInt(str[3] + str[3], 16),
            a: _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_ALPHA"]
        };
    }
}
//# sourceMappingURL=cssColor.js.map

/***/ }),

/***/ "icO1":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ColorPicker/ColorSlider/ColorSlider.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: ColorSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSlider", function() { return ColorSlider; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ColorSlider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSlider.base */ "A6zI");
/* harmony import */ var _ColorSlider_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorSlider.styles */ "h2Qe");



var ColorSlider = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ColorSlider_base__WEBPACK_IMPORTED_MODULE_1__["ColorSliderBase"], _ColorSlider_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ColorSlider' });
//# sourceMappingURL=ColorSlider.js.map

/***/ }),

/***/ "iePh":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js ***!
  \********************************************************************************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "NUVe");
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.styles */ "5SYA");



var Layer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"], _Layer_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles']
});
//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ "jq/3":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: ContextualMenuSplitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return ContextualMenuSplitButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContextualMenuItem */ "qQHi");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContextualMenu.classNames */ "9D85");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../KeytipData */ "ASEy");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "cRpF");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Divider */ "pgS/");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "oUON");









var TouchIdleDelay = 500; /* ms */
var ContextualMenuSplitButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuSplitButton, _super);
    function ContextualMenuSplitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                _this._executeItemClick(ev);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._getSubmenuTarget = function () {
            return _this._splitButton;
        };
        _this._onItemMouseEnterPrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseEnterIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, _this._splitButton);
            }
        };
        _this._onItemMouseMovePrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseMoveIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, _this._splitButton);
            }
        };
        _this._onIconItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
            }
        };
        _this._executeItemClick = function (ev) {
            var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
            if (item.disabled || item.isDisabled) {
                return;
            }
            if (_this._processingTouch && onItemClick) {
                return onItemClick(item, ev);
            }
            if (executeItemClick) {
                executeItemClick(item, ev);
            }
        };
        _this._onTouchStart = function (ev) {
            if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                _this._handleTouchAndPointerEvent(ev);
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent(ev);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        return _this;
    }
    ContextualMenuSplitButton.prototype.componentDidMount = function () {
        if (this._splitButton && 'onpointerdown' in this._splitButton) {
            this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
        }
    };
    ContextualMenuSplitButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, onItemMouseLeave = _a.onItemMouseLeave, expandedMenuItemKey = _a.expandedMenuItemKey;
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item);
        var keytipProps = item.keytipProps;
        if (keytipProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_5__["KeytipData"], { keytipProps: keytipProps, disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: 'menuitem', "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(item.ariaDescription, keytipAttributes['aria-describedby']), "aria-checked": item.isChecked || item.checked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
            _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
            _this._renderSplitDivider(item),
            _this._renderSplitIconButton(item, classNames, index, keytipAttributes))); }));
    };
    ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b, onItemClick = _a.onItemClick;
        var itemProps = {
            key: item.key,
            disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item) || item.primaryDisabled,
            name: item.name,
            text: item.text || item.name,
            className: classNames.splitPrimary,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            iconProps: item.iconProps,
            'data-is-focusable': false,
            'aria-hidden': true
        };
        var itemComponentProps = item.itemProps;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"])),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
        var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__["getSplitButtonVerticalDividerClassNames"];
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Divider__WEBPACK_IMPORTED_MODULE_7__["VerticalDivider"], { getClassNames: getDividerClassNames });
    };
    ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, index, keytipAttributes) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var itemProps = {
            onClick: this._onIconItemClick,
            disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
            key: item.key
        };
        var buttonProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]), {
            onMouseEnter: this._onItemMouseEnterIcon,
            onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMoveIcon,
            'data-is-focusable': false,
            'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
            'aria-hidden': true
        });
        var itemComponentProps = item.itemProps;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
        var _this = this;
        var onTap = this.props.onTap;
        if (onTap) {
            onTap(ev);
        }
        // If we already have an existing timeout from a previous touch/pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    return ContextualMenuSplitButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__["ContextualMenuItemWrapper"]));

//# sourceMappingURL=ContextualMenuSplitButton.js.map

/***/ }),

/***/ "k9Zi":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, positionCard, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "o4q4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.types */ "mT13");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["Position"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kxY9":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/getFullColorString.js ***!
  \********************************************************************************************************************************/
/*! exports provided: getFullColorString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullColorString", function() { return getFullColorString; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");
/* harmony import */ var _hsv2hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsv2hex */ "uqLm");


/**
 * Converts a color hue to an HTML color string (with # prefix).
 * This implementation ignores all components of `color` except hue.
 */
function getFullColorString(color) {
    return "#" + Object(_hsv2hex__WEBPACK_IMPORTED_MODULE_1__["hsv2hex"])(color.h, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_SATURATION"], _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_COLOR_VALUE"]);
}
//# sourceMappingURL=getFullColorString.js.map

/***/ }),

/***/ "lB5j":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/ContextualMenu.js ***!
  \************************************************************************************************************/
/*! exports provided: ContextualMenu, getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase, DirectionalHint, ContextualMenuItemType, ContextualMenuItem, ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContextualMenu/index */ "2bYP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["getSubmenuItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["canAnyMenuItemsCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItemBase"]; });


//# sourceMappingURL=ContextualMenu.js.map

/***/ }),

/***/ "lO5p":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/hsl2rgb.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hsl2rgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return hsl2rgb; });
/* harmony import */ var _hsl2hsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hsl2hsv */ "tQgu");
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");


/** Converts HSL components to an RGB color. Does not set the alpha value. */
function hsl2rgb(h, s, l) {
    var hsv = Object(_hsl2hsv__WEBPACK_IMPORTED_MODULE_0__["hsl2hsv"])(h, s, l);
    return Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_1__["hsv2rgb"])(hsv.h, hsv.s, hsv.v);
}
//# sourceMappingURL=hsl2rgb.js.map

/***/ }),

/***/ "lOt9":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/correctHex.js ***!
  \************************************************************************************************************************/
/*! exports provided: correctHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctHex", function() { return correctHex; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "6QFK");

/**
 * Corrects a hex color to have length 3 or 6. Defaults to white if too short.
 * Does NOT check anything besides the length (such as valid characters) and does NOT handle
 * hex values starting with # sign.
 */
function correctHex(hex) {
    if (!hex || hex.length < _consts__WEBPACK_IMPORTED_MODULE_0__["MIN_HEX_LENGTH"]) {
        return 'ffffff'; // not a valid color--default to white
    }
    if (hex.length >= _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_HEX_LENGTH"]) {
        return hex.substring(0, _consts__WEBPACK_IMPORTED_MODULE_0__["MAX_HEX_LENGTH"]);
    }
    return hex.substring(0, _consts__WEBPACK_IMPORTED_MODULE_0__["MIN_HEX_LENGTH"]);
}
//# sourceMappingURL=correctHex.js.map

/***/ }),

/***/ "lnwm":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: ContextualMenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return ContextualMenuButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "oUON");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "ASEy");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "cRpF");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "qQHi");







var ContextualMenuButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var subMenuId = this._getSubMenuId(item);
        var isChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["getIsChecked"])(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
        var itemProps = item.itemProps, ariaLabel = item.ariaLabel;
        var buttonNativeProperties = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-checked': canCheck ? !!isChecked : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item),
            role: item.role || defaultRole,
            style: item.style
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, ariaDescribedBy: buttonNativeProperties['aria-describedby'], disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)))); }));
    };
    return ContextualMenuButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]));

//# sourceMappingURL=ContextualMenuButton.js.map

/***/ }),

/***/ "mT13":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return RectangleEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));
//# sourceMappingURL=positioning.types.js.map

/***/ }),

/***/ "o4q4":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, positionCard, getMaxHeight, getOppositeEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return __positioningTestPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return positionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return positionCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCard", function() { return positionCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return getMaxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return getOppositeEdge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positioning.types */ "mT13");




var Rectangle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["Rectangle"]));

function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].topAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].leftBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].rightBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom),
    _a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = new Array();
    if (rect.top < boundingRect.top) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top];
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.indexOf(currentEdge * -1) > -1) {
                currentEdge = currentEdge * -1;
            }
            else {
                currentAlignment = currentEdge;
                currentEdge = directions.slice(-1)[0];
            }
            currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: currentAlignment
    };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges into position,
 * when alignTargetEdge is specified.
 * @param elementEstimate
 * @param target
 * @param bounding
 * @param gap
 */
function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
    var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
    var oppositeEdge = alignmentEdge * -1;
    var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
    return {
        elementRectangle: newEstimate,
        targetEdge: targetEdge,
        alignmentEdge: oppositeEdge
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    if (alignTargetEdge) {
        // The edge opposite to the alignment edge might be out of bounds. Flip alignment to see if we can get it within bounds.
        if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
            var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
            if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                return flippedElementEstimate;
            }
        }
    }
    else {
        for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
            var direction = outOfBounds_1[_i];
            elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
        }
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */
function _getFlankingEdges(edge) {
    if (edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top || edge === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right
        };
    }
    else {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom
        };
    }
}
/**
 * Retrieve the final value for the return edge of elementRectangle.
 * If the elementRectangle is closer to one side of the bounds versus the other, the return edge is flipped to grow inward.
 *
 * @param elementRectangle
 * @param targetEdge
 * @param bounds
 */
function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
    if (bounds &&
        Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
        return returnEdge * -1;
    }
    return returnEdge;
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} bounds
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @param {boolean} doNotFinalizeReturnEdge
 * @returns {IPartialIRectangle}
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    if (!doNotFinalizeReturnEdge) {
        returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
    }
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"].bottomAutoEdge; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge
        };
    }
    var positionInformation = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, DirectionalDictionary[directionalHint]);
    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getRTL"])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    positionData.alignTargetEdge = alignTargetEdge;
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnValue = {};
    var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /**
     * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
     * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
     * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
     * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
     * */
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPosition = new Rectangle(0, beakWidth, 0, beakWidth);
    beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
    }
    return beakPosition;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else if (target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]] = bounds[_positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"][direction]];
            }
        }
    }
    else {
        targetRectangle = new Rectangle(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, positionedElement, { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions, doNotFinalizeReturnEdge) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge), { beakPosition: finalizedBeakPosition });
}
function _positionCard(props, hostElement, callout, previousPositions) {
    return _positionCallout(props, hostElement, callout, previousPositions, true);
}
// END PRIVATE FUNCTIONS
/* tslint:disable:variable-name */
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _finalizeBeakPosition: _finalizeBeakPosition,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle
};
/* tslint:enable:variable-name */
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositioningData
 * can be passed to ensure that the positioning element repositions based on
 * its previous targets rather than starting with directionalhint.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @param {IPositionedData} previousPositions
 * @returns
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
function positionCard(props, hostElement, elementToPosition, previousPositions) {
    return _positionCard(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getScrollbarWidth"])(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
var _a;
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "oHZS":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

var inheritFont = { fontFamily: 'inherit' };
var GlobalClassNames = {
    root: 'ms-Fabric'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isFocusVisible = props.isFocusVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            isFocusVisible && 'is-focusVisible ms-Fabric--isFocusVisible',
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont
                }
            },
            className
        ]
    };
};
//# sourceMappingURL=Fabric.styles.js.map

/***/ }),

/***/ "oUON":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return ContextualMenuItemWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");


var ContextualMenuItemWrapper = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubMenuId = function (item) {
            var getSubMenuId = _this.props.getSubMenuId;
            if (getSubMenuId) {
                return getSubMenuId(item);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        return _this;
    }
    ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
        return !Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["shallowCompare"])(newProps, this.props);
    };
    return ContextualMenuItemWrapper;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));

//# sourceMappingURL=ContextualMenuItemWrapper.js.map

/***/ }),

/***/ "p6XH":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Fabric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return Fabric; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Fabric_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fabric.base */ "Cz2c");
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fabric.styles */ "oHZS");



var Fabric = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Fabric_base__WEBPACK_IMPORTED_MODULE_1__["FabricBase"], _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Fabric'
});
//# sourceMappingURL=Fabric.js.map

/***/ }),

/***/ "p6i1":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: ResponsiveMode, setResponsiveMode, initializeResponsiveMode, withResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return ResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponsiveMode", function() { return setResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeResponsiveMode", function() { return initializeResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withResponsiveMode", function() { return withResponsiveMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "fVfA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseDecorator */ "DCO0");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "iRzo");





var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
    ResponsiveMode[ResponsiveMode["unknown"] = 999] = "unknown";
})(ResponsiveMode || (ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
/**
 * User specified mode to default to, useful for server side rendering scenarios.
 */
var _defaultMode;
/**
 * Tracking the last mode we successfully rendered, which allows us to
 * paint initial renders with the correct size.
 */
var _lastMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
/**
 * Initializes the responsive mode to the current window size. This can be used to avoid
 * a re-render during first component mount since the window would otherwise not be measured
 * until after mounting.
 */
function initializeResponsiveMode(element) {
    if (typeof window !== 'undefined') {
        var currentWindow = (element && Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getWindow"])(element)) || window;
        getResponsiveMode(currentWindow);
    }
}
function withResponsiveMode(ComposedComponent) {
    var resultClass = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithResponsiveMode, _super);
        function WithResponsiveMode(props) {
            var _this = _super.call(this, props) || this;
            _this._onResize = function () {
                var element = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(_this);
                var currentWindow = (element && Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getWindow"])(element)) || window;
                var responsiveMode = getResponsiveMode(currentWindow);
                if (responsiveMode !== _this.state.responsiveMode) {
                    _this.setState({
                        responsiveMode: responsiveMode
                    });
                }
            };
            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
            _this.state = {
                responsiveMode: _defaultMode || _lastMode || ResponsiveMode.large
            };
            return _this;
        }
        WithResponsiveMode.prototype.componentDidMount = function () {
            this._events.on(window, 'resize', this._onResize);
            this._onResize();
        };
        WithResponsiveMode.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithResponsiveMode.prototype.render = function () {
            var responsiveMode = this.state.responsiveMode;
            return responsiveMode === ResponsiveMode.unknown ? null : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
        };
        return WithResponsiveMode;
    }(_BaseDecorator__WEBPACK_IMPORTED_MODULE_3__["BaseDecorator"]));
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["hoistStatics"])(ComposedComponent, resultClass);
}
function getResponsiveMode(currentWindow) {
    var responsiveMode = ResponsiveMode.small;
    if (currentWindow) {
        try {
            while (currentWindow.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                responsiveMode++;
            }
        }
        catch (e) {
            // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
            responsiveMode = _defaultMode || _lastMode || ResponsiveMode.large;
        }
        // Tracking last mode just gives us a better default in future renders,
        // which avoids starting with the wrong value if we've measured once.
        _lastMode = responsiveMode;
    }
    else {
        if (_defaultMode !== undefined) {
            responsiveMode = _defaultMode;
        }
        else {
            throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                'Call setResponsiveMode to define what the responsive mode is.');
        }
    }
    return responsiveMode;
}
//# sourceMappingURL=withResponsiveMode.js.map

/***/ }),

/***/ "pDCd":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return KTP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return KTP_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return KTP_FULL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return DATAKTP_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return DATAKTP_EXECUTE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return KTP_LAYER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return KTP_ARIA_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return KeytipEvents; });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map

/***/ }),

/***/ "pRvW":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return FocusZoneTabbableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return FocusZoneDirection; });
/**
 * {@docCategory FocusZone}
 */
var FocusZoneTabbableElements = {
    /** Tabbing is not allowed */
    none: 0,
    /** All tabbing action is allowed */
    all: 1,
    /** Tabbing is allowed only on input elements */
    inputOnly: 2
};
/**
 * {@docCategory FocusZone}
 */
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));
//# sourceMappingURL=FocusZone.types.js.map

/***/ }),

/***/ "pgS/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Divider.js ***!
  \*****************************************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Divider/index */ "/Phj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });


//# sourceMappingURL=Divider.js.map

/***/ }),

/***/ "qQHi":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: ContextualMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return ContextualMenuItem; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuItem.base */ "dvb8");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.classNames */ "9D85");



/**
 * ContextualMenuItem description
 */
var ContextualMenuItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuItemBase"], _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__["getItemStyles"], undefined, { scope: 'ContextualMenuItem' });
//# sourceMappingURL=ContextualMenuItem.js.map

/***/ }),

/***/ "rJVp":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor, ContextualMenuButton, ContextualMenuSplitButton, ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenuAnchor */ "WRwi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuAnchor"]; });

/* harmony import */ var _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuButton */ "lnwm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuButton"]; });

/* harmony import */ var _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenuSplitButton */ "jq/3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuSplitButton"]; });

/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "oUON");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "tQgu":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/hsl2hsv.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hsl2hsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2hsv", function() { return hsl2hsv; });
/** Converts HSL components to an HSV color. */
function hsl2hsv(h, s, l) {
    s *= (l < 50 ? l : 100 - l) / 100;
    var v = l + s;
    return {
        h: h,
        s: v === 0 ? 0 : ((2 * s) / v) * 100,
        v: v
    };
}
//# sourceMappingURL=hsl2hsv.js.map

/***/ }),

/***/ "tmP0":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/FocusTrapZone/FocusTrapZone.js ***!
  \************************************************************************************************************************************/
/*! exports provided: FocusTrapZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapZone", function() { return FocusTrapZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");



var FocusTrapZone = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FocusTrapZone, _super);
    function FocusTrapZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._firstBumper = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._lastBumper = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._hasFocus = false;
        _this._onRootFocus = function (ev) {
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
            _this._hasFocus = true;
        };
        _this._onRootBlur = function (ev) {
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
            var relatedTarget = ev.relatedTarget;
            if (ev.relatedTarget === null) {
                // In IE11, due to lack of support, event.relatedTarget is always
                // null making every onBlur call to be "outside" of the ComboBox
                // even when it's not. Using document.activeElement is another way
                // for us to be able to get what the relatedTarget without relying
                // on the event
                relatedTarget = document.activeElement;
            }
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, relatedTarget)) {
                _this._hasFocus = false;
            }
        };
        _this._onFirstBumperFocus = function () {
            _this._onBumperFocus(true);
        };
        _this._onLastBumperFocus = function () {
            _this._onBumperFocus(false);
        };
        _this._onBumperFocus = function (isFirstBumper) {
            if (_this.props.disabled) {
                return;
            }
            var currentBumper = (isFirstBumper === _this._hasFocus ? _this._lastBumper.current : _this._firstBumper.current);
            if (_this._root.current) {
                var nextFocusable = isFirstBumper === _this._hasFocus
                    ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getLastTabbable"])(_this._root.current, currentBumper, true, false)
                    : Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getFirstTabbable"])(_this._root.current, currentBumper, true, false);
                if (nextFocusable) {
                    if (_this._isBumper(nextFocusable)) {
                        // This can happen when FTZ contains no tabbable elements. focus will take care of finding a focusable element in FTZ.
                        _this.focus();
                    }
                    else {
                        nextFocusable.focus();
                    }
                }
            }
        };
        _this._onFocusCapture = function (ev) {
            if (_this.props.onFocusCapture) {
                _this.props.onFocusCapture(ev);
            }
            if (ev.target !== ev.currentTarget && !_this._isBumper(ev.target)) {
                // every time focus changes within the trap zone, remember the focused element so that
                // it can be restored if focus leaves the pane and returns via keystroke (i.e. via a call to this.focus(true))
                _this._previouslyFocusedElementInTrapZone = ev.target;
            }
        };
        _this._forceFocusInTrap = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (FocusTrapZone._focusStack.length && _this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
                var focusedElement = document.activeElement;
                if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, focusedElement)) {
                    _this.focus();
                    _this._hasFocus = true; // set focus here since we stop event propagation
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        _this._forceClickInTrap = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (FocusTrapZone._focusStack.length && _this === FocusTrapZone._focusStack[FocusTrapZone._focusStack.length - 1]) {
                var clickedElement = ev.target;
                if (clickedElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(_this._root.current, clickedElement)) {
                    _this.focus();
                    _this._hasFocus = true; // set focus here since we stop event propagation
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        return _this;
    }
    FocusTrapZone.prototype.componentDidMount = function () {
        this._bringFocusIntoZone();
        this._updateEventHandlers(this.props);
    };
    FocusTrapZone.prototype.componentWillReceiveProps = function (nextProps) {
        var elementToFocusOnDismiss = nextProps.elementToFocusOnDismiss;
        if (elementToFocusOnDismiss && this._previouslyFocusedElementOutsideTrapZone !== elementToFocusOnDismiss) {
            this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss;
        }
        this._updateEventHandlers(nextProps);
    };
    FocusTrapZone.prototype.componentDidUpdate = function (prevProps) {
        var prevForceFocusInsideTrap = prevProps.forceFocusInsideTrap !== undefined ? prevProps.forceFocusInsideTrap : true;
        var newForceFocusInsideTrap = this.props.forceFocusInsideTrap !== undefined ? this.props.forceFocusInsideTrap : true;
        var prevDisabled = prevProps.disabled !== undefined ? prevProps.disabled : false;
        var newDisabled = this.props.disabled !== undefined ? this.props.disabled : false;
        if ((!prevForceFocusInsideTrap && newForceFocusInsideTrap) || (prevDisabled && !newDisabled)) {
            // Transition from forceFocusInsideTrap / FTZ disabled to enabled.
            // Emulate what happens when a FocusTrapZone gets mounted.
            this._bringFocusIntoZone();
        }
        else if ((prevForceFocusInsideTrap && !newForceFocusInsideTrap) || (!prevDisabled && newDisabled)) {
            // Transition from forceFocusInsideTrap / FTZ enabled to disabled.
            // Emulate what happens when a FocusTrapZone gets unmounted.
            this._returnFocusToInitiator();
        }
    };
    FocusTrapZone.prototype.componentWillUnmount = function () {
        // don't handle return focus unless forceFocusInsideTrap is true or focus is still within FocusTrapZone
        if (!this.props.disabled ||
            this.props.forceFocusInsideTrap ||
            !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, document.activeElement)) {
            this._returnFocusToInitiator();
        }
    };
    FocusTrapZone.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, ariaLabelledBy = _a.ariaLabelledBy;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        var bumperProps = {
            style: {
                pointerEvents: 'none',
                position: 'fixed' // 'fixed' prevents browsers from scrolling to bumpers when viewport does not contain them
            },
            tabIndex: disabled ? -1 : 0,
            'data-is-visible': true
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, { className: className, ref: this._root, "aria-labelledby": ariaLabelledBy, onFocusCapture: this._onFocusCapture, onFocus: this._onRootFocus, onBlur: this._onRootBlur }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bumperProps, { ref: this._firstBumper, onFocus: this._onFirstBumperFocus })),
            this.props.children,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bumperProps, { ref: this._lastBumper, onFocus: this._onLastBumperFocus }))));
    };
    FocusTrapZone.prototype.focus = function () {
        var _a = this.props, focusPreviouslyFocusedInnerElement = _a.focusPreviouslyFocusedInnerElement, firstFocusableSelector = _a.firstFocusableSelector;
        if (focusPreviouslyFocusedInnerElement &&
            this._previouslyFocusedElementInTrapZone &&
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, this._previouslyFocusedElementInTrapZone)) {
            // focus on the last item that had focus in the zone before we left the zone
            this._focusAsync(this._previouslyFocusedElementInTrapZone);
            return;
        }
        var focusSelector = typeof firstFocusableSelector === 'string' ? firstFocusableSelector : firstFocusableSelector && firstFocusableSelector();
        var _firstFocusableChild;
        if (this._root.current) {
            if (focusSelector) {
                _firstFocusableChild = this._root.current.querySelector('.' + focusSelector);
            }
            // Fall back to first element if query selector did not match any elements.
            if (!_firstFocusableChild) {
                _firstFocusableChild = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNextElement"])(this._root.current, this._root.current.firstChild, false, false, false, true);
            }
        }
        if (_firstFocusableChild) {
            this._focusAsync(_firstFocusableChild);
        }
    };
    FocusTrapZone.prototype._focusAsync = function (element) {
        if (!this._isBumper(element)) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["focusAsync"])(element);
        }
    };
    FocusTrapZone.prototype._bringFocusIntoZone = function () {
        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.disableFirstFocus, disableFirstFocus = _c === void 0 ? false : _c;
        if (disabled) {
            return;
        }
        FocusTrapZone._focusStack.push(this);
        this._previouslyFocusedElementOutsideTrapZone = elementToFocusOnDismiss
            ? elementToFocusOnDismiss
            : document.activeElement;
        if (!disableFirstFocus && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, this._previouslyFocusedElementOutsideTrapZone)) {
            this.focus();
        }
    };
    FocusTrapZone.prototype._returnFocusToInitiator = function () {
        var _this = this;
        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
        FocusTrapZone._focusStack = FocusTrapZone._focusStack.filter(function (value) {
            return _this !== value;
        });
        var activeElement = document.activeElement;
        if (!ignoreExternalFocusing &&
            this._previouslyFocusedElementOutsideTrapZone &&
            typeof this._previouslyFocusedElementOutsideTrapZone.focus === 'function' &&
            (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._root.current, activeElement) || activeElement === document.body)) {
            this._focusAsync(this._previouslyFocusedElementOutsideTrapZone);
        }
    };
    FocusTrapZone.prototype._updateEventHandlers = function (newProps) {
        var _a = newProps.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _a === void 0 ? false : _a, _b = newProps.forceFocusInsideTrap, forceFocusInsideTrap = _b === void 0 ? true : _b;
        if (forceFocusInsideTrap && !this._disposeFocusHandler) {
            this._disposeFocusHandler = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'focus', this._forceFocusInTrap, true);
        }
        else if (!forceFocusInsideTrap && this._disposeFocusHandler) {
            this._disposeFocusHandler();
            this._disposeFocusHandler = undefined;
        }
        if (!isClickableOutsideFocusTrap && !this._disposeClickHandler) {
            this._disposeClickHandler = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["on"])(window, 'click', this._forceClickInTrap, true);
        }
        else if (isClickableOutsideFocusTrap && this._disposeClickHandler) {
            this._disposeClickHandler();
            this._disposeClickHandler = undefined;
        }
    };
    FocusTrapZone.prototype._isBumper = function (element) {
        return element === this._firstBumper.current || element === this._lastBumper.current;
    };
    FocusTrapZone._focusStack = [];
    return FocusTrapZone;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=FocusTrapZone.js.map

/***/ }),

/***/ "uWrk":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: getDividerClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDividerClassNames", function() { return getDividerClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "Gc2k");


/**
 * @deprecated use getStyles exported from VerticalDivider.styles.ts
 */
var getDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center'
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt
        }
    });
});
//# sourceMappingURL=VerticalDivider.classNames.js.map

/***/ }),

/***/ "ukOW":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.notification.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: registerLayer, unregisterLayer, notifyHostChanged, setDefaultTarget, getDefaultTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLayer", function() { return registerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterLayer", function() { return unregisterLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHostChanged", function() { return notifyHostChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultTarget", function() { return setDefaultTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTarget", function() { return getDefaultTarget; });
var _layersByHostId = {};
var _defaultHostSelector;
/**
 * Register a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function registerLayer(hostId, callback) {
    if (!_layersByHostId[hostId]) {
        _layersByHostId[hostId] = [];
    }
    _layersByHostId[hostId].push(callback);
}
/**
 * Unregister a layer for a given host id
 * @param hostId Id of the layer host
 * @param layer Layer instance
 */
function unregisterLayer(hostId, callback) {
    if (_layersByHostId[hostId]) {
        var idx = _layersByHostId[hostId].indexOf(callback);
        if (idx >= 0) {
            _layersByHostId[hostId].splice(idx, 1);
            if (_layersByHostId[hostId].length === 0) {
                delete _layersByHostId[hostId];
            }
        }
    }
}
/**
 * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
 * care about the specific host.
 */
function notifyHostChanged(id) {
    if (_layersByHostId[id]) {
        _layersByHostId[id].forEach(function (callback) { return callback(); });
    }
}
/**
 * Sets the default target selector to use when determining the host in which
 * Layered content will be injected into. If not provided, an element will be
 * created at the end of the document body.
 *
 * Passing in a falsey value will clear the default target and reset back to
 * using a created element at the end of document body.
 */
function setDefaultTarget(selector) {
    _defaultHostSelector = selector;
}
/**
 * Get the default target selector when determining a host
 */
function getDefaultTarget() {
    return _defaultHostSelector;
}
//# sourceMappingURL=Layer.notification.js.map

/***/ }),

/***/ "uqLm":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/color/hsv2hex.js ***!
  \*********************************************************************************************************************/
/*! exports provided: hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/* harmony import */ var _hsv2rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hsv2rgb */ "LTJ4");
/* harmony import */ var _rgb2hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb2hex */ "SYcA");


/** Converts HSV components to a hex color string (without # prefix). */
function hsv2hex(h, s, v) {
    var _a = Object(_hsv2rgb__WEBPACK_IMPORTED_MODULE_0__["hsv2rgb"])(h, s, v), r = _a.r, g = _a.g, b = _a.b;
    return Object(_rgb2hex__WEBPACK_IMPORTED_MODULE_1__["rgb2hex"])(r, g, b);
}
//# sourceMappingURL=hsv2hex.js.map

/***/ }),

/***/ "wXwR":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "zKx7");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "iRzo");
/* harmony import */ var _ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionButton.styles */ "LXZO");





/**
 * {@docCategory Button}
 */
var ActionButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: Object(_ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    ActionButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('ActionButton', ['theme', 'styles'], true)
    ], ActionButton);
    return ActionButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

//# sourceMappingURL=ActionButton.js.map

/***/ }),

/***/ "z2r6":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Callout, FocusTrapCallout, DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callout */ "zLl/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _Callout__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });

/* harmony import */ var _FocusTrapCallout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FocusTrapCallout */ "QpUN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapCallout", function() { return _FocusTrapCallout__WEBPACK_IMPORTED_MODULE_1__["FocusTrapCallout"]; });

/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zKx7":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js ***!
  \**************************************************************************************************************************/
/*! exports provided: BaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "uUJR");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ContextualMenu */ "lB5j");
/* harmony import */ var _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseButton.classNames */ "5ZAT");
/* harmony import */ var _SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SplitButton/SplitButton.classNames */ "BxdP");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../KeytipData */ "ASEy");









var TouchIdleDelay = 500; /* ms */
/**
 * {@docCategory Button}
 */
var BaseButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._splitButtonContainer = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._renderedPersistentMenu = false;
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
                var className = iconProps.className, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](iconProps, ["className"]);
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(_this._classNames.icon, className) }, rest));
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a = _this.props, text = _a.text, children = _a.children, _b = _a.secondaryText, secondaryText = _b === void 0 ? _this.props.description : _b, _c = _a.onRenderText, onRenderText = _c === void 0 ? _this._onRenderText : _c, _d = _a.onRenderDescription, onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;
            if (text || typeof children === 'string' || secondaryText) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            var _a = props.secondaryText, secondaryText = _a === void 0 ? _this.props.description : _a;
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? _this._dismissMenu : _a;
            var MenuType = _this.props.menuAs || _ContextualMenu__WEBPACK_IMPORTED_MODULE_5__["ContextualMenu"];
            // the accessible menu label (accessible name) has a relationship to the button.
            // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
            // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
            if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
                menuProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, menuProps, { labelElementId: _this._labelId });
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MenuType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: _this._labelId + '-menu', directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_4__["DirectionalHint"].bottomLeftEdge }, menuProps, { shouldFocusOnContainer: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnContainer : undefined, shouldFocusOnMount: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnMount : undefined, hidden: _this.state.menuProps ? _this.state.menuProps.hidden : undefined, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BaseButton-menuhost', menuProps.className), target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current, onDismiss: onDismiss })));
        };
        _this._dismissMenu = function () {
            var menuProps = null;
            if (_this.props.persistMenu && _this.state.menuProps) {
                // Create a new object to trigger componentDidUpdate
                menuProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state.menuProps, { hidden: true });
            }
            _this.setState({ menuProps: menuProps });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                var menuProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.props.menuProps, { shouldFocusOnContainer: shouldFocusOnContainer, shouldFocusOnMount: shouldFocusOnMount });
                if (_this.props.persistMenu) {
                    _this._renderedPersistentMenu = true;
                    menuProps.hidden = false;
                }
                _this.setState({ menuProps: menuProps });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            var currentMenuProps = _this.state.menuProps;
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            if (_this.props.persistMenu) {
                // _renderedPersistentMenu ensures that the first rendering of
                // the menu happens on-screen, as edge's scrollbar calcuations are off if done while hidden.
                !_this._renderedPersistentMenu || (currentMenuProps && currentMenuProps.hidden)
                    ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount)
                    : _this._dismissMenu();
            }
            else {
                currentMenuProps ? _this._dismissMenu() : _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
            }
        };
        _this._onSplitContainerFocusCapture = function (ev) {
            var container = _this._splitButtonContainer.current;
            // If the target is coming from the portal we do not need to set focus on the container.
            if (!container || (ev.target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["portalContainsElement"])(ev.target, container))) {
                return;
            }
            // We should never be able to focus the individual buttons in a split button. Focus
            // should always remain on the container.
            container.focus();
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (_this._isExpanded) {
                _this._dismissMenu();
            }
            if (!_this._processingTouch && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (_this._processingTouch) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            if (_this.props.disabled && (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            var isUp = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up;
            var isDown = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down;
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
                _this.setState(function (state) {
                    if (state.menuProps && !state.menuProps.shouldFocusOnMount) {
                        return { menuProps: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.menuProps, { shouldFocusOnMount: true }) };
                    }
                    return state;
                });
                // This should be done in the setStateCallback but because preventDefault
                // needs to be called, we have to evaluate the current state, even though
                // it might not be 100% accurate;
                if (_this.state.menuProps && !_this.state.menuProps.shouldFocusOnMount) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton && _this._splitButtonContainer.current && !('onpointerdown' in _this._splitButtonContainer.current)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var onMenuClick = _this.props.onMenuClick;
            if (onMenuClick) {
                onMenuClick(ev, _this);
            }
            if (!ev.defaultPrevented) {
                // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                // between a real click event and a keypress event (detail should be the number of mouse clicks).
                // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                // and "" for pressing "Enter" with Narrator on.
                var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined,
            description: 'secondaryText',
            toggled: 'checked'
        });
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this._descriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this._ariaDescriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this.state = {
            menuProps: null
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            var menuProps = this.state.menuProps;
            if (this.props.persistMenu) {
                return !!menuProps && !menuProps.hidden;
            }
            return !!menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, primaryDisabled = _a.primaryDisabled, _b = _a.secondaryText, secondaryText = _b === void 0 ? this.props.description : _b, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, toggle = _a.toggle, getClassNames = _a.getClassNames;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isExpanded, this.props.split, !!allowDisabledFocus)
            : Object(_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_6__["getBaseButtonClassNames"])(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, this._isExpanded, this.props.split);
        var _c = this, _ariaDescriptionId = _c._ariaDescriptionId, _labelId = _c._labelId, _descriptionId = _c._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? _Utilities__WEBPACK_IMPORTED_MODULE_2__["anchorProperties"] : _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"], [
            'disabled' // let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props
        var resolvedAriaLabel = ariaLabel || nativeProps['aria-label'];
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = undefined;
        if (!resolvedAriaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = this._hasText() ? _labelId : undefined;
            }
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton ? false : true;
        var buttonProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(nativeProps, {
            className: this._classNames.root,
            ref: this._buttonElement,
            disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
            onKeyDown: this._onKeyDown,
            onKeyPress: this._onKeyPress,
            onKeyUp: this._onKeyUp,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onClick: this._onClick,
            'aria-label': resolvedAriaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'aria-disabled': isPrimaryButtonDisabled,
            'data-is-focusable': dataIsFocusable,
            'aria-pressed': toggle ? !!checked : undefined // aria-pressed attribute should only be present for toggle buttons
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(buttonProps, {
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the primary action.
        // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
        // does not support Pointer events yet.
        if (this._isSplitButton && this._splitButtonContainer.current && 'onpointerdown' in this._splitButtonContainer.current) {
            this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss. If the menu is being persisted
        // this condition is tested by checking on a change on the menuProps hidden value.
        if (this.props.onAfterMenuDismiss && prevState.menuProps) {
            if (!this.state.menuProps || (this.props.persistMenu && !prevState.menuProps.hidden && this.state.menuProps.hidden)) {
                this.props.onAfterMenuDismiss();
            }
        }
    };
    BaseButton.prototype.focus = function () {
        if (this._isSplitButton && this._splitButtonContainer.current) {
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e, disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        var Content = (
        // If we're making a split button, we won't put the keytip here
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_8__["KeytipData"], { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonProps, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.flexContainer },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                _this.state.menuProps && !_this.state.menuProps.doNotLayer && onRenderMenu(menuProps, _this._onRenderMenu)))); }));
        if (menuProps && menuProps.doNotLayer) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'inline-block' } },
                Content,
                this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return Content;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText used to have
        // before the refactor that introduced this function. _onRenderTextContents does not require props.text to be undefined in order
        // for props.children to be used as a fallback. Purely a code maintainability/reuse issue, but logged as Issue #4979
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps, toggle = _a.toggle;
        var keytipProps = this.props.keytipProps;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, this._isExpanded, !!checked, !!allowDisabledFocus)
            : styles && Object(_SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_7__["getClassNames"])(styles, !!disabled, this._isExpanded, !!checked, !!primaryDisabled);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(buttonProps, {
            onClick: undefined,
            tabIndex: -1,
            'data-is-focusable': false
        });
        var ariaDescribedBy = buttonProps.ariaDescription;
        if (keytipProps && menuProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        var containerProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(buttonProps, [], ['disabled']);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_8__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, { "data-ktp-target": keytipAttributes['data-ktp-target'], role: 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": _this._isExpanded, "aria-pressed": toggle ? !!checked : undefined, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: !disabled || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'], onFocusCapture: _this._onSplitContainerFocusCapture }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { display: 'flex' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); }));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.divider, "aria-hidden": true });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a = this.props, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, disabled = _a.disabled;
        var menuIconProps = this.props.menuIconProps;
        var splitButtonAriaLabel = this.props.splitButtonAriaLabel;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            styles: classNames,
            checked: checked,
            disabled: disabled,
            allowDisabledFocus: allowDisabledFocus,
            onClick: this._onMenuClick,
            menuProps: undefined,
            iconProps: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, menuIconProps, { className: this._classNames.menuIcon }),
            ariaLabel: splitButtonAriaLabel,
            'aria-haspopup': true,
            'aria-expanded': this._isExpanded,
            'data-is-focusable': false
        };
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BaseButton, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], onMouseDown: this._onMouseDown, tabIndex: -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeeout from a previous touch and pointer event
        // cancel that timeout so we can set a nwe one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false
    };
    return BaseButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=BaseButton.js.map

/***/ }),

/***/ "zLl/":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js ***!
  \************************************************************************************************************************/
/*! exports provided: Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CalloutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent */ "+aGg");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layer */ "FQnb");




var Callout = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, layerProps = _a.layerProps, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["layerProps"]);
        var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CalloutContent__WEBPACK_IMPORTED_MODULE_2__["CalloutContent"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
        return this.props.doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, layerProps), content);
    };
    return Callout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Callout.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.1.js.map