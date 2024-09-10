(window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] = window["webpackJsonp_26cb4af3_7f48_4737_b82a_4e24167c2d07_1_1_2"] || []).push([["vendors~pnp-propcontrols-colldata"],{

/***/ "/x9U":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionDataViewer/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: CollectionDataViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionDataViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionDataViewer */ "QcW5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionDataViewer", function() { return _CollectionDataViewer__WEBPACK_IMPORTED_MODULE_0__["CollectionDataViewer"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "2OYF":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.styles.js ***!
  \***************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.types */ "mifA");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "Gc2k");



// TODO -Issue #5689: Comment in once Button is converted to mergeStyles
// import { IStyleFunctionOrObject } from '../../Utilities';
// import { IButtonStyles, IButtonStyleProps } from '../../Button';
var GlobalClassNames = {
    root: 'ms-Panel',
    main: 'ms-Panel-main',
    commands: 'ms-Panel-commands',
    contentInner: 'ms-Panel-contentInner',
    scrollableContent: 'ms-Panel-scrollableContent',
    navigation: 'ms-Panel-navigation',
    closeButton: 'ms-Panel-closeButton ms-PanelAction-close',
    header: 'ms-Panel-header',
    headerText: 'ms-Panel-headerText',
    content: 'ms-Panel-content',
    footer: 'ms-Panel-footer',
    footerInner: 'ms-Panel-footerInner',
    isOpen: 'is-open',
    hasCloseButton: 'ms-Panel--hasCloseButton',
    smallFluid: 'ms-Panel--smFluid',
    smallFixedNear: 'ms-Panel--smLeft',
    smallFixedFar: 'ms-Panel--sm',
    medium: 'ms-Panel--md',
    large: 'ms-Panel--lg',
    largeFixed: 'ms-Panel--fixed',
    extraLarge: 'ms-Panel--xl',
    custom: 'ms-Panel--custom',
    customNear: 'ms-Panel--customLeft'
};
var panelWidth = {
    full: '100%',
    auto: 'auto',
    xs: 272,
    sm: 340,
    md1: 592,
    md2: 644,
    lg: 940
};
var panelMargin = {
    auto: 'auto',
    none: 0,
    md: 48,
    lg: 428,
    xl: 176
};
// Following consts are used below in `getPanelBreakpoints()` function to provide
// necessary fallbacks for different types of Panel in different breakpoints.
var smallPanelSelectors = (_a = {},
    _a["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinMedium"] + "px)"] = {
        width: panelWidth.sm
    },
    _a);
var mediumPanelSelectors = (_b = {},
    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinLarge"] + "px)"] = {
        width: panelWidth.md1
    },
    _b["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXLarge"] + "px)"] = {
        width: panelWidth.md2
    },
    _b);
var largePanelSelectors = (_c = {},
    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinUhfMobile"] + "px)"] = {
        left: panelMargin.md,
        width: panelWidth.auto
    },
    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.lg
    },
    _c);
var largeFixedPanelSelectors = (_d = {},
    _d["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.auto,
        width: panelWidth.lg
    },
    _d);
var extraLargePanelSelectors = (_e = {},
    _e["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
        left: panelMargin.xl
    },
    _e);
// Make sure Panels have fallbacks to different breakpoints by reusing same selectors.
// This is done in the effort to follow design redlines.
var getPanelBreakpoints = function (type) {
    var selectors;
    // Panel types `smallFluid`, `smallFixedNear`, `custom` and `customNear`
    // are not checked in here because they render the same in all the breakpoints
    // and have the checks done separately in the `getStyles` function below.
    switch (type) {
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedFar:
            selectors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, smallPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].medium:
            selectors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, smallPanelSelectors, mediumPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].large:
            selectors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, smallPanelSelectors, mediumPanelSelectors, largePanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].largeFixed:
            selectors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, smallPanelSelectors, mediumPanelSelectors, largePanelSelectors, largeFixedPanelSelectors);
            break;
        case _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].extraLarge:
            selectors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, smallPanelSelectors, mediumPanelSelectors, largePanelSelectors, extraLargePanelSelectors);
            break;
        default:
            break;
    }
    return selectors;
};
var commandBarHeight = '44px';
var sharedPaddingStyles = {
    paddingLeft: '16px',
    paddingRight: '16px',
    selectors: (_f = {},
        _f["@media screen and (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinLarge"] + "px)"] = {
            paddingLeft: '32px',
            paddingRight: '32px'
        },
        _f["@media screen and (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXXLarge"] + "px)"] = {
            paddingLeft: '40px',
            paddingRight: '40px'
        },
        _f)
};
// // TODO -Issue #5689: Comment in once Button is converted to mergeStyles
// function getIconButtonStyles(props: IPanelStyleProps): IStyleFunctionOrObject<IButtonStyleProps, IButtonStyles> {
//   const { theme } = props;
//   return () => ({
//     root: {
//       height: 'auto',
//       width: '44px',
//       color: theme.palette.neutralSecondary,
//       fontSize: IconFontSizes.large
//     },
//     rootHovered: {
//       color: theme.palette.neutralPrimary
//     }
//   });
// }
var getStyles = function (props) {
    var className = props.className, focusTrapZoneClassName = props.focusTrapZoneClassName, hasCloseButton = props.hasCloseButton, headerClassName = props.headerClassName, isAnimating = props.isAnimating, isFooterSticky = props.isFooterSticky, isFooterAtBottom = props.isFooterAtBottom, isOnRightSide = props.isOnRightSide, isOpen = props.isOpen, isHiddenOnDismiss = props.isHiddenOnDismiss, theme = props.theme, _a = props.type, type = _a === void 0 ? _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedFar : _a;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getGlobalClassNames"])(GlobalClassNames, theme);
    var isCustomPanel = type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].custom || type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].customNear;
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            isOpen && classNames.isOpen,
            hasCloseButton && classNames.hasCloseButton,
            {
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            isCustomPanel && isOnRightSide && classNames.custom,
            isCustomPanel && !isOnRightSide && classNames.customNear,
            className
        ],
        overlay: [
            {
                pointerEvents: 'auto',
                cursor: 'pointer'
            },
            isOpen && isAnimating && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].fadeIn100,
            !isOpen && isAnimating && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].fadeOut100
        ],
        hiddenPanel: [
            !isOpen &&
                !isAnimating &&
                isHiddenOnDismiss && {
                visibility: 'hidden'
            }
        ],
        main: [
            classNames.main,
            {
                backgroundColor: palette.white,
                boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.2)',
                pointerEvents: 'auto',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                bottom: 0,
                top: 0,
                // (left, right, width) - Properties to be overridden depending on the type of the Panel and the screen breakpoint.
                left: panelMargin.auto,
                right: panelMargin.none,
                width: panelWidth.full,
                selectors: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_2__["HighContrastSelector"]] = {
                    borderLeft: "3px solid " + palette.neutralLight,
                    borderRight: "3px solid " + palette.neutralLight
                }, _b), getPanelBreakpoints(type))
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFluid && {
                left: panelMargin.none
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].smallFixedNear && {
                left: panelMargin.none,
                right: panelMargin.auto,
                width: panelWidth.xs
            },
            type === _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"].customNear && {
                right: 'auto',
                left: 0
            },
            isCustomPanel && {
                maxWidth: '100vw'
            },
            isOpen && isAnimating && !isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideRightIn40,
            isOpen && isAnimating && isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideLeftIn40,
            !isOpen && isAnimating && !isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideLeftOut40,
            !isOpen && isAnimating && isOnRightSide && _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationClassNames"].slideRightOut40,
            focusTrapZoneClassName
        ],
        commands: [classNames.commands],
        navigation: [
            classNames.navigation,
            {
                padding: '0 5px',
                height: commandBarHeight,
                display: 'flex',
                justifyContent: 'flex-end'
            }
        ],
        closeButton: [classNames.closeButton],
        contentInner: [
            classNames.contentInner,
            {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflowY: 'hidden'
            }
        ],
        header: [
            classNames.header,
            sharedPaddingStyles,
            {
                margin: '14px 0',
                // Ensure that title doesn't shrink if screen is too small
                flexGrow: 0,
                selectors: (_c = {},
                    _c["@media (min-width: " + _Styling__WEBPACK_IMPORTED_MODULE_2__["ScreenWidthMinXLarge"] + "px)"] = {
                        marginTop: '30px'
                    },
                    _c)
            }
        ],
        headerText: [
            classNames.headerText,
            _Styling__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"].xLarge,
            {
                color: palette.neutralPrimary,
                lineHeight: '32px',
                margin: 0
            },
            headerClassName
        ],
        scrollableContent: [
            classNames.scrollableContent,
            {
                overflowY: 'auto'
            },
            isFooterAtBottom && {
                flexGrow: 1
            }
        ],
        content: [
            classNames.content,
            sharedPaddingStyles,
            {
                marginBottom: 0,
                paddingBottom: 20
            }
        ],
        footer: [
            classNames.footer,
            {
                // Ensure that footer doesn't shrink if screen is too small
                flexGrow: 0,
                borderTop: '1px solid transparent',
                transition: "opacity " + _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationVariables"].durationValue3 + " " + _Styling__WEBPACK_IMPORTED_MODULE_2__["AnimationVariables"].easeFunction2
            },
            isFooterSticky && {
                background: palette.white,
                borderTopColor: palette.neutralLight
            }
        ],
        footerInner: [
            classNames.footerInner,
            sharedPaddingStyles,
            {
                paddingBottom: '20px',
                paddingTop: '20px'
            }
        ]
        // subComponentStyles: {
        //   iconButton: getIconButtonStyles(props)
        // }
    };
    var _b, _c;
};
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=Panel.styles.js.map

/***/ }),

/***/ "2tUa":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Panel/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: Panel, PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel */ "9NG+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _Panel__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.types */ "mifA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return _Panel_types__WEBPACK_IMPORTED_MODULE_1__["PanelType"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8sxt":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionDataItem/CollectionDataItem.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: CollectionDataItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionDataItem", function() { return CollectionDataItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
/* harmony import */ var office_ui_fabric_react_lib_components_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/TextField */ "swiA");
/* harmony import */ var office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Icon */ "Bxs9");
/* harmony import */ var office_ui_fabric_react_lib_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Link */ "ero8");
/* harmony import */ var office_ui_fabric_react_lib_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Checkbox */ "jZF0");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .. */ "HR+7");
/* harmony import */ var office_ui_fabric_react_lib_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Dropdown */ "Vi1w");
/* harmony import */ var office_ui_fabric_react_lib_components_Callout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Callout */ "z2r6");
/* harmony import */ var _collectionIconField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../collectionIconField */ "niPH");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _collectionNumberField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../collectionNumberField */ "Z/cK");
/* harmony import */ var _collectionColorField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../collectionColorField */ "B2jj");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _collectionDropdownField_CollectionDropdownField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../collectionDropdownField/CollectionDropdownField */ "VZE8");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var CollectionDataItem = /** @class */ (function (_super) {
    __extends(CollectionDataItem, _super);
    function CollectionDataItem(props) {
        var _this = _super.call(this, props) || this;
        _this.emptyItem = null;
        _this.validation = {};
        /**
         * Update the item value on the field change
         */
        _this.onValueChanged = function (fieldId, value) {
            _this.setState(function (prevState) {
                var crntItem = prevState.crntItem;
                // Update the changed field
                crntItem[fieldId] = value;
                _this.doAllFieldChecks();
                // Store this in the current state
                return { crntItem: crntItem };
            });
        };
        /**
         * Add the current row to the collection
         */
        _this.addRow = function () {
            if (_this.props.fAddItem) {
                var crntItem = _this.state.crntItem;
                // Check if all the fields are correctly provided
                if (_this.checkAllRequiredFieldsValid(crntItem) &&
                    _this.checkAnyFieldContainsValue(crntItem) &&
                    _this.checkAllFieldsAreValid()) {
                    _this.props.fAddItem(crntItem);
                    // Clear all field values
                    var emptyItem = _this.generateEmptyItem();
                    _this.setState({
                        crntItem: __assign({}, emptyItem)
                    });
                }
            }
        };
        /**
         * Add the current row to the collection
         */
        _this.updateItem = function () {
            var crntItem = _this.state.crntItem;
            var isValid = _this.checkAllRequiredFieldsValid(crntItem) && _this.checkAnyFieldContainsValue(crntItem) && _this.checkAllFieldsAreValid();
            if (_this.props.fUpdateItem) {
                // Check if all the fields are correctly provided
                if (isValid) {
                    _this.props.fUpdateItem(_this.props.index, crntItem);
                }
            }
            // Set the validation for the item
            if (_this.props.fValidation) {
                _this.props.fValidation(_this.props.index, isValid);
            }
        };
        /**
         * Delete the item from the collection
         */
        _this.deleteRow = function () {
            if (_this.props.fDeleteItem) {
                _this.props.fDeleteItem(_this.props.index);
            }
        };
        /**
         * Allow custom field validation
         *
         * @param field
         * @param value
         */
        _this.fieldValidation = function (field, value) { return __awaiter(_this, void 0, void 0, function () {
            var validation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validation = "";
                        if (!field.onGetErrorMessage) return [3 /*break*/, 2];
                        // Set initial field validation
                        this.validation[field.id] = false;
                        return [4 /*yield*/, field.onGetErrorMessage(value, this.props.index, this.state.crntItem)];
                    case 1:
                        // Do the validation
                        validation = _a.sent();
                        _a.label = 2;
                    case 2:
                        // Store the field validation
                        this.validation[field.id] = validation === "";
                        // Add message for the error callout
                        this.errorCalloutHandler(field.id, validation);
                        this.doAllFieldChecks();
                        return [2 /*return*/, validation];
                }
            });
        }); };
        /**
         * Custom field validation
         */
        _this.onCustomFieldValidation = function (fieldId, errorMsg) {
            console.log(fieldId, errorMsg);
            if (fieldId) {
                _this.validation[fieldId] = errorMsg === "";
                _this.errorCalloutHandler(fieldId, errorMsg);
                _this.doAllFieldChecks();
            }
        };
        /**
         * URL field validation
         *
         * @param field
         * @param value
         * @param item
         */
        _this.urlFieldValidation = function (field, value, item) { return __awaiter(_this, void 0, void 0, function () {
            var isValid, validation, regEx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isValid = true;
                        validation = "";
                        if (!field.onGetErrorMessage) return [3 /*break*/, 2];
                        return [4 /*yield*/, field.onGetErrorMessage(value, this.props.index, item)];
                    case 1:
                        // Using the custom validation
                        validation = _a.sent();
                        isValid = validation === "";
                        return [3 /*break*/, 3];
                    case 2:
                        regEx = /(http|https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
                        isValid = (value === null || value.length === 0 || regEx.test(value));
                        validation = isValid ? "" : PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__["InvalidUrlError"];
                        _a.label = 3;
                    case 3:
                        // Store the field validation
                        this.validation[field.id] = isValid;
                        // Add message for the error callout
                        this.errorCalloutHandler(field.id, validation);
                        this.doAllFieldChecks();
                        // Return the error message if needed
                        return [2 /*return*/, validation];
                }
            });
        }); };
        /**
         * Toggle the error callout
         */
        _this.toggleErrorCallout = function () {
            _this.setState(function (prevState) { return ({
                showCallout: !prevState.showCallout
            }); });
        };
        _this.hideErrorCallout = function () {
            _this.setState({
                showCallout: false
            });
        };
        // Create an empty item with all properties
        var emptyItem = _this.generateEmptyItem();
        _this.state = {
            crntItem: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__["clone"])(_this.props.item) || __assign({}, emptyItem),
            errorMsgs: [],
            showCallout: false
        };
        return _this;
    }
    /**
     * componentDidUpdate lifecycle hook
     * @param prevProps
     * @param prevState
     */
    CollectionDataItem.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({
                crntItem: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__["clone"])(this.props.item)
            });
        }
    };
    /**
     * Perform all required field checks at once
     */
    CollectionDataItem.prototype.doAllFieldChecks = function () {
        var crntItem = this.state.crntItem;
        // Check if current item is valid
        if (this.props.fAddInCreation) {
            if (this.checkAllRequiredFieldsValid(crntItem) &&
                this.checkAnyFieldContainsValue(crntItem) &&
                this.checkAllFieldsAreValid()) {
                this.props.fAddInCreation(crntItem);
            }
            else {
                this.props.fAddInCreation(null);
            }
        }
        // Check if item needs to be updated
        if (this.props.fUpdateItem) {
            this.updateItem();
        }
    };
    /**
     * Check if all values of the required fields are provided
     */
    CollectionDataItem.prototype.checkAllRequiredFieldsValid = function (item) {
        // Get all the required fields
        var requiredFields = this.props.fields.filter(function (f) { return f.required; });
        // Check all the required field values
        for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
            var field = requiredFields_1[_i];
            if (typeof item[field.id] === "undefined" || item[field.id] === null || item[field.id] === "") {
                return false;
            }
        }
        return true;
    };
    /**
     * Check if any of the fields contain a value
     * @param item
     */
    CollectionDataItem.prototype.checkAnyFieldContainsValue = function (item) {
        var fields = this.props.fields;
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (typeof item[field.id] !== "undefined" && item[field.id] !== null && item[field.id] !== "") {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if the add action needs to be disabled
     */
    CollectionDataItem.prototype.disableAdd = function (item) {
        return !this.checkAllRequiredFieldsValid(item) || !this.checkAnyFieldContainsValue(item) || !this.checkAllFieldsAreValid() || !this.props.fAddItem;
    };
    /**
     * Checks if all fields are valid
     */
    CollectionDataItem.prototype.checkAllFieldsAreValid = function () {
        if (this.validation) {
            var keys = Object.keys(this.validation);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (!this.validation[key]) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * Error callout message handler
     *
     * @param field
     * @param message
     */
    CollectionDataItem.prototype.errorCalloutHandler = function (fieldId, message) {
        var _this = this;
        this.setState(function (prevState) {
            var crntItem = prevState.crntItem, errorMsgs = prevState.errorMsgs;
            // Get the current field
            var fieldIdx = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__["findIndex"])(_this.props.fields, function (f) { return f.id === fieldId; });
            if (fieldIdx === -1) {
                return;
            }
            var field = _this.props.fields[fieldIdx];
            // Check if there already is a message for the field
            var fieldMsgIdx = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__["findIndex"])(errorMsgs, function (msg) { return msg.field === field.title; });
            // Add message
            var fieldMsg;
            if (fieldMsgIdx === -1) {
                fieldMsg = {
                    field: field.title,
                    message: message
                };
            }
            else {
                // Update message
                fieldMsg = errorMsgs[fieldMsgIdx];
                if (fieldMsg) {
                    fieldMsg.message = message;
                }
            }
            // Check if field required message needs to be shown
            if (field.required) {
                if (typeof crntItem[field.id] === "undefined" || crntItem[field.id] === null || crntItem[field.id] === "") {
                    fieldMsg.isRequired = true;
                }
                else {
                    fieldMsg.isRequired = false;
                }
            }
            // If required and message are false, it doesn't need to be added
            if (!fieldMsg.message && !fieldMsg.isRequired) {
                // Remove the item
                if (fieldMsgIdx !== -1) {
                    errorMsgs.splice(fieldMsgIdx, 1);
                }
            }
            else {
                if (fieldMsgIdx === -1) {
                    errorMsgs.push(fieldMsg);
                }
            }
            // Sort based on the index
            errorMsgs = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_11__["sortBy"])(errorMsgs, ["field"]);
            return {
                errorMsgs: errorMsgs
            };
        });
    };
    /**
     * Render the field
     *
     * @param field
     * @param item
     */
    CollectionDataItem.prototype.renderField = function (field, item) {
        var _this = this;
        var disableFieldOnEdit = field.disableEdit && !!this.props.fUpdateItem;
        switch (field.type) {
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].boolean:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], { checked: item[field.id] ? item[field.id] : false, onChange: function (ev, value) { return _this.onValueChanged(field.id, value); }, disabled: disableFieldOnEdit, className: "PropertyFieldCollectionData__panel__boolean-field" });
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].dropdown:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionDropdownField_CollectionDropdownField__WEBPACK_IMPORTED_MODULE_15__["CollectionDropdownField"], { field: field, item: item, disableEdit: disableFieldOnEdit, fOnValueChange: this.onValueChanged, fValidation: this.fieldValidation });
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].number:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionNumberField__WEBPACK_IMPORTED_MODULE_12__["CollectionNumberField"], { field: field, item: item, disableEdit: disableFieldOnEdit, fOnValueChange: this.onValueChanged, fValidation: this.fieldValidation }));
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].fabricIcon:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionIconField__WEBPACK_IMPORTED_MODULE_10__["CollectionIconField"], { field: field, item: item, disableEdit: disableFieldOnEdit, fOnValueChange: this.onValueChanged, fValidation: this.fieldValidation }));
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].color:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionColorField__WEBPACK_IMPORTED_MODULE_13__["CollectionColorField"], { field: field, item: item, disableEdit: disableFieldOnEdit, fOnValueChange: this.onValueChanged }));
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].url:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], { placeholder: field.placeholder || field.title, value: item[field.id] ? item[field.id] : "", required: field.required, disabled: disableFieldOnEdit, className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collectionDataField, onChanged: function (value) { return _this.onValueChanged(field.id, value); }, deferredValidationTime: field.deferredValidationTime || field.deferredValidationTime >= 0 ? field.deferredValidationTime : 200, onGetErrorMessage: function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.urlFieldValidation(field, value, item)];
                    }); }); }, inputClassName: "PropertyFieldCollectionData__panel__url-field" });
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].custom:
                if (field.onCustomRender) {
                    return field.onCustomRender(field, item[field.id], this.onValueChanged, item, item.uniqueId, this.onCustomFieldValidation);
                }
                return null;
            case ___WEBPACK_IMPORTED_MODULE_7__["CustomCollectionFieldType"].string:
            default:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], { placeholder: field.placeholder || field.title, className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collectionDataField, value: item[field.id] ? item[field.id] : "", required: field.required, disabled: disableFieldOnEdit, onChanged: function (value) { return _this.onValueChanged(field.id, value); }, deferredValidationTime: field.deferredValidationTime || field.deferredValidationTime >= 0 ? field.deferredValidationTime : 200, onGetErrorMessage: function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.fieldValidation(field, value)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }, inputClassName: "PropertyFieldCollectionData__panel__string-field" });
        }
    };
    /**
     * Retrieve all dropdown options
     */
    CollectionDataItem.prototype.getSortingOptions = function () {
        var opts = [];
        var totalItems = this.props.totalItems;
        for (var i = 1; i <= totalItems; i++) {
            opts.push({
                text: i.toString(),
                key: i
            });
        }
        return opts;
    };
    /**
    * Creates an empty item with a unique id
    */
    CollectionDataItem.prototype.generateEmptyItem = function () {
        // Create an empty item with all properties
        var emptyItem = {};
        emptyItem.uniqueId = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_14__["Guid"].newGuid().toString();
        for (var _i = 0, _a = this.props.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            // Assign default value or null to the emptyItem
            emptyItem[field.id] = field.defaultValue || null;
        }
        return emptyItem;
    };
    /**
     * Default React render
     */
    CollectionDataItem.prototype.render = function () {
        var _this = this;
        var crntItem = this.state.crntItem;
        var opts = this.getSortingOptions();
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__table-row " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableRow + " " + (this.props.index === null ? _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableFooter : "") },
            (this.props.sortingEnabled && this.props.totalItems) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "PropertyFieldCollectionData__panel__sorting-field " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], { options: opts, selectedKey: this.props.index + 1, onChanged: function (opt) { return _this.props.fOnSorting(_this.props.index, opt.key); } }))),
            (this.props.sortingEnabled && this.props.totalItems === null) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "" + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell })),
            this.props.fields.map(function (f) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: "dataitem-" + f.id, className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell + " " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputField }, _this.renderField(f, crntItem))); }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { ref: function (ref) { return _this.calloutCellRef = ref; } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], { title: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__["CollectionDataItemShowErrorsLabel"], className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorCalloutLink, disabled: !this.state.errorMsgs || this.state.errorMsgs.length === 0, onClick: this.toggleErrorCallout },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: "Error" }))),
                this.state.showCallout && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Callout__WEBPACK_IMPORTED_MODULE_9__["Callout"], { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorCallout, target: this.calloutCellRef, isBeakVisible: true, directionalHint: office_ui_fabric_react_lib_components_Callout__WEBPACK_IMPORTED_MODULE_9__["DirectionalHint"].bottomLeftEdge, directionalHintForRTL: office_ui_fabric_react_lib_components_Callout__WEBPACK_IMPORTED_MODULE_9__["DirectionalHint"].rightBottomEdge, onDismiss: this.hideErrorCallout }, (this.state.errorMsgs && this.state.errorMsgs.length > 0) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMsgs },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Field issues:"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.state.errorMsgs.map(function (msg, idx) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: msg.field + "-" + idx },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, msg.field),
                        ": ",
                        msg.message ? msg.message : msg.isRequired ? PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__["CollectionDataItemFieldRequiredLabel"] : null)); }))))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell }, 
            /* Check add or delete action */
            this.props.index !== null ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], { title: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__["CollectionDeleteRowButtonLabel"], disabled: !this.props.fDeleteItem || this.props.disableItemDeletion, onClick: this.deleteRow },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: "Clear" }))) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Link__WEBPACK_IMPORTED_MODULE_4__["Link"], { title: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_6__["CollectionAddRowButtonLabel"], className: "" + (this.disableAdd(crntItem) ? "" : _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn), disabled: this.disableAdd(crntItem), onClick: this.addRow },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: "Add" }))))));
    };
    return CollectionDataItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=CollectionDataItem.js.map

/***/ }),

/***/ "9NG+":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.js ***!
  \********************************************************************************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Panel_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.base */ "pZcz");
/* harmony import */ var _Panel_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel.styles */ "2OYF");



/**
 * Panel description
 */
var Panel = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Panel_base__WEBPACK_IMPORTED_MODULE_1__["PanelBase"], _Panel_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Panel'
});
//# sourceMappingURL=Panel.js.map

/***/ }),

/***/ "ARNr":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/@pnp/spfx-property-controls/lib/propertyFields/errorMessage/FieldErrorMessage.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".errorMessage_67aeb894{font-size:12px;font-weight:400;color:#a80000;margin:0;padding-top:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.errorIcon_67aeb894{font-size:14px;margin-right:5px}", ""]);


/***/ }),

/***/ "AzTC":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.base.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "uUJR");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KeytipData */ "ASEy");





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var CheckboxBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxBase, _super);
    /**
     * Initialize a new instance of the Checkbox
     * @param props - Props for the component
     * @param context - Context or initial state for the base component.
     */
    function CheckboxBase(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._checkBox = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onFocus = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onFocus) {
                inputProps.onFocus(ev);
            }
        };
        _this._onBlur = function (ev) {
            var inputProps = _this.props.inputProps;
            if (inputProps && inputProps.onBlur) {
                inputProps.onBlur(ev);
            }
        };
        _this._onChange = function (ev) {
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            var isChecked = _this.state.isChecked;
            if (!disabled) {
                if (onChange) {
                    onChange(ev, !isChecked);
                }
                if (_this.props.checked === undefined) {
                    _this.setState({ isChecked: !isChecked });
                }
            }
        };
        _this._onRenderLabel = function (props) {
            var label = props.label;
            return label ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { "aria-hidden": "true", className: _this._classNames.text }, label)) : null;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])('Checkbox', props, {
                checked: 'defaultChecked'
            });
        }
        _this._id = _this.props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('checkbox-');
        _this.state = {
            isChecked: !!(props.checked !== undefined ? props.checked : props.defaultChecked)
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeFocusRects"])();
        return _this;
    }
    CheckboxBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.checked !== undefined) {
            this.setState({
                isChecked: !!newProps.checked // convert null to false
            });
        }
    };
    /**
     * Render the Checkbox based on passed props
     */
    CheckboxBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, checked = _a.checked, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, inputProps = _a.inputProps, name = _a.name, boxSide = _a.boxSide, theme = _a.theme, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, styles = _a.styles, _b = _a.onRenderLabel, onRenderLabel = _b === void 0 ? this._onRenderLabel : _b, checkmarkIconProps = _a.checkmarkIconProps, ariaPositionInSet = _a.ariaPositionInSet, ariaSetSize = _a.ariaSetSize, keytipProps = _a.keytipProps, title = _a.title, label = _a.label;
        var isChecked = checked === undefined ? this.state.isChecked : checked;
        var isReversed = boxSide !== 'start' ? true : false;
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            disabled: disabled,
            checked: isChecked,
            reversed: isReversed,
            isUsingCustomLabelRender: onRenderLabel !== this._onRenderLabel
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.root },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: "checkbox" }, inputProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'] }, checked !== undefined && { checked: checked }, defaultChecked !== undefined && { defaultChecked: defaultChecked }, { disabled: disabled, className: _this._classNames.input, ref: _this._checkBox, name: name, id: _this._id, title: title, onChange: _this._onChange, onFocus: _this._onFocus, onBlur: _this._onBlur, "aria-disabled": disabled, "aria-label": ariaLabel || label, "aria-labelledby": ariaLabelledBy, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), "aria-posinset": ariaPositionInSet, "aria-setsize": ariaSetSize })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: _this._classNames.label, htmlFor: _this._id },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.checkbox, "data-ktp-target": keytipAttributes['data-ktp-target'] },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ iconName: "CheckMark" }, checkmarkIconProps, { className: _this._classNames.checkmark }))),
                onRenderLabel(_this.props, _this._onRenderLabel)))); }));
    };
    Object.defineProperty(CheckboxBase.prototype, "checked", {
        get: function () {
            return this.state.isChecked;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxBase.prototype.focus = function () {
        if (this._checkBox.current) {
            this._checkBox.current.focus();
        }
    };
    CheckboxBase.defaultProps = {
        boxSide: 'start'
    };
    return CheckboxBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Checkbox.base.js.map

/***/ }),

/***/ "B2jj":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionColorField/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: CollectionColorField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionColorField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionColorField */ "RY1Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionColorField", function() { return _CollectionColorField__WEBPACK_IMPORTED_MODULE_0__["CollectionColorField"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "BGyn":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.base */ "Plk9");
/* harmony import */ var _Dropdown_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.styles */ "EuCp");



var Dropdown = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Dropdown_base__WEBPACK_IMPORTED_MODULE_1__["DropdownBase"], _Dropdown_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Dropdown'
});
//# sourceMappingURL=Dropdown.js.map

/***/ }),

/***/ "E7D7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Dropdown.js ***!
  \******************************************************************************************************/
/*! exports provided: Dropdown, DropdownBase, DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Dropdown/index */ "Vi1w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["DropdownBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["DropdownMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _components_Dropdown_index__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });


//# sourceMappingURL=Dropdown.js.map

/***/ }),

/***/ "EC+E":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Overlay.js ***!
  \*****************************************************************************************************/
/*! exports provided: Overlay, OverlayBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Overlay_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Overlay/index */ "SPHF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _components_Overlay_index__WEBPACK_IMPORTED_MODULE_0__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayBase", function() { return _components_Overlay_index__WEBPACK_IMPORTED_MODULE_0__["OverlayBase"]; });


//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "EuCp":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.styles.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "Gc2k");


var GlobalClassNames = {
    root: 'ms-Dropdown-container',
    label: 'ms-Dropdown-label',
    dropdown: 'ms-Dropdown',
    title: 'ms-Dropdown-title',
    caretDownWrapper: 'ms-Dropdown-caretDownWrapper',
    caretDown: 'ms-Dropdown-caretDown',
    callout: 'ms-Dropdown-callout',
    panel: 'ms-Dropdown-panel',
    dropdownItems: 'ms-Dropdown-items',
    dropdownItem: 'ms-Dropdown-item',
    dropdownDivider: 'ms-Dropdown-divider',
    dropdownOptionText: 'ms-Dropdown-optionText',
    dropdownItemHeader: 'ms-Dropdown-header',
    titleIsPlaceHolder: 'ms-Dropdown-titleIsPlaceHolder',
    titleHasError: 'ms-Dropdown-title--hasError'
};
var DROPDOWN_HEIGHT = 32;
var DROPDOWN_ITEM_HEIGHT = 32;
var highContrastAdjustMixin = (_a = {},
    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"] + ", " + _Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorWhite"].replace('@media ', '')] = {
        MsHighContrastAdjust: 'none'
    },
    _a);
var highContrastItemAndTitleStateMixin = {
    selectors: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
        backgroundColor: 'Highlight',
        borderColor: 'Highlight',
        color: 'HighlightText',
        selectors: {
            ':hover': {
                color: 'HighlightText' // overrides the hover styling for buttons that are also selected
            }
        }
    }, _b), highContrastAdjustMixin)
};
var highContrastBorderState = {
    selectors: (_c = {},
        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
            borderColor: 'Highlight'
        },
        _c)
};
var MinimumScreenSelector = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"])(0, _Styling__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinMedium"]);
var getStyles = function (props) {
    var theme = props.theme, hasError = props.hasError, hasLabel = props.hasLabel, className = props.className, isOpen = props.isOpen, disabled = props.disabled, required = props.required, isRenderingPlaceholder = props.isRenderingPlaceholder, panelClassName = props.panelClassName, calloutClassName = props.calloutClassName;
    if (!theme) {
        throw new Error('theme is undefined or null in base Dropdown getStyles function.');
    }
    var globalClassnames = Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var rootHoverFocusActiveSelectorNeutralDarkMixin = {
        color: semanticColors.menuItemTextHovered
    };
    var rootHoverFocusActiveSelectorBodySubtextMixin = {
        color: semanticColors.bodySubtext
    };
    var borderColorError = {
        borderColor: semanticColors.errorText
    };
    var dropdownItemStyle = [
        globalClassnames.dropdownItem,
        {
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'block',
            padding: '4px 16px',
            width: '100%',
            minHeight: DROPDOWN_ITEM_HEIGHT,
            lineHeight: 20,
            height: 'auto',
            position: 'relative',
            border: '1px solid transparent',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            textAlign: 'left'
        }
    ];
    var dropdownItemSelected = dropdownItemStyle.concat([
        {
            backgroundColor: palette.neutralQuaternaryAlt,
            color: palette.black
        },
        highContrastItemAndTitleStateMixin
    ]);
    var dropdownItemDisabled = dropdownItemStyle.concat([
        {
            color: semanticColors.disabledText,
            cursor: 'default'
        }
    ]);
    return {
        root: globalClassnames.root,
        label: globalClassnames.label,
        dropdown: [
            globalClassnames.dropdown,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["normalize"],
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme.fonts.medium, { color: semanticColors.menuItemText, position: 'relative', outline: 0, userSelect: 'none', selectors: (_a = {},
                    _a['&:hover .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: palette.neutralDark },
                        highContrastBorderState
                    ],
                    _a['&:focus .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        {
                            borderColor: palette.themePrimary /* see https://github.com/OfficeDev/office-ui-fabric-react/pull/9182 for semantic color disc */
                        },
                        highContrastItemAndTitleStateMixin
                    ],
                    _a['&:active .' + globalClassnames.title] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { borderColor: palette.themeDark },
                        highContrastBorderState
                    ],
                    _a['&:hover .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                    _a['&:focus .' + globalClassnames.caretDown] = [
                        !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                        { selectors: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]((_b = {}, _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = { color: 'HighlightText' }, _b), highContrastAdjustMixin) }
                    ],
                    _a['&:active .' + globalClassnames.caretDown] = !disabled && rootHoverFocusActiveSelectorNeutralDarkMixin,
                    _a['&:hover .' + globalClassnames.titleIsPlaceHolder] = rootHoverFocusActiveSelectorBodySubtextMixin,
                    _a['&:focus .' + globalClassnames.titleIsPlaceHolder] = rootHoverFocusActiveSelectorBodySubtextMixin,
                    _a['&:active .' + globalClassnames.titleIsPlaceHolder] = rootHoverFocusActiveSelectorBodySubtextMixin,
                    _a['&:hover .' + globalClassnames.titleHasError] = borderColorError,
                    _a['&:active .' + globalClassnames.titleHasError] = borderColorError,
                    _a['&:focus .' + globalClassnames.titleHasError] = borderColorError,
                    _a) }),
            className,
            isOpen && 'is-open',
            disabled && 'is-disabled',
            required && 'is-required',
            required &&
                !hasLabel && {
                selectors: (_c = {
                        ':after': {
                            content: "'*'",
                            color: semanticColors.errorText,
                            position: 'absolute',
                            top: -5,
                            right: -10
                        }
                    },
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        selectors: {
                            ':after': {
                                right: -14 // moving the * 4 pixel to right to alleviate border clipping in HC mode.
                            }
                        }
                    },
                    _c)
            }
        ],
        title: [
            globalClassnames.title,
            _Styling__WEBPACK_IMPORTED_MODULE_1__["normalize"],
            {
                backgroundColor: semanticColors.inputBackground,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: semanticColors.inputBorder,
                cursor: 'pointer',
                display: 'block',
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2,
                padding: "0 " + DROPDOWN_HEIGHT + "px 0 12px",
                position: 'relative',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            },
            isRenderingPlaceholder && [globalClassnames.titleIsPlaceHolder, { color: semanticColors.inputPlaceholderText }],
            hasError && [globalClassnames.titleHasError, borderColorError],
            disabled && {
                backgroundColor: semanticColors.disabledBackground,
                border: 'none',
                color: semanticColors.disabledText,
                cursor: 'default',
                selectors: (_d = {}, _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = { border: '1px solid GrayText', color: 'GrayText' }, _d)
            }
        ],
        caretDownWrapper: [
            globalClassnames.caretDownWrapper,
            {
                position: 'absolute',
                top: 1,
                right: 12,
                height: DROPDOWN_HEIGHT,
                lineHeight: DROPDOWN_HEIGHT - 2 // height minus the border
            },
            !disabled && {
                cursor: 'pointer'
            }
        ],
        caretDown: [
            globalClassnames.caretDown,
            { color: semanticColors.bodySubtext, fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].small, pointerEvents: 'none' },
            disabled && { color: semanticColors.disabledText, selectors: (_e = {}, _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = { color: 'GrayText' }, _e) }
        ],
        errorMessage: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ color: semanticColors.errorText }, theme.fonts.small, { paddingTop: 5 }),
        callout: [
            globalClassnames.callout,
            {
                boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
                border: "1px solid " + semanticColors.variantBorder
            },
            calloutClassName
        ],
        dropdownItemsWrapper: { selectors: { '&:focus': { outline: 0 } } },
        dropdownItems: [globalClassnames.dropdownItems, { display: 'block' }],
        dropdownItem: dropdownItemStyle.concat([
            {
                selectors: (_f = {},
                    _f[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        borderColor: 'Window'
                    },
                    _f['&:hover'] = {
                        color: 'inherit'
                    },
                    _f['&:focus'] = {
                        backgroundColor: semanticColors.listItemBackgroundHovered
                    },
                    _f['&:active'] = {
                        backgroundColor: semanticColors.listHeaderBackgroundHovered,
                        color: palette.black
                    },
                    _f)
            }
        ]),
        dropdownItemSelected: dropdownItemSelected,
        dropdownItemDisabled: dropdownItemDisabled,
        dropdownItemSelectedAndDisabled: [dropdownItemSelected, dropdownItemDisabled, { backgroundColor: 'transparent' }],
        dropdownItemHidden: dropdownItemStyle.concat([{ display: 'none' }]),
        dropdownDivider: [globalClassnames.dropdownDivider, { height: 1, backgroundColor: semanticColors.bodyDivider }],
        dropdownOptionText: [
            globalClassnames.dropdownOptionText,
            {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                minWidth: 0,
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                margin: '1px'
            }
        ],
        dropdownItemHeader: [
            globalClassnames.dropdownItemHeader,
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme.fonts.medium, { fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, color: semanticColors.menuHeader, background: 'none', backgroundColor: 'transparent', border: 'none', height: DROPDOWN_ITEM_HEIGHT, lineHeight: DROPDOWN_ITEM_HEIGHT, cursor: 'default', padding: '0px 16px', userSelect: 'none', textAlign: 'left' })
        ],
        subComponentStyles: {
            label: { root: { display: 'inline-block' } },
            panel: {
                root: [panelClassName],
                main: {
                    // Force drop shadow even under medium breakpoint
                    boxShadow: '-30px 0px 30px -30px rgba(0,0,0,0.2)',
                    selectors: (_g = {},
                        // In case of extra small screen sizes
                        _g[MinimumScreenSelector] = {
                            // panelWidth xs
                            width: 272
                        },
                        _g)
                },
                contentInner: { padding: '0 0 20px' }
            }
        }
    };
    var _a, _b, _c, _d, _e, _f, _g;
};
var _a, _b, _c;
//# sourceMappingURL=Dropdown.styles.js.map

/***/ }),

/***/ "HR+7":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/index.js ***!
  \*********************************************************************************************/
/*! exports provided: CustomCollectionFieldType, PropertyFieldCollectionData, PropertyFieldCollectionDataHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ICustomCollectionField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ICustomCollectionField */ "JaqE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCollectionFieldType", function() { return _ICustomCollectionField__WEBPACK_IMPORTED_MODULE_0__["CustomCollectionFieldType"]; });

/* harmony import */ var _PropertyFieldCollectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyFieldCollectionData */ "Lcy0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionData", function() { return _PropertyFieldCollectionData__WEBPACK_IMPORTED_MODULE_1__["PropertyFieldCollectionData"]; });

/* harmony import */ var _PropertyFieldCollectionDataHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyFieldCollectionDataHost */ "TUT9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionDataHost", function() { return _PropertyFieldCollectionDataHost__WEBPACK_IMPORTED_MODULE_2__["PropertyFieldCollectionDataHost"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JaqE":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/ICustomCollectionField.js ***!
  \**************************************************************************************************************/
/*! exports provided: CustomCollectionFieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCollectionFieldType", function() { return CustomCollectionFieldType; });
var CustomCollectionFieldType;
(function (CustomCollectionFieldType) {
    CustomCollectionFieldType[CustomCollectionFieldType["string"] = 1] = "string";
    CustomCollectionFieldType[CustomCollectionFieldType["number"] = 2] = "number";
    CustomCollectionFieldType[CustomCollectionFieldType["boolean"] = 3] = "boolean";
    CustomCollectionFieldType[CustomCollectionFieldType["dropdown"] = 4] = "dropdown";
    CustomCollectionFieldType[CustomCollectionFieldType["fabricIcon"] = 5] = "fabricIcon";
    CustomCollectionFieldType[CustomCollectionFieldType["url"] = 6] = "url";
    CustomCollectionFieldType[CustomCollectionFieldType["custom"] = 7] = "custom";
    CustomCollectionFieldType[CustomCollectionFieldType["color"] = 8] = "color";
})(CustomCollectionFieldType || (CustomCollectionFieldType = {}));
//# sourceMappingURL=ICustomCollectionField.js.map

/***/ }),

/***/ "Lcy0":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/PropertyFieldCollectionData.js ***!
  \*******************************************************************************************************************/
/*! exports provided: PropertyFieldCollectionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionData", function() { return PropertyFieldCollectionData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "fVfA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "HR+7");
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




/**
 * Property Field Collection Data Builder Class
 */
var PropertyFieldCollectionDataBuilder = /** @class */ (function () {
    function PropertyFieldCollectionDataBuilder(_targetProperty, _properties) {
        this.type = _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneFieldType"].Custom;
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.properties.onRender = this.render.bind(this);
        this.properties.onDispose = this.dispose.bind(this);
    }
    PropertyFieldCollectionDataBuilder.prototype.render = function (elem, context, changeCallback) {
        var props = this.properties;
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_3__["PropertyFieldCollectionDataHost"], __assign({}, props, { onChanged: this.onChanged.bind(this) }));
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, elem);
        if (changeCallback) {
            this._onChangeCallback = changeCallback;
        }
    };
    /**
     * Dispose the property field
     */
    PropertyFieldCollectionDataBuilder.prototype.dispose = function (elem) {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](elem);
    };
    /**
     * On field change event handler
     * @param value
     */
    PropertyFieldCollectionDataBuilder.prototype.onChanged = function (value) {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.targetProperty, value);
        }
    };
    return PropertyFieldCollectionDataBuilder;
}());
/**
 * Property field
 * @param targetProperty
 * @param properties
 */
function PropertyFieldCollectionData(targetProperty, properties) {
    return new PropertyFieldCollectionDataBuilder(targetProperty, __assign({}, properties, { onRender: null, onDispose: null }));
}
//# sourceMappingURL=PropertyFieldCollectionData.js.map

/***/ }),

/***/ "Mmr5":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/errorMessage/FieldErrorMessage.module.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../postcss-loader/src??postcss!./FieldErrorMessage.module.css */ "ARNr");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "N3ZD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/errorMessage/FieldErrorMessage.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldErrorMessage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldErrorMessage.module.scss */ "Rlnv");
/* harmony import */ var office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Icon */ "uUJR");
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



/**
 * Component that shows an error message when something went wront with the property control
 */
var FieldErrorMessage = /** @class */ (function (_super) {
    __extends(FieldErrorMessage, _super);
    function FieldErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldErrorMessage.prototype.render = function () {
        if (this.props.errorMessage !== 'undefined' && this.props.errorMessage !== null && this.props.errorMessage !== '') {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { "aria-live": "assertive" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "ms-TextField-errorMessage " + _FieldErrorMessage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Icon__WEBPACK_IMPORTED_MODULE_2__["Icon"], { iconName: 'Error', className: _FieldErrorMessage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorIcon }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "data-automation-id": "error-message" }, this.props.errorMessage))));
        }
        else {
            return null;
        }
    };
    return FieldErrorMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (FieldErrorMessage);
//# sourceMappingURL=FieldErrorMessage.js.map

/***/ }),

/***/ "Plk9":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.base.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: DropdownBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return DropdownBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Callout */ "Bswb");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Checkbox */ "pQEv");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Button */ "9QpN");
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/DirectionalHint */ "X6uu");
/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown.types */ "qIec");
/* harmony import */ var _utilities_DropdownSizePosCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/DropdownSizePosCache */ "Uj4X");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../FocusZone */ "5U38");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Icon */ "uUJR");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Label */ "AvzG");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../KeytipData */ "ASEy");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Panel */ "ruqu");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "p6i1");
/* harmony import */ var _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/selectableOption/index */ "fi/X");
















var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var DropdownBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DropdownBase, _super);
    function DropdownBase(props) {
        var _this = _super.call(this, props) || this;
        _this._host = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._focusZone = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._dropDown = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._scrollIdleDelay = 250 /* ms */;
        _this._sizePosCache = new _utilities_DropdownSizePosCache__WEBPACK_IMPORTED_MODULE_8__["DropdownSizePosCache"]();
        _this._requestAnimationFrame = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["safeRequestAnimationFrame"])(_this);
        _this._onChange = function (event, options, index, checked, multiSelect) {
            var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged;
            if (onChange) {
                // for single-select, option passed in will always be selected.
                // for multi-select, flip the checked value
                var changedOpt = multiSelect ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options[index], { selected: !checked }) : options[index];
                onChange(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { target: _this._dropDown.current }), changedOpt, index);
            }
            if (onChanged) {
                // for single-select, option passed in will always be selected.
                // for multi-select, flip the checked value
                var changedOpt = multiSelect ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options[index], { selected: !checked }) : options[index];
                onChanged(changedOpt, index);
            }
        };
        /** Render text in dropdown input */
        _this._onRenderTitle = function (items) {
            var _a = _this.props.multiSelectDelimiter, multiSelectDelimiter = _a === void 0 ? ', ' : _a;
            var displayTxt = items.map(function (i) { return i.text; }).join(multiSelectDelimiter);
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, displayTxt);
        };
        /** Render placeholder text in dropdown input */
        _this._onRenderPlaceholder = function (props) {
            if (!_this._placeholder) {
                return null;
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, _this._placeholder);
        };
        /** Render Callout or Panel container and pass in list */
        _this._onRenderContainer = function (props) {
            var calloutProps = props.calloutProps, panelProps = props.panelProps;
            var _a = _this.props, responsiveMode = _a.responsiveMode, dropdownWidth = _a.dropdownWidth;
            var isSmall = responsiveMode <= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__["ResponsiveMode"].medium;
            var panelStyles = _this._classNames.subComponentStyles
                ? _this._classNames.subComponentStyles.panel
                : undefined;
            return isSmall ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Panel__WEBPACK_IMPORTED_MODULE_13__["Panel"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ isOpen: true, isLightDismiss: true, onDismissed: _this._onDismiss, hasCloseButton: false, styles: panelStyles }, panelProps), _this._renderFocusableList(props))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_3__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ isBeakVisible: false, gapSpace: 0, doNotLayer: false, directionalHintFixed: false, directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_6__["DirectionalHint"].bottomLeftEdge }, calloutProps, { className: _this._classNames.callout, target: _this._dropDown.current, onDismiss: _this._onDismiss, onScroll: _this._onScroll, onPositioned: _this._onPositioned, calloutWidth: dropdownWidth || (_this._dropDown.current ? _this._dropDown.current.clientWidth : 0) }), _this._renderFocusableList(props)));
        };
        /** Render Caret Down Icon */
        _this._onRenderCaretDown = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_10__["Icon"], { className: _this._classNames.caretDown, iconName: "ChevronDown", "aria-hidden": true });
        };
        /** Render List of items */
        _this._onRenderList = function (props) {
            var _a = props.onRenderItem, onRenderItem = _a === void 0 ? _this._onRenderItem : _a;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, props.options.map(function (item, index) { return onRenderItem(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { index: index }), _this._onRenderItem); }));
        };
        _this._onRenderItem = function (item) {
            switch (item.itemType) {
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Divider:
                    return _this._renderSeparator(item);
                case _utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["SelectableOptionMenuItemType"].Header:
                    return _this._renderHeader(item);
                default:
                    return _this._renderOption(item);
            }
        };
        _this._renderOption = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOption : _a;
            var _b = _this.state.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
            var id = _this._id;
            var isItemSelected = item.index !== undefined && selectedIndices ? selectedIndices.indexOf(item.index) > -1 : false;
            // select the right className based on the combination of selected/disabled
            var itemClassName = item.hidden // predicate: item hidden
                ? _this._classNames.dropdownItemHidden
                : isItemSelected && item.disabled === true // predicate: both selected and disabled
                    ? _this._classNames.dropdownItemSelectedAndDisabled
                    : isItemSelected // predicate: selected only
                        ? _this._classNames.dropdownItemSelected
                        : item.disabled === true // predicate: disabled only
                            ? _this._classNames.dropdownItemDisabled
                            : _this._classNames.dropdownItem;
            return !_this.props.multiSelect ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_5__["CommandButton"], { id: id + '-list' + item.index, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, className: itemClassName, onClick: _this._onItemClick(item), onMouseEnter: _this._onItemMouseEnter.bind(_this, item), onMouseLeave: _this._onMouseItemLeave.bind(_this, item), onMouseMove: _this._onItemMouseMove.bind(_this, item), role: "option", "aria-selected": isItemSelected ? 'true' : 'false', ariaLabel: item.ariaLabel, title: item.title ? item.title : item.text }, onRenderOption(item, _this._onRenderOption))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], { id: id + '-list' + item.index, key: item.key, "data-index": item.index, "data-is-focusable": !item.disabled, disabled: item.disabled, onChange: _this._onItemClick(item), inputProps: {
                    onMouseEnter: _this._onItemMouseEnter.bind(_this, item),
                    onMouseLeave: _this._onMouseItemLeave.bind(_this, item),
                    onMouseMove: _this._onItemMouseMove.bind(_this, item)
                }, label: item.text, title: item.title ? item.title : item.text, onRenderLabel: _this._onRenderLabel.bind(_this, item), className: itemClassName, role: "option", "aria-selected": isItemSelected ? 'true' : 'false', checked: isItemSelected }));
        };
        /** Render content of item (i.e. text/icon inside of button) */
        _this._onRenderOption = function (item) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.dropdownOptionText }, item.text);
        };
        /** Render custom label for drop down item */
        _this._onRenderLabel = function (item) {
            var _a = _this.props.onRenderOption, onRenderOption = _a === void 0 ? _this._onRenderOption : _a;
            return onRenderOption(item, _this._onRenderOption);
        };
        _this._onPositioned = function (positions) {
            if (_this._focusZone.current) {
                // Focusing an element can trigger a reflow. Making this wait until there is an animation
                // frame can improve perf significantly.
                _this._requestAnimationFrame(function () {
                    var selectedIndices = _this.state.selectedIndices;
                    if (selectedIndices && selectedIndices[0] && !_this.props.options[selectedIndices[0]].disabled) {
                        var element = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])().querySelector("#" + _this._id + "-list" + selectedIndices[0]);
                        _this._focusZone.current.focusElement(element);
                    }
                    else {
                        _this._focusZone.current.focus();
                    }
                });
            }
            if (!_this.state.calloutRenderEdge || _this.state.calloutRenderEdge !== positions.targetEdge) {
                _this.setState({
                    calloutRenderEdge: positions.targetEdge
                });
            }
        };
        _this._onItemClick = function (item) {
            return function (event) {
                if (!item.disabled) {
                    _this.setSelectedIndex(event, item.index);
                    if (!_this.props.multiSelect) {
                        // only close the callout when it's in single-select mode
                        _this.setState({
                            isOpen: false
                        });
                    }
                }
            };
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = setTimeout(function () {
                _this._isScrollIdle = true;
            }, _this._scrollIdleDelay);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (_this._shouldIgnoreMouseEvent()) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.current) {
                if (_this._host.current.setActive) {
                    try {
                        _this._host.current.setActive();
                    }
                    catch (e) {
                        /* no-op */
                    }
                }
                else {
                    _this._host.current.focus();
                }
            }
        };
        _this._onDismiss = function () {
            _this.setState({ isOpen: false });
            if (_this._dropDown.current) {
                _this._dropDown.current.focus();
            }
        };
        _this._onDropdownBlur = function (ev) {
            // If Dropdown disabled do not proceed with this logic.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            // hasFocus tracks whether the root element has focus so always update the state.
            _this.setState({ hasFocus: false });
            if (_this.state.isOpen) {
                // Do not onBlur when the callout is opened
                return;
            }
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };
        _this._onDropdownKeyDown = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
                if (ev.defaultPrevented) {
                    return;
                }
            }
            var newIndex;
            var selectedIndex = _this.state.selectedIndices.length ? _this.state.selectedIndices[0] : -1;
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            var isOpen = _this.state.isOpen;
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].enter:
                    _this.setState({
                        isOpen: !isOpen
                    });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    if (!isOpen) {
                        return;
                    }
                    _this.setState({
                        isOpen: false
                    });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    if (containsExpandCollapseModifier) {
                        if (isOpen) {
                            _this.setState({ isOpen: false });
                            break;
                        }
                        return;
                    }
                    if (_this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, -1, selectedIndex - 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    if (containsExpandCollapseModifier) {
                        ev.stopPropagation();
                        ev.preventDefault();
                    }
                    if ((containsExpandCollapseModifier && !isOpen) || _this.props.multiSelect) {
                        _this.setState({ isOpen: true });
                    }
                    else if (!_this._isDisabled()) {
                        newIndex = _this._moveIndex(ev, 1, selectedIndex + 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].home:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, 1, 0, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].end:
                    if (!_this.props.multiSelect) {
                        newIndex = _this._moveIndex(ev, -1, _this.props.options.length - 1, selectedIndex);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space:
                    // event handled in _onDropdownKeyUp
                    break;
                default:
                    return;
            }
            if (newIndex !== selectedIndex) {
                ev.stopPropagation();
                ev.preventDefault();
            }
        };
        _this._onDropdownKeyUp = function (ev) {
            // If Dropdown disabled do not process any keyboard events.
            var disabled = _this._isDisabled();
            if (disabled) {
                return;
            }
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            var isOpen = _this.state.isOpen;
            if (_this.props.onKeyUp) {
                _this.props.onKeyUp(ev);
                if (ev.preventDefault) {
                    return;
                }
            }
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].space:
                    _this.setState({
                        isOpen: !isOpen
                    });
                    break;
                default:
                    if (shouldHandleKey && isOpen) {
                        _this.setState({ isOpen: false });
                    }
                    return;
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyDown = function (ev) {
            var elementToFocus;
            // Take note if we are processing an alt (option) or meta (command) keydown.
            // See comment in _shouldHandleKeyUp for reasoning.
            _this._lastKeyDownWasAltOrMeta = _this._isAltOrMeta(ev);
            var containsExpandCollapseModifier = ev.altKey || ev.metaKey;
            switch (ev.which) {
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].up:
                    if (containsExpandCollapseModifier) {
                        _this.setState({ isOpen: false });
                    }
                    else {
                        if (_this._host.current) {
                            elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getLastFocusable"])(_this._host.current, _this._host.current.lastChild, true);
                        }
                    }
                    break;
                // All directional keystrokes should be canceled when the zone is rendered.
                // This avoids the body scroll from reacting and thus dismissing the dropdown.
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].home:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].end:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].pageUp:
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].pageDown:
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].down:
                    if (!containsExpandCollapseModifier && _this._host.current) {
                        elementToFocus = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getFirstFocusable"])(_this._host.current, _this._host.current.firstChild, true);
                    }
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].escape:
                    _this.setState({ isOpen: false });
                    break;
                case _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].tab:
                    _this.setState({ isOpen: false });
                    return;
                default:
                    return;
            }
            if (elementToFocus) {
                elementToFocus.focus();
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onZoneKeyUp = function (ev) {
            var shouldHandleKey = _this._shouldHandleKeyUp(ev);
            if (shouldHandleKey && _this.state.isOpen) {
                _this.setState({ isOpen: false });
                ev.preventDefault();
            }
        };
        _this._onDropdownClick = function (ev) {
            if (_this.props.onClick) {
                _this.props.onClick(ev);
                if (ev.preventDefault) {
                    return;
                }
            }
            var isOpen = _this.state.isOpen;
            var disabled = _this._isDisabled();
            if (!disabled && !_this._shouldOpenOnFocus()) {
                _this.setState({
                    isOpen: !isOpen
                });
            }
            _this._isFocusedByClick = false; // reset
        };
        _this._onDropdownMouseDown = function () {
            _this._isFocusedByClick = true;
        };
        _this._onFocus = function (ev) {
            var _a = _this.state, isOpen = _a.isOpen, selectedIndices = _a.selectedIndices;
            var multiSelect = _this.props.multiSelect;
            var disabled = _this._isDisabled();
            if (!disabled) {
                if (!_this._isFocusedByClick && !isOpen && selectedIndices.length === 0 && !multiSelect) {
                    // Per aria: https://www.w3.org/TR/wai-aria-practices-1.1/#listbox_kbd_interaction
                    _this._moveIndex(ev, 1, 0, -1);
                }
                if (_this.props.onFocus) {
                    _this.props.onFocus(ev);
                }
                var state = { hasFocus: true };
                if (_this._shouldOpenOnFocus()) {
                    state.isOpen = true;
                }
                _this.setState(state);
            }
        };
        /**
         * Because the isDisabled prop is deprecated, we have had to repeat this logic all over the place.
         * This helper method avoids all the repetition.
         */
        _this._isDisabled = function () {
            var disabled = _this.props.disabled;
            var isDisabled = _this.props.isDisabled;
            // Remove this deprecation workaround at 1.0.0
            if (isDisabled !== undefined) {
                disabled = isDisabled;
            }
            return disabled;
        };
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["initializeComponentRef"])(_this);
        if (true) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnDeprecations"])('Dropdown', props, {
                isDisabled: 'disabled',
                onChanged: 'onChange',
                placeHolder: 'placeholder',
                onRenderPlaceHolder: 'onRenderPlaceholder'
            });
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warnMutuallyExclusive"])('Dropdown', props, {
                defaultSelectedKey: 'selectedKey',
                defaultSelectedKeys: 'selectedKeys',
                selectedKeys: 'selectedKey',
                multiSelect: 'defaultSelectedKey',
                selectedKey: 'multiSelect'
            });
        }
        _this._id = props.id || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])('Dropdown');
        _this._isScrollIdle = true;
        var selectedIndices;
        if (_this.props.multiSelect) {
            var selectedKeys = props.defaultSelectedKeys !== undefined ? props.defaultSelectedKeys : props.selectedKeys;
            selectedIndices = _this._getSelectedIndexes(props.options, selectedKeys);
        }
        else {
            var selectedKey = props.defaultSelectedKey !== undefined ? props.defaultSelectedKey : props.selectedKey;
            selectedIndices = _this._getSelectedIndexes(props.options, selectedKey);
            _this._sizePosCache.updateOptions(props.options);
        }
        _this.state = {
            isOpen: false,
            selectedIndices: selectedIndices,
            hasFocus: false,
            calloutRenderEdge: undefined
        };
        return _this;
    }
    Object.defineProperty(DropdownBase.prototype, "selectedOptions", {
        /**
         * All selected options
         */
        get: function () {
            var options = this.props.options;
            var selectedIndices = this.state.selectedIndices;
            return Object(_utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["getAllSelectedOptions"])(options, selectedIndices);
        },
        enumerable: true,
        configurable: true
    });
    DropdownBase.prototype.componentWillUnmount = function () {
        clearTimeout(this._scrollIdleTimeoutId);
    };
    DropdownBase.prototype.componentWillReceiveProps = function (newProps) {
        // In controlled component usage where selectedKey is provided, update the selectedIndex
        // state if the key or options change.
        var selectedKeyProp;
        // this does a shallow compare (assumes options are pure), for the purposes of determining whether
        // defaultSelectedKey/defaultSelectedKeys are respected.
        var didOptionsChange = newProps.options !== this.props.options;
        if (newProps.multiSelect) {
            if (didOptionsChange && newProps.defaultSelectedKeys !== undefined) {
                selectedKeyProp = 'defaultSelectedKeys';
            }
            else {
                selectedKeyProp = 'selectedKeys';
            }
        }
        else {
            if (didOptionsChange && newProps.defaultSelectedKey !== undefined) {
                selectedKeyProp = 'defaultSelectedKey';
            }
            else {
                selectedKeyProp = 'selectedKey';
            }
        }
        if (newProps[selectedKeyProp] !== undefined && (newProps[selectedKeyProp] !== this.props[selectedKeyProp] || didOptionsChange)) {
            this.setState({
                selectedIndices: this._getSelectedIndexes(newProps.options, newProps[selectedKeyProp])
            });
        }
        if (newProps.options !== this.props.options && // preexisting code assumes purity of the options...
            !newProps.multiSelect // only relevant in single selection
        ) {
            this._sizePosCache.updateOptions(newProps.options);
        }
    };
    DropdownBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.isOpen === true && this.state.isOpen === false) {
            this._gotMouseMove = false;
            if (this._dropDown.current) {
                this._dropDown.current.focus();
            }
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    DropdownBase.prototype.render = function () {
        var _this = this;
        var id = this._id;
        var props = this.props;
        var className = props.className, label = props.label, options = props.options, ariaLabel = props.ariaLabel, required = props.required, errorMessage = props.errorMessage, multiSelect = props.multiSelect, keytipProps = props.keytipProps, propStyles = props.styles, theme = props.theme, panelProps = props.panelProps, calloutProps = props.calloutProps, _a = props.onRenderTitle, onRenderTitle = _a === void 0 ? this._onRenderTitle : _a, _b = props.onRenderContainer, onRenderContainer = _b === void 0 ? this._onRenderContainer : _b, _c = props.onRenderCaretDown, onRenderCaretDown = _c === void 0 ? this._onRenderCaretDown : _c;
        var _d = this.state, isOpen = _d.isOpen, selectedIndices = _d.selectedIndices, hasFocus = _d.hasFocus, calloutRenderEdge = _d.calloutRenderEdge;
        var onRenderPlaceholder = props.onRenderPlaceholder || props.onRenderPlaceHolder || this._onRenderPlaceholder;
        var selectedOptions = Object(_utilities_selectableOption_index__WEBPACK_IMPORTED_MODULE_15__["getAllSelectedOptions"])(options, selectedIndices);
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        var disabled = this._isDisabled();
        var optionId = id + '-option';
        var ariaAttrs = multiSelect || disabled
            ? {
                role: undefined,
                ariaActiveDescendant: undefined,
                childRole: undefined,
                ariaSetSize: undefined,
                ariaPosInSet: undefined,
                ariaSelected: undefined
            }
            : // single select
                {
                    role: 'listbox',
                    ariaActiveDescendant: isOpen && selectedIndices.length === 1 && selectedIndices[0] >= 0 ? this._id + '-list' + selectedIndices[0] : optionId,
                    childRole: 'option',
                    ariaSetSize: this._sizePosCache.optionSetSize,
                    ariaPosInSet: this._sizePosCache.positionInSet(selectedIndices[0]),
                    ariaSelected: selectedIndices[0] === undefined ? undefined : true
                };
        this._classNames = getClassNames(propStyles, {
            theme: theme,
            className: className,
            hasError: !!(errorMessage && errorMessage.length > 0),
            hasLabel: !!label,
            isOpen: isOpen,
            required: required,
            disabled: disabled,
            isRenderingPlaceholder: !selectedOptions.length,
            panelClassName: !!panelProps ? panelProps.className : undefined,
            calloutClassName: !!calloutProps ? calloutProps.className : undefined,
            calloutRenderEdge: calloutRenderEdge
        });
        var labelStyles = this._classNames.subComponentStyles
            ? this._classNames.subComponentStyles.label
            : undefined;
        var hasErrorMessage = !!errorMessage && errorMessage.length > 0;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.root },
            label && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_11__["Label"], { className: this._classNames.label, id: id + '-label', htmlFor: id, required: required, styles: labelStyles }, label)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_12__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipAttributes, { "data-is-focusable": !disabled, ref: _this._dropDown, id: id, tabIndex: disabled ? -1 : 0, "aria-expanded": isOpen ? 'true' : 'false', role: ariaAttrs.role, "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? id + '-label' : undefined, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(optionId, keytipAttributes['aria-describedby']), "aria-activedescendant": isOpen ? ariaAttrs.ariaActiveDescendant : undefined, "aria-required": required, "aria-disabled": disabled, "aria-owns": isOpen ? id + '-list' : undefined }, divProps, { className: _this._classNames.dropdown, onBlur: _this._onDropdownBlur, onKeyDown: _this._onDropdownKeyDown, onKeyUp: _this._onDropdownKeyUp, onClick: _this._onDropdownClick, onFocus: _this._onFocus, onMouseDown: _this._onDropdownMouseDown }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { id: optionId, className: _this._classNames.title, "aria-atomic": true, role: ariaAttrs.childRole, "aria-live": !hasFocus || disabled || multiSelect || isOpen ? 'off' : 'assertive', "aria-label": selectedOptions.length ? selectedOptions[0].text : _this._placeholder, "aria-invalid": hasErrorMessage, "aria-setsize": ariaAttrs.ariaSetSize, "aria-posinset": ariaAttrs.ariaPosInSet, "aria-selected": ariaAttrs.ariaSelected, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(hasErrorMessage && id + '-errorMessage') }, // If option is selected render title, otherwise render the placeholder text
                selectedOptions.length
                    ? onRenderTitle(selectedOptions, _this._onRenderTitle)
                    : onRenderPlaceholder(props, _this._onRenderPlaceholder)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.caretDownWrapper }, onRenderCaretDown(props, _this._onRenderCaretDown)))); }),
            isOpen && onRenderContainer(props, this._onRenderContainer),
            hasErrorMessage && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: id + '-errorMessage', className: this._classNames.errorMessage }, errorMessage))));
    };
    DropdownBase.prototype.focus = function (shouldOpenOnFocus) {
        if (this._dropDown.current && this._dropDown.current.tabIndex !== -1) {
            this._dropDown.current.focus();
            if (shouldOpenOnFocus) {
                this.setState({
                    isOpen: true
                });
            }
        }
    };
    DropdownBase.prototype.setSelectedIndex = function (event, index) {
        var _this = this;
        var _a = this.props, options = _a.options, selectedKey = _a.selectedKey, selectedKeys = _a.selectedKeys, multiSelect = _a.multiSelect, notifyOnReselect = _a.notifyOnReselect;
        var _b = this.state.selectedIndices, selectedIndices = _b === void 0 ? [] : _b;
        var checked = selectedIndices ? selectedIndices.indexOf(index) > -1 : false;
        var newIndexes = [];
        index = Math.max(0, Math.min(options.length - 1, index));
        // If this is a controlled component then no state change should take place.
        if (selectedKey !== undefined || selectedKeys !== undefined) {
            this._onChange(event, options, index, checked, multiSelect);
            return;
        }
        if (!multiSelect && !notifyOnReselect && index === selectedIndices[0]) {
            return;
        }
        else if (multiSelect) {
            newIndexes = selectedIndices ? this._copyArray(selectedIndices) : [];
            if (checked) {
                var position = newIndexes.indexOf(index);
                if (position > -1) {
                    // unchecked the current one
                    newIndexes.splice(position, 1);
                }
            }
            else {
                // add the new selected index into the existing one
                newIndexes.push(index);
            }
        }
        else {
            // Set the selected option if this is an uncontrolled component
            newIndexes = [index];
        }
        event.persist();
        // Call onChange after state is updated
        this.setState({
            selectedIndices: newIndexes
        }, function () {
            _this._onChange(event, options, index, checked, multiSelect);
        });
    };
    Object.defineProperty(DropdownBase.prototype, "_placeholder", {
        /** Get either props.placeholder (new name) or props.placeHolder (old name) */
        get: function () {
            return this.props.placeholder || this.props.placeHolder;
        },
        enumerable: true,
        configurable: true
    });
    DropdownBase.prototype._copyArray = function (array) {
        var newArray = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            newArray.push(element);
        }
        return newArray;
    };
    /**
     * Finds the next valid Dropdown option and sets the selected index to it.
     * @param stepValue - Value of how many items the function should traverse.  Should be -1 or 1.
     * @param index - Index of where the search should start
     * @param selectedIndex - The selectedIndex Dropdown's state
     * @returns The next valid dropdown option's index
     */
    DropdownBase.prototype._moveIndex = function (event, stepValue, index, selectedIndex) {
        var options = this.props.options;
        // Return selectedIndex if nothing has changed or options is empty
        if (selectedIndex === index || options.length === 0) {
            return selectedIndex;
        }
        // Set starting index to 0 if index is < 0
        if (index < 0) {
            index = 0;
        }
        // Set starting index to last option index if greater than options.length
        if (index >= options.length) {
            index = options.length - 1;
        }
        var stepCounter = 0;
        // If current index is a header or divider, or disabled, increment by step
        while (options[index].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__["DropdownMenuItemType"].Header ||
            options[index].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_7__["DropdownMenuItemType"].Divider ||
            options[index].disabled) {
            // If stepCounter exceeds length of options, then return selectedIndex (-1)
            if (stepCounter >= options.length) {
                return selectedIndex;
            }
            // If index + stepValue is out of bounds, wrap around
            if (index + stepValue < 0) {
                index = options.length;
            }
            else if (index + stepValue >= options.length) {
                index = -1;
            }
            index = index + stepValue;
            stepCounter++;
        }
        this.setSelectedIndex(event, index);
        return index;
    };
    /** Wrap item list in a FocusZone */
    DropdownBase.prototype._renderFocusableList = function (props) {
        var _a = props.onRenderList, onRenderList = _a === void 0 ? this._onRenderList : _a, label = props.label, ariaLabel = props.ariaLabel;
        var id = this._id;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.dropdownItemsWrapper, onKeyDown: this._onZoneKeyDown, onKeyUp: this._onZoneKeyUp, ref: this._host, tabIndex: 0 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZone"], { ref: this._focusZone, direction: _FocusZone__WEBPACK_IMPORTED_MODULE_9__["FocusZoneDirection"].vertical, id: id + '-list', className: this._classNames.dropdownItems, "aria-label": ariaLabel, "aria-labelledby": label && !ariaLabel ? id + '-label' : undefined, role: "listbox" }, onRenderList(props, this._onRenderList))));
    };
    DropdownBase.prototype._renderSeparator = function (item) {
        var index = item.index, key = item.key;
        if (index > 0) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "separator", key: key, className: this._classNames.dropdownDivider });
        }
        return null;
    };
    DropdownBase.prototype._renderHeader = function (item) {
        var _a = this.props.onRenderOption, onRenderOption = _a === void 0 ? this._onRenderOption : _a;
        var key = item.key;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: key, className: this._classNames.dropdownItemHeader }, onRenderOption(item, this._onRenderOption)));
    };
    DropdownBase.prototype._onItemMouseEnter = function (item, ev) {
        if (this._shouldIgnoreMouseEvent()) {
            return;
        }
        var targetElement = ev.currentTarget;
        targetElement.focus();
    };
    DropdownBase.prototype._onItemMouseMove = function (item, ev) {
        var targetElement = ev.currentTarget;
        this._gotMouseMove = true;
        if (!this._isScrollIdle || document.activeElement === targetElement) {
            return;
        }
        targetElement.focus();
    };
    DropdownBase.prototype._shouldIgnoreMouseEvent = function () {
        return !this._isScrollIdle || !this._gotMouseMove;
    };
    /** Get all selected indexes for multi-select mode */
    DropdownBase.prototype._getSelectedIndexes = function (options, selectedKey) {
        if (selectedKey === undefined) {
            if (this.props.multiSelect) {
                return this._getAllSelectedIndices(options);
            }
            var selectedIndex = this._getSelectedIndex(options, null);
            return selectedIndex !== -1 ? [selectedIndex] : [];
        }
        else if (!Array.isArray(selectedKey)) {
            var selectedIndex = this._getSelectedIndex(options, selectedKey);
            return selectedIndex !== -1 ? [selectedIndex] : [];
        }
        var selectedIndices = [];
        for (var _i = 0, selectedKey_1 = selectedKey; _i < selectedKey_1.length; _i++) {
            var key = selectedKey_1[_i];
            var selectedIndex = this._getSelectedIndex(options, key);
            selectedIndex !== -1 && selectedIndices.push(selectedIndex);
        }
        return selectedIndices;
    };
    DropdownBase.prototype._getAllSelectedIndices = function (options) {
        return options.map(function (option, index) { return (option.selected ? index : -1); }).filter(function (index) { return index !== -1; });
    };
    DropdownBase.prototype._getSelectedIndex = function (options, selectedKey) {
        return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["findIndex"])(options, function (option) {
            // tslint:disable-next-line:triple-equals
            if (selectedKey != null) {
                return option.key === selectedKey;
            }
            else {
                return !!option.isSelected || !!option.selected;
            }
        });
    };
    /**
     * Returns true if the key for the event is alt (Mac option) or meta (Mac command).
     */
    DropdownBase.prototype._isAltOrMeta = function (ev) {
        return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_2__["KeyCodes"].alt || ev.key === 'Meta';
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
    DropdownBase.prototype._shouldHandleKeyUp = function (ev) {
        var keyPressIsAltOrMetaAlone = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(ev);
        this._lastKeyDownWasAltOrMeta = false;
        return !!keyPressIsAltOrMetaAlone && !(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isMac"])() || Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isIOS"])());
    };
    /**
     * Returns true if dropdown should set to open on focus.
     * Otherwise, isOpen state should be toggled on click
     */
    DropdownBase.prototype._shouldOpenOnFocus = function () {
        var hasFocus = this.state.hasFocus;
        var openOnKeyboardFocus = this.props.openOnKeyboardFocus;
        return !this._isFocusedByClick && openOnKeyboardFocus === true && !hasFocus;
    };
    DropdownBase.defaultProps = {
        options: []
    };
    DropdownBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_14__["withResponsiveMode"]
    ], DropdownBase);
    return DropdownBase;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Dropdown.base.js.map

/***/ }),

/***/ "QcW5":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionDataViewer/CollectionDataViewer.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: CollectionDataViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionDataViewer", function() { return CollectionDataViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
/* harmony import */ var _collectionDataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collectionDataItem */ "kQRI");
/* harmony import */ var office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Button */ "gCc8");
/* harmony import */ var office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Icon */ "Bxs9");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__);
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







var CollectionDataViewer = /** @class */ (function (_super) {
    __extends(CollectionDataViewer, _super);
    function CollectionDataViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.SORT_IDX = "sortIdx";
        /**
         * Add a new item to the collection
         */
        _this.addItem = function (item) {
            _this.setState(function (prevState) {
                var crntItems = prevState.crntItems.concat([item]);
                crntItems = _this.updateSortProperty(crntItems);
                return {
                    crntItems: crntItems,
                    inCreationItem: null
                };
            });
        };
        /**
         * Remove an item from the collection
         */
        _this.updateItem = function (idx, item) {
            _this.setState(function (prevState) {
                var crntItems = prevState.crntItems;
                // Update the item in the array
                crntItems[idx] = item;
                return { crntItems: crntItems };
            });
        };
        /**
         * Remove an item from the collection
         */
        _this.deleteItem = function (idx) {
            _this.setState(function (prevState) {
                var crntItems = prevState.crntItems;
                crntItems.splice(idx, 1);
                // Update the sort propety
                crntItems = _this.updateSortProperty(crntItems);
                return {
                    crntItems: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["sortBy"])(crntItems, _this.SORT_IDX)
                };
            });
        };
        /**
         * Validate every item
         */
        _this.validateItem = function (idx, isValid) {
            _this.setState(function (prevState) {
                var validation = prevState.validation;
                validation[idx] = isValid;
                return {
                    validation: prevState.validation
                };
            });
        };
        /**
         * Currently in creation
         */
        _this.addInCreation = function (item) {
            _this.setState({
                inCreationItem: item
            });
        };
        /**
         * Add the item and save the form
         */
        _this.addAndSave = function () {
            // Check if the item is not empty
            if (_this.state.inCreationItem) {
                _this.props.fOnSave(_this.state.crntItems.concat([_this.state.inCreationItem]));
            }
            else {
                _this.onSave();
            }
        };
        /**
         * Update the sort order
         */
        _this.updateSortOrder = function (oldIdx, newIdx) {
            _this.setState(function (prevState) {
                var crntItems = prevState.crntItems;
                var newOrderedItems = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(crntItems);
                newOrderedItems = _this.moveItemTo(newOrderedItems, oldIdx, newIdx - 1);
                newOrderedItems = _this.updateSortProperty(newOrderedItems);
                newOrderedItems = Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["sortBy"])(newOrderedItems, _this.SORT_IDX);
                return {
                    crntItems: newOrderedItems
                };
            });
        };
        /**
         * Save the collection data
         */
        _this.onSave = function () {
            _this.props.fOnSave(_this.state.crntItems);
        };
        /**
         * Cancel
         */
        _this.onCancel = function () {
            _this.props.fOnClose();
        };
        _this.state = {
            crntItems: [],
            inCreationItem: null,
            validation: {}
        };
        return _this;
    }
    /**
     * componentDidMount lifecycle hook
     */
    CollectionDataViewer.prototype.componentDidMount = function () {
        var _this = this;
        var crntItems = this.props.value ? Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["sortBy"])(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.props.value), this.SORT_IDX) : [];
        crntItems = crntItems.map(function (item, idx) {
            if (!item[_this.SORT_IDX]) {
                item[_this.SORT_IDX] = idx + 1;
            }
            return item;
        });
        // Update the sort propety
        crntItems = this.updateSortProperty(crntItems);
        this.setState({
            crntItems: Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_6__["sortBy"])(crntItems, this.SORT_IDX)
        });
    };
    /**
     * Check if all items are valid
     */
    CollectionDataViewer.prototype.allItemsValid = function () {
        var validation = this.state.validation;
        if (validation) {
            var keys = Object.keys(validation);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (!validation[key]) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * Move an item in the array
     *
     * @param crntItems
     * @param oldIdx
     * @param newIdx
     */
    CollectionDataViewer.prototype.moveItemTo = function (crntItems, oldIdx, newIdx) {
        if (newIdx > -1 && newIdx < crntItems.length) {
            var removedElement = crntItems.splice(oldIdx, 1)[0];
            if (removedElement) {
                crntItems.splice(newIdx, 0, removedElement);
            }
        }
        return crntItems;
    };
    /**
     * Update the sort property
     *
     * @param crntItems
     */
    CollectionDataViewer.prototype.updateSortProperty = function (crntItems) {
        var _this = this;
        // Update the sort order
        return crntItems.map(function (item, itemIdx) {
            item[_this.SORT_IDX] = itemIdx + 1;
            return item;
        });
    };
    /**
     * Default React render
     */
    CollectionDataViewer.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__table " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].table + " " + (this.props.tableClassName || "") },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__table-head " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableRow + " " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableHead },
                    this.props.enableSorting && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "PropertyFieldCollectionData__panel__table-cell " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell })),
                    this.props.fields.map(function (f) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: "dataviewer-" + f.id, className: "PropertyFieldCollectionData__panel__table-cell " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell },
                        f.title,
                        " ",
                        f.required && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].required, iconName: "Asterisk" }))); }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "PropertyFieldCollectionData__panel__table-cell " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "PropertyFieldCollectionData__panel__table-cell " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].tableCell })),
                (this.state.crntItems && this.state.crntItems.length > 0) && (this.state.crntItems.map(function (item, idx, allItems) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionDataItem__WEBPACK_IMPORTED_MODULE_2__["CollectionDataItem"], { key: item.uniqueId, fields: _this.props.fields, index: idx, item: item, totalItems: allItems.length, sortingEnabled: _this.props.enableSorting, disableItemDeletion: _this.props.disableItemDeletion, fUpdateItem: _this.updateItem, fDeleteItem: _this.deleteItem, fValidation: _this.validateItem, fOnSorting: _this.updateSortOrder })); })),
                !this.props.disableItemCreation && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionDataItem__WEBPACK_IMPORTED_MODULE_2__["CollectionDataItem"], { fields: this.props.fields, index: null, item: null, sortingEnabled: this.props.enableSorting, totalItems: null, fAddItem: this.addItem, fAddInCreation: this.addInCreation }))),
            (!this.state.crntItems || this.state.crntItems.length === 0) && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "PropertyFieldCollectionData__panel__no-collection-data " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].noCollectionData }, PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["CollectionDataEmptyValue"])),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__actions " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].panelActions },
                this.state.inCreationItem && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { text: this.props.saveAndAddBtnLabel || PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["CollectionSaveAndAddButtonLabel"], onClick: this.addAndSave, disabled: !this.allItemsValid(), className: "PropertyFieldCollectionData__panel__action__add" }),
                !this.state.inCreationItem && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], { text: this.props.saveBtnLabel || PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["SaveButtonLabel"], onClick: this.onSave, disabled: !this.allItemsValid(), className: "PropertyFieldCollectionData__panel__action__save" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], { text: this.props.cancelBtnLabel || PropertyControlStrings__WEBPACK_IMPORTED_MODULE_5__["CancelButtonLabel"], onClick: this.onCancel, className: "PropertyFieldCollectionData__panel__action__cancel" }))));
    };
    return CollectionDataViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=CollectionDataViewer.js.map

/***/ }),

/***/ "RY1Y":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionColorField/CollectionColorField.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: CollectionColorField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionColorField", function() { return CollectionColorField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
/* harmony import */ var office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Callout */ "Bswb");
/* harmony import */ var office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/ColorPicker */ "8oE+");
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




var CollectionColorField = /** @class */ (function (_super) {
    __extends(CollectionColorField, _super);
    function CollectionColorField(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this._colorElement = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        _this._onCalloutDismiss = function () {
            _this.setState({
                isCalloutVisible: false
            });
        };
        _this._onCalloutToggle = function () {
            _this.setState({
                isCalloutVisible: !_this.state.isCalloutVisible
            });
        };
        var _a = _this.props, field = _a.field, item = _a.item;
        _this.state = {
            isCalloutVisible: false,
            color: item[field.id] ? item[field.id] : "#0000ff"
        };
        return _this;
    }
    CollectionColorField.prototype.render = function () {
        var _this = this;
        var field = this.props.field;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__color-field " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].colorField },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].colorIndicator, style: { backgroundColor: this.state.color, cursor: this.props.disableEdit ? 'default' : 'hand' }, ref: this._colorElement, onClick: function () { if (!_this.props.disableEdit)
                    _this._onCalloutToggle(); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__["Callout"], { gapSpace: 0, target: this._colorElement.current, onDismiss: this._onCalloutDismiss, setInitialFocus: true, hidden: !this.state.isCalloutVisible, directionalHint: office_ui_fabric_react_lib_Callout__WEBPACK_IMPORTED_MODULE_2__["DirectionalHint"].rightCenter },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], { color: this.state.color, alphaSliderHidden: true, onColorChanged: function (color) { _this.props.fOnValueChange(field.id, color); _this.setState({ color: color }); } }))));
    };
    return CollectionColorField;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=CollectionColorField.js.map

/***/ }),

/***/ "Rlnv":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/errorMessage/FieldErrorMessage.module.scss.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./FieldErrorMessage.module.css */ "Mmr5");
var styles = {
    errorMessage: 'errorMessage_67aeb894',
    errorIcon: 'errorIcon_67aeb894'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 
//# sourceMappingURL=FieldErrorMessage.module.scss.js.map

/***/ }),

/***/ "SPHF":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Overlay/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Overlay, OverlayBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ "hG4R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]; });

/* harmony import */ var _Overlay_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay.base */ "WDoY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayBase", function() { return _Overlay_base__WEBPACK_IMPORTED_MODULE_1__["OverlayBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "TUT9":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/PropertyFieldCollectionDataHost.js ***!
  \***********************************************************************************************************************/
/*! exports provided: PropertyFieldCollectionDataHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionDataHost", function() { return PropertyFieldCollectionDataHost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/telemetry */ "TVYz");
/* harmony import */ var office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Button */ "gCc8");
/* harmony import */ var office_ui_fabric_react_lib_components_Panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Panel */ "2tUa");
/* harmony import */ var office_ui_fabric_react_lib_components_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Label */ "QBoD");
/* harmony import */ var _collectionDataViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collectionDataViewer */ "/x9U");
/* harmony import */ var _errorMessage_FieldErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errorMessage/FieldErrorMessage */ "N3ZD");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! PropertyControlStrings */ "zwa+");
/* harmony import */ var PropertyControlStrings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(PropertyControlStrings__WEBPACK_IMPORTED_MODULE_7__);
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








var PropertyFieldCollectionDataHost = /** @class */ (function (_super) {
    __extends(PropertyFieldCollectionDataHost, _super);
    function PropertyFieldCollectionDataHost(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Open the panel
         */
        _this.openPanel = function () {
            _this.setState({
                panelOpen: true
            });
        };
        /**
         * Closes the panel
         */
        _this.closePanel = function () {
            _this.setState({
                panelOpen: false
            });
        };
        /**
         * On save action
         */
        _this.onSave = function (items) {
            _this.props.onChanged(items);
            _this.setState({
                panelOpen: false
            });
        };
        _this.state = {
            panelOpen: false
        };
        _common_telemetry__WEBPACK_IMPORTED_MODULE_1__["track"]('PropertyFieldCollectionData', {});
        return _this;
    }
    PropertyFieldCollectionDataHost.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Label__WEBPACK_IMPORTED_MODULE_4__["Label"], null, this.props.label),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Button__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], { text: this.props.manageBtnLabel, onClick: this.openPanel, disabled: this.props.fields.length === 0 || this.props.disabled }),
            this.props.fields.length === 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_errorMessage_FieldErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], { errorMessage: PropertyControlStrings__WEBPACK_IMPORTED_MODULE_7__["CollectionDataEmptyFields"] }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Panel__WEBPACK_IMPORTED_MODULE_3__["Panel"], { isOpen: this.state.panelOpen, onDismiss: this.closePanel, type: office_ui_fabric_react_lib_components_Panel__WEBPACK_IMPORTED_MODULE_3__["PanelType"].large, headerText: this.props.panelHeader, onOuterClick: function () { }, className: "PropertyFieldCollectionData__panel " + (this.props.panelClassName || "") },
                this.props.panelDescription && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "PropertyFieldCollectionData__panel__description" }, this.props.panelDescription)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_collectionDataViewer__WEBPACK_IMPORTED_MODULE_5__["CollectionDataViewer"], __assign({}, this.props, { fOnSave: this.onSave, fOnClose: this.closePanel })))));
    };
    return PropertyFieldCollectionDataHost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=PropertyFieldCollectionDataHost.js.map

/***/ }),

/***/ "Uj4X":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/utilities/DropdownSizePosCache.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: DropdownSizePosCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownSizePosCache", function() { return DropdownSizePosCache; });
/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dropdown.types */ "qIec");

/**
 * A utility class to cache size and position in cache.
 *
 * Dropdown options has non-selectable display types. It is therefore not cheap to determine
 * the total number of actual selectable options as well as the position an option is in the
 * list of options - O(n) cost for each lookup.
 *
 * Given that we potentially have to make this determination on every single render pass, this
 * cache should provide a little bit of relief.
 */
var DropdownSizePosCache = /** @class */ (function () {
    function DropdownSizePosCache() {
        this._size = 0;
    }
    /**
     * Invalidates the cache and recalculate the size of selectable options.
     */
    DropdownSizePosCache.prototype.updateOptions = function (options) {
        var displayOnlyOptionsCache = [];
        var size = 0;
        for (var i = 0; i < options.length; i++) {
            if (options[i].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_0__["DropdownMenuItemType"].Divider || options[i].itemType === _Dropdown_types__WEBPACK_IMPORTED_MODULE_0__["DropdownMenuItemType"].Header) {
                displayOnlyOptionsCache.push(i);
            }
            else {
                size++;
            }
        }
        this._size = size;
        this._displayOnlyOptionsCache = displayOnlyOptionsCache;
    };
    Object.defineProperty(DropdownSizePosCache.prototype, "optionSetSize", {
        /**
         * The size of all the selectable options.
         */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the position of this option element relative to the full set of selectable option elements.
     * Note: the first selectable element is position 1 in the set.
     * @param index The raw index of the option element.
     */
    DropdownSizePosCache.prototype.positionInSet = function (index) {
        if (index === undefined) {
            return undefined;
        }
        // we could possibly memoize this too but this should be good enough, most of the time (the expectation is that
        // when you have a lot of options, the selectable options will heavily dominate over the non-selectable options.
        var offset = 0;
        while (index > this._displayOnlyOptionsCache[offset]) {
            offset++;
        }
        if (this._displayOnlyOptionsCache[offset] === index) {
            throw new Error("Unexpected: Option at index " + index + " is not a selectable element.");
        }
        return index - offset + 1;
    };
    return DropdownSizePosCache;
}());

//# sourceMappingURL=DropdownSizePosCache.js.map

/***/ }),

/***/ "VZE8":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionDropdownField/CollectionDropdownField.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: CollectionDropdownField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionDropdownField", function() { return CollectionDropdownField; });
/* harmony import */ var office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react/lib/Dropdown */ "E7D7");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;



var CollectionDropdownField = function (_a) {
    var field = _a.field, item = _a.item, disableEdit = _a.disableEdit, fOnValueChange = _a.fOnValueChange, fValidation = _a.fValidation;
    var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"](), options = _b[0], setOptions = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_1__["useState"](), errorMessage = _c[0], setErrorMessage = _c[1];
    var onValueChange = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) { return __awaiter(_this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!field) {
                        return [2 /*return*/];
                    }
                    if (fOnValueChange) {
                        fOnValueChange(field.id, value);
                    }
                    if (!fValidation) return [3 /*break*/, 2];
                    return [4 /*yield*/, fValidation(field, value)];
                case 1:
                    error = _a.sent();
                    setErrorMessage(error);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [field, fOnValueChange, fValidation]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!field || !field.options) {
            return;
        }
        var newOptions = [];
        if (typeof (field.options) === 'function') {
            if (!item) {
                return;
            }
            newOptions = field.options(field.id, item);
        }
        else {
            newOptions = field.options.slice();
        }
        setOptions(newOptions);
    }, [field, item, field.options]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (item && field) {
            onValueChange(item[field.id]);
        }
    }, []);
    if (!field || !item) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](office_ui_fabric_react_lib_Dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"], { placeHolder: field.placeholder || field.title, options: options, selectedKey: item[field.id] || null, required: field.required, disabled: disableEdit, onChange: function (e, i) { onValueChange(i.key); }, onRenderOption: field.onRenderOption, className: "PropertyFieldCollectionData__panel__dropdown-field " + (errorMessage ? _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalidField : '') });
};
//# sourceMappingURL=CollectionDropdownField.js.map

/***/ }),

/***/ "Vi1w":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Dropdown, DropdownBase, DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "BGyn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });

/* harmony import */ var _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.base */ "Plk9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownBase", function() { return _Dropdown_base__WEBPACK_IMPORTED_MODULE_1__["DropdownBase"]; });

/* harmony import */ var _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown.types */ "qIec");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__["DropdownMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _Dropdown_types__WEBPACK_IMPORTED_MODULE_2__["ResponsiveMode"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "WDoY":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.base.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: OverlayBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayBase", function() { return OverlayBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");



var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var OverlayBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OverlayBase, _super);
    function OverlayBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayBase.prototype.componentDidMount = function () {
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["disableBodyScroll"])();
    };
    OverlayBase.prototype.componentWillUnmount = function () {
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])();
    };
    OverlayBase.prototype.render = function () {
        var _a = this.props, isDark = _a.isDarkThemed, className = _a.className, theme = _a.theme, styles = _a.styles;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isDark: isDark
        });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, { className: classNames.root }));
    };
    return OverlayBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=Overlay.base.js.map

/***/ }),

/***/ "YGPD":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.styles.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

var GlobalClassNames = {
    root: 'ms-Overlay',
    rootDark: 'ms-Overlay--dark'
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme, isNone = props.isNone, isDark = props.isDark;
    var palette = theme.palette;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                backgroundColor: palette.whiteTranslucent40,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: '1px solid WindowText',
                        opacity: 0
                    },
                    _a)
            },
            isNone && {
                visibility: 'hidden'
            },
            isDark && [
                classNames.rootDark,
                {
                    backgroundColor: palette.blackTranslucent40
                }
            ],
            className
        ]
    };
    var _a;
};
//# sourceMappingURL=Overlay.styles.js.map

/***/ }),

/***/ "Z/cK":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionNumberField/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: CollectionNumberField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionNumberField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionNumberField */ "o+WQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionNumberField", function() { return _CollectionNumberField__WEBPACK_IMPORTED_MODULE_0__["CollectionNumberField"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "c1k0":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/SelectableOption.types.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: SelectableOptionMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return SelectableOptionMenuItemType; });
var SelectableOptionMenuItemType;
(function (SelectableOptionMenuItemType) {
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Normal"] = 0] = "Normal";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Divider"] = 1] = "Divider";
    SelectableOptionMenuItemType[SelectableOptionMenuItemType["Header"] = 2] = "Header";
})(SelectableOptionMenuItemType || (SelectableOptionMenuItemType = {}));
//# sourceMappingURL=SelectableOption.types.js.map

/***/ }),

/***/ "cd0b":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Link/Link.base.js ***!
  \***********************************************************************************************************************/
/*! exports provided: LinkBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkBase", function() { return LinkBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../KeytipData */ "ASEy");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var LinkBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LinkBase, _super);
    function LinkBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._link = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this._onClick = function (ev) {
            var _a = _this.props, onClick = _a.onClick, disabled = _a.disabled;
            if (disabled) {
                ev.preventDefault();
            }
            else if (onClick) {
                onClick(ev);
            }
        };
        return _this;
    }
    LinkBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, children = _a.children, className = _a.className, href = _a.href, theme = _a.theme, styles = _a.styles, keytipProps = _a.keytipProps;
        var classNames = getClassNames(styles, {
            className: className,
            isButton: !href,
            isDisabled: disabled,
            theme: theme
        });
        var RootType = this._getRootType(this.props);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_3__["KeytipData"], { keytipProps: keytipProps, ariaDescribedBy: this.props['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipAttributes, _this._adjustPropsForRootType(RootType, _this.props), { className: classNames.root, onClick: _this._onClick, ref: _this._link, "aria-disabled": disabled }), children)); }));
    };
    LinkBase.prototype.focus = function () {
        var current = this._link.current;
        if (current && current.focus) {
            current.focus();
        }
    };
    LinkBase.prototype._adjustPropsForRootType = function (RootType, props) {
        // Deconstruct the props so we remove props like `as`, `theme` and `styles`
        // as those will always be removed. We also take some props that are optional
        // based on the RootType.
        var children = props.children, as = props.as, disabled = props.disabled, target = props.target, href = props.href, theme = props.theme, getStyles = props.getStyles, styles = props.styles, componentRef = props.componentRef, restProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["children", "as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef"]);
        // RootType will be a string if we're dealing with an html component
        if (typeof RootType === 'string') {
            // Remove the disabled prop for anchor elements
            if (RootType === 'a') {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ target: target, href: disabled ? undefined : href }, restProps);
            }
            // Add the type='button' prop for button elements
            if (RootType === 'button') {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ type: 'button', disabled: disabled }, restProps);
            }
            // Remove the target and href props for all other non anchor elements
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, restProps, { disabled: disabled });
        }
        // Retain all props except 'as' for ReactComponents
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ target: target, href: href, disabled: disabled }, restProps);
    };
    LinkBase.prototype._getRootType = function (props) {
        if (props.as) {
            return props.as;
        }
        if (props.href) {
            return 'a';
        }
        return 'button';
    };
    return LinkBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

//# sourceMappingURL=Link.base.js.map

/***/ }),

/***/ "dgil":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Link/Link.js ***!
  \******************************************************************************************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Link_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.base */ "cd0b");
/* harmony import */ var _Link_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link.styles */ "j3qQ");



var Link = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Link_base__WEBPACK_IMPORTED_MODULE_1__["LinkBase"], _Link_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Link'
});
//# sourceMappingURL=Link.js.map

/***/ }),

/***/ "eJBd":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/SelectableOption.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getAllSelectedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSelectedOptions", function() { return getAllSelectedOptions; });
function getAllSelectedOptions(options, selectedIndices) {
    var selectedOptions = [];
    for (var _i = 0, selectedIndices_1 = selectedIndices; _i < selectedIndices_1.length; _i++) {
        var index = selectedIndices_1[_i];
        var option = options[index];
        if (option) {
            selectedOptions.push(option);
        }
    }
    return selectedOptions;
}
//# sourceMappingURL=SelectableOption.js.map

/***/ }),

/***/ "ero8":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Link/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Link, LinkBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "dgil");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony import */ var _Link_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.base */ "cd0b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkBase", function() { return _Link_base__WEBPACK_IMPORTED_MODULE_1__["LinkBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "fJrQ":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionIconField/CollectionIconField.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: CollectionIconField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionIconField", function() { return CollectionIconField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
/* harmony import */ var office_ui_fabric_react_lib_components_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/TextField */ "swiA");
/* harmony import */ var office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/components/Icon */ "Bxs9");
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




var CollectionIconField = /** @class */ (function (_super) {
    __extends(CollectionIconField, _super);
    function CollectionIconField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionIconField.prototype.render = function () {
        var _this = this;
        var _a = this.props, field = _a.field, item = _a.item;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__icon-field " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconField },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_TextField__WEBPACK_IMPORTED_MODULE_2__["TextField"], { placeholder: field.placeholder || field.title, className: _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collectionDataField, value: item[field.id] ? item[field.id] : "", required: field.required, onChanged: function (value) { return _this.props.fOnValueChange(field.id, value); }, deferredValidationTime: field.deferredValidationTime || field.deferredValidationTime >= 0 ? field.deferredValidationTime : 200, onGetErrorMessage: function (value) { return _this.props.fValidation(_this.props.field, value); }, disabled: this.props.disableEdit }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](office_ui_fabric_react_lib_components_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], { iconName: item[field.id] ? item[field.id] : "" })));
    };
    return CollectionIconField;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=CollectionIconField.js.map

/***/ }),

/***/ "fbad":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/PropertyFieldCollectionDataHost.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".collectionData_8e201b3e{background-color:#eaeaea;padding:10px}.noCollectionData_8e201b3e{text-align:center}.panelActions_8e201b3e{margin-top:15px;text-align:right}.panelActions_8e201b3e button{margin-right:15px}.panelActions_8e201b3e button:last-child{margin-right:0}.required_8e201b3e{color:#d83b01;font-size:8px;vertical-align:super}.addBtn_8e201b3e{color:#0078d4}.inputField_8e201b3e{color:inherit}.numberField_8e201b3e{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:1px solid #a6a6a6;background:#fff;height:32px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:relative}.numberField_8e201b3e:hover{border-color:#212121}.numberField_8e201b3e input{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;font-size:14px;border-radius:0;border:none;background:0 0;color:#333;padding:0 12px 0 12px;width:100%;text-overflow:ellipsis;outline:0}.numberField_8e201b3e.invalidField_8e201b3e{border-color:#a80000}.iconField_8e201b3e{position:relative}.iconField_8e201b3e i{font-size:20px;position:absolute;top:0;right:10px;vertical-align:top}.colorField_8e201b3e{position:relative}.colorField_8e201b3e .colorIndicator_8e201b3e{width:30px;height:30px;border:1px solid #a6a6a6}.collectionDataField_8e201b3e>span{display:none}.collectionDataField_8e201b3e div[class^=invalid_]{border-color:#a80000!important}.table_8e201b3e{display:table;width:100%;border-collapse:collapse}.tableRow_8e201b3e{display:table-row;line-height:30px}.tableRow_8e201b3e:hover{background-color:#f4f4f4;cursor:pointer;outline:1px solid transparent}.tableRow_8e201b3e.tableFooter_8e201b3e{background-color:#eaeaea;border-top:1px solid #a6a6a6}.tableCell_8e201b3e{display:table-cell;padding:0 10px;vertical-align:middle}.tableCell_8e201b3e>div,.tableCell_8e201b3e>div.ms-TextField{margin-bottom:8px;margin-top:8px}.errorCallout_8e201b3e{padding:0 15px;min-width:200px}.errorCalloutLink_8e201b3e:not([disabled]){color:#a80000}.errorMsgs_8e201b3e{font-size:14px;font-weight:400}.errorMsgs_8e201b3e p{font-size:17px;font-weight:300}.errorMsgs_8e201b3e ul{padding-left:15px}.errorMsgs_8e201b3e li{color:#a80000}.tableHead_8e201b3e{font-weight:300;font-size:12px;color:#666}.tableHead_8e201b3e .tableCell_8e201b3e{font-weight:400;text-align:left;border-bottom:1px solid #a6a6a6}", ""]);


/***/ }),

/***/ "fi/X":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/utilities/selectableOption/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: getAllSelectedOptions, SelectableOptionMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectableOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectableOption */ "eJBd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllSelectedOptions", function() { return _SelectableOption__WEBPACK_IMPORTED_MODULE_0__["getAllSelectedOptions"]; });

/* harmony import */ var _SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectableOption.types */ "c1k0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectableOptionMenuItemType", function() { return _SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__["SelectableOptionMenuItemType"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "hG4R":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Overlay/Overlay.js ***!
  \************************************************************************************************************************/
/*! exports provided: Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Overlay_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay.base */ "WDoY");
/* harmony import */ var _Overlay_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overlay.styles */ "YGPD");



var Overlay = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Overlay_base__WEBPACK_IMPORTED_MODULE_1__["OverlayBase"], _Overlay_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, {
    scope: 'Overlay'
});
//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "j3qQ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Link/Link.styles.js ***!
  \*************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");

var GlobalClassNames = {
    root: 'ms-Link'
};
var getStyles = function (props) {
    var className = props.className, isButton = props.isButton, isDisabled = props.isDisabled, theme = props.theme;
    var semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                color: semanticColors.link,
                outline: 'none',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                selectors: (_a = {
                        '.ms-Fabric--isFocusVisible &:focus': {
                            // Can't use getFocusStyle because it doesn't support wrapping links
                            // https://github.com/OfficeDev/office-ui-fabric-react/issues/4883#issuecomment-406743543
                            // A box-shadow allows the focus rect to wrap links that span multiple lines
                            // and helps the focus rect avoid getting clipped.
                            boxShadow: "0 0 0 1px " + theme.palette.neutralSecondary + " inset",
                            selectors: (_b = {},
                                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    outline: '1px solid WindowText'
                                },
                                _b)
                        }
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        // For IE high contrast mode
                        borderBottom: 'none'
                    },
                    _a)
            },
            isButton && {
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline',
                margin: 0,
                overflow: 'inherit',
                padding: 0,
                textAlign: 'left',
                textOverflow: 'inherit',
                userSelect: 'text',
                borderBottom: '1px solid transparent',
                selectors: (_c = {},
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorBlack"]] = {
                        color: '#FFFF00'
                    },
                    _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorWhite"]] = {
                        color: '#00009F'
                    },
                    _c)
            },
            !isButton && {
                textDecoration: 'none'
            },
            isDisabled && [
                'is-disabled',
                {
                    color: semanticColors.disabledText,
                    cursor: 'default'
                },
                {
                    selectors: {
                        '&:link, &:visited': {
                            pointerEvents: 'none'
                        }
                    }
                }
            ],
            !isDisabled && {
                selectors: {
                    '&:active, &:hover, &:active:hover': {
                        color: semanticColors.linkHovered,
                        selectors: (_d = {},
                            _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                textDecoration: 'underline'
                            },
                            _d)
                    },
                    '&:focus': {
                        color: semanticColors.link
                    }
                }
            },
            classNames.root,
            className
        ]
    };
    var _a, _b, _c, _d;
};
//# sourceMappingURL=Link.styles.js.map

/***/ }),

/***/ "jZF0":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Checkbox/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Checkbox, CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "mIXr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "AzTC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "kQRI":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionDataItem/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: CollectionDataItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionDataItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionDataItem */ "8sxt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionDataItem", function() { return _CollectionDataItem__WEBPACK_IMPORTED_MODULE_0__["CollectionDataItem"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "mIXr":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _Checkbox_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.base */ "AzTC");
/* harmony import */ var _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.styles */ "pqMv");



var Checkbox = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Checkbox_base__WEBPACK_IMPORTED_MODULE_1__["CheckboxBase"], _Checkbox_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Checkbox' });
//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "mifA":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.types.js ***!
  \**************************************************************************************************************************/
/*! exports provided: PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return PanelType; });
/**
 * {@docCategory Panel}
 */
var PanelType;
(function (PanelType) {
    /**
     * Renders the Panel with a `fluid` (full screen) width.
     * Recommended for use on small screen breakpoints.
     * - Small (320-479): full screen width, 16px left/right padding
     * - Medium (480-639): full screen width, 16px left/right padding
     * - Large (640-1023): full screen width, 32px left/right padding
     * - XLarge (1024-1365): full screen width, 32px left/right padding
     * - XXLarge (1366-up): full screen width, 40px left/right padding
     */
    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): 340px width, 16px left/right padding
     * - Large (640-1023): 340px width, 32px left/right padding
     * - XLarge (1024-1365): 340px width, 32px left/right padding
     * - XXLarge (1366-up): 340px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).
     * - Small (320-479): 272px width, 16px left/right padding
     * - Medium (480-639): 272px width, 16px left/right padding
     * - Large (640-1023): 272px width, 32px left/right padding
     * - XLarge (1024-1365): 272px width, 32px left/right padding
     * - XXLarge (1366-up): 272px width, 40px left/right padding
     */
    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
    /**
     * Renders the Panel in `medium` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): 592px width, 32px left/right padding
     * - XLarge (1024-1365): 644px width, 32px left/right padding
     * - XXLarge (1366-up): 644px width, 40px left/right padding
     */
    PanelType[PanelType["medium"] = 3] = "medium";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639):  adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 428px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["large"] = 4] = "large";
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode), with a fixed width at XX-Large breakpoint.
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 940px width, 40px left/right padding
     */
    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
    /**
     * Renders the Panel in `extra large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): adapts to `PanelType.large` at this breakpoint
     * - XXLarge (1366-1919): 176px fixed left margin, fluid width, 40px left/right padding
     * - XXXLarge (1920-up): 176px fixed left margin, fluid width, 40px left/right padding
     */
    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the far side (right in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["custom"] = 7] = "custom";
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the near side (left in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    PanelType[PanelType["customNear"] = 8] = "customNear";
})(PanelType || (PanelType = {}));
//# sourceMappingURL=Panel.types.js.map

/***/ }),

/***/ "niPH":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionIconField/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: CollectionIconField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollectionIconField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionIconField */ "fJrQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionIconField", function() { return _CollectionIconField__WEBPACK_IMPORTED_MODULE_0__["CollectionIconField"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "o+WQ":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/collectionNumberField/CollectionNumberField.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: CollectionNumberField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionNumberField", function() { return CollectionNumberField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PropertyFieldCollectionDataHost.module.scss */ "o9eJ");
/* harmony import */ var office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Utilities */ "iRzo");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CollectionNumberField = /** @class */ (function (_super) {
    __extends(CollectionNumberField, _super);
    function CollectionNumberField(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Value change event handler
         *
         * @param field
         * @param value
         */
        _this.valueChange = function (field, value) {
            var inputVal = typeof value === "string" ? parseInt(value) : value;
            _this.setState({
                value: inputVal
            });
            _this.props.fOnValueChange(field.id, value);
            _this.delayedValidate(field, inputVal);
        };
        /**
         * Delayed field validation
         */
        _this.valueValidation = function (field, value) { return __awaiter(_this, void 0, void 0, function () {
            var validation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.fValidation(field, value)];
                    case 1:
                        validation = _a.sent();
                        // Update the error message
                        this.setState({
                            errorMessage: validation
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            value: null,
            errorMessage: ''
        };
        _this.async = new office_ui_fabric_react_lib_Utilities__WEBPACK_IMPORTED_MODULE_2__["Async"](_this);
        _this.delayedValidate = _this.async.debounce(_this.valueValidation, (_this.props.field.deferredValidationTime || _this.props.field.deferredValidationTime >= 0) ? _this.props.field.deferredValidationTime : 200);
        return _this;
    }
    /**
     * componentWillMount lifecycle hook
     */
    CollectionNumberField.prototype.componentWillMount = function () {
        this.setState({
            value: this.props.item[this.props.field.id]
        });
        this.valueChange(this.props.field, this.props.item[this.props.field.id]);
    };
    /**
     * componentWillUpdate lifecycle hook
     *
     * @param nextProps
     * @param nextState
     */
    CollectionNumberField.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (!Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(nextProps.item, this.props.item)) {
            this.setState({
                value: nextProps.item[nextProps.field.id]
            });
        }
    };
    /**
     * Default React render method
     */
    CollectionNumberField.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "PropertyFieldCollectionData__panel__number-field " + _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].numberField + " " + (this.state.errorMessage ? _PropertyFieldCollectionDataHost_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].invalidField : "") },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", role: "spinbutton", placeholder: this.props.field.placeholder || this.props.field.title, "aria-valuemax": 99999, "aria-valuemin": -999999, "aria-valuenow": this.props.item[this.props.field.id] || '', "aria-invalid": !!this.state.errorMessage, value: this.state.value || '', onChange: function (ev) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.valueChange(this.props.field, ev.target.value)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); }, disabled: this.props.disableEdit })));
    };
    return CollectionNumberField;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

//# sourceMappingURL=CollectionNumberField.js.map

/***/ }),

/***/ "o9eJ":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/PropertyFieldCollectionDataHost.module.scss.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./PropertyFieldCollectionDataHost.module.css */ "sxkt");
var styles = {
    collectionData: 'collectionData_8e201b3e',
    noCollectionData: 'noCollectionData_8e201b3e',
    panelActions: 'panelActions_8e201b3e',
    required: 'required_8e201b3e',
    addBtn: 'addBtn_8e201b3e',
    inputField: 'inputField_8e201b3e',
    numberField: 'numberField_8e201b3e',
    invalidField: 'invalidField_8e201b3e',
    iconField: 'iconField_8e201b3e',
    colorField: 'colorField_8e201b3e',
    colorIndicator: 'colorIndicator_8e201b3e',
    collectionDataField: 'collectionDataField_8e201b3e',
    table: 'table_8e201b3e',
    tableRow: 'tableRow_8e201b3e',
    tableFooter: 'tableFooter_8e201b3e',
    tableCell: 'tableCell_8e201b3e',
    errorCallout: 'errorCallout_8e201b3e',
    errorCalloutLink: 'errorCalloutLink_8e201b3e',
    errorMsgs: 'errorMsgs_8e201b3e',
    tableHead: 'tableHead_8e201b3e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 
//# sourceMappingURL=PropertyFieldCollectionDataHost.module.scss.js.map

/***/ }),

/***/ "pQEv":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Checkbox.js ***!
  \******************************************************************************************************/
/*! exports provided: Checkbox, CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Checkbox/index */ "jZF0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return _components_Checkbox_index__WEBPACK_IMPORTED_MODULE_0__["CheckboxBase"]; });


//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "pZcz":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Panel/Panel.base.js ***!
  \*************************************************************************************************************************/
/*! exports provided: PanelBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBase", function() { return PanelBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "LBQa");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button */ "9QpN");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layer */ "FQnb");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Overlay */ "EC+E");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Popup */ "LkE5");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utilities */ "iRzo");
/* harmony import */ var _FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FocusTrapZone/index */ "UDac");
/* harmony import */ var _Panel_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Panel.types */ "mifA");










var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["classNamesFunction"])();
var PanelBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelBase, _super);
    function PanelBase(props) {
        var _this = _super.call(this, props) || this;
        _this._panel = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.dismiss = function (ev) {
            if (_this._isOpen) {
                _this._isOpen = false;
                if (_this.props.onDismiss) {
                    _this.props.onDismiss(ev);
                }
                if (!ev || (ev && !ev.defaultPrevented)) {
                    _this.setState({
                        isAnimating: true
                    }, function () {
                        _this._async.setTimeout(_this._onTransitionComplete, 200);
                    });
                }
            }
        };
        // Allow the user to scroll within the panel but not on the body
        _this._allowScrollOnPanel = function (elt) {
            if (elt) {
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["allowScrollOnElement"])(elt, _this._events);
            }
            else {
                _this._events.off(_this._scrollableContent);
            }
            _this._scrollableContent = elt;
        };
        _this._onRenderNavigation = function (props) {
            if (!_this.props.onRenderNavigationContent && !_this.props.onRenderNavigation && !_this.props.hasCloseButton) {
                return null;
            }
            var _a = _this.props.onRenderNavigationContent, onRenderNavigationContent = _a === void 0 ? _this._onRenderNavigationContent : _a;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.navigation }, onRenderNavigationContent(props, _this._onRenderNavigationContent));
        };
        _this._onRenderNavigationContent = function (props) {
            var closeButtonAriaLabel = props.closeButtonAriaLabel, hasCloseButton = props.hasCloseButton;
            var theme = Object(_Styling__WEBPACK_IMPORTED_MODULE_6__["getTheme"])();
            if (hasCloseButton) {
                // TODO -Issue #5689: Comment in once Button is converted to mergeStyles
                // const iconButtonStyles = this._classNames.subComponentStyles
                // ? (this._classNames.subComponentStyles.iconButton as IStyleFunctionOrObject<IButtonStyleProps, IButtonStyles>)
                // : undefined;
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["IconButton"]
                // TODO -Issue #5689: Comment in once Button is converted to mergeStyles
                // className={iconButtonStyles}
                , { 
                    // TODO -Issue #5689: Comment in once Button is converted to mergeStyles
                    // className={iconButtonStyles}
                    styles: {
                        root: {
                            height: 'auto',
                            width: '44px',
                            color: theme.palette.neutralSecondary,
                            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_6__["IconFontSizes"].large
                        },
                        rootHovered: {
                            color: theme.palette.neutralPrimary
                        }
                    }, className: _this._classNames.closeButton, onClick: _this._onPanelClick, ariaLabel: closeButtonAriaLabel, title: closeButtonAriaLabel, "data-is-visible": true, iconProps: { iconName: 'Cancel' } }));
            }
            return null;
        };
        _this._onRenderHeader = function (props, defaultRender, headerTextId) {
            var headerText = props.headerText;
            if (headerText) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.header },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: _this._classNames.headerText, id: headerTextId, role: "heading", "aria-level": 2 }, headerText)));
            }
            return null;
        };
        _this._onRenderBody = function (props) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.content }, props.children);
        };
        _this._onRenderFooter = function (props) {
            var _a = _this.props.onRenderFooterContent, onRenderFooterContent = _a === void 0 ? null : _a;
            if (onRenderFooterContent) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.footer },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.footerInner }, onRenderFooterContent())));
            }
            return null;
        };
        _this._onPanelClick = function (ev) {
            _this.dismiss(ev);
        };
        _this._onTransitionComplete = function () {
            _this._updateFooterPosition();
            _this.setState({
                isAnimating: false
            });
            if (_this._isOpen && _this.props.onOpened) {
                _this.props.onOpened();
            }
            if (!_this._isOpen && _this.props.onDismissed) {
                _this.props.onDismissed();
            }
        };
        _this._warnDeprecations({
            ignoreExternalFocusing: 'focusTrapZoneProps',
            forceFocusInsideTrap: 'focusTrapZoneProps',
            firstFocusableSelector: 'focusTrapZoneProps'
        });
        _this._isOpen = !!props.isOpen;
        _this.state = {
            isFooterSticky: false,
            isAnimating: false,
            id: Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["getId"])('Panel')
        };
        return _this;
    }
    PanelBase.prototype.componentDidMount = function () {
        this._events.on(window, 'resize', this._updateFooterPosition);
        if (this._shouldListenForOuterClick(this.props)) {
            this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        if (this.props.isOpen) {
            this.open();
        }
    };
    PanelBase.prototype.componentDidUpdate = function (previousProps) {
        var shouldListenOnOuterClick = this._shouldListenForOuterClick(this.props);
        var previousShouldListenOnOuterClick = this._shouldListenForOuterClick(previousProps);
        if (shouldListenOnOuterClick && !previousShouldListenOnOuterClick) {
            this._events.on(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
        else if (!shouldListenOnOuterClick && previousShouldListenOnOuterClick) {
            this._events.off(document.body, 'mousedown', this._dismissOnOuterClick, true);
        }
    };
    PanelBase.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.isOpen !== this._isOpen) {
            if (newProps.isOpen) {
                this.open();
            }
            else {
                this.dismiss();
            }
        }
    };
    PanelBase.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, focusTrapZoneProps = _a.focusTrapZoneProps, forceFocusInsideTrap = _a.forceFocusInsideTrap, hasCloseButton = _a.hasCloseButton, headerText = _a.headerText, _c = _a.headerClassName, headerClassName = _c === void 0 ? '' : _c, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isFooterAtBottom = _a.isFooterAtBottom, isLightDismiss = _a.isLightDismiss, isHiddenOnDismiss = _a.isHiddenOnDismiss, layerProps = _a.layerProps, type = _a.type, styles = _a.styles, theme = _a.theme, customWidth = _a.customWidth, _d = _a.onLightDismissClick, onLightDismissClick = _d === void 0 ? this._onPanelClick : _d, _e = _a.onRenderNavigation, onRenderNavigation = _e === void 0 ? this._onRenderNavigation : _e, _f = _a.onRenderHeader, onRenderHeader = _f === void 0 ? this._onRenderHeader : _f, _g = _a.onRenderBody, onRenderBody = _g === void 0 ? this._onRenderBody : _g, _h = _a.onRenderFooter, onRenderFooter = _h === void 0 ? this._onRenderFooter : _h;
        var _j = this.state, isFooterSticky = _j.isFooterSticky, isAnimating = _j.isAnimating, id = _j.id;
        var isLeft = type === _Panel_types__WEBPACK_IMPORTED_MODULE_9__["PanelType"].smallFixedNear || type === _Panel_types__WEBPACK_IMPORTED_MODULE_9__["PanelType"].customNear ? true : false;
        var isRTL = Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["getRTL"])();
        var isOnRightSide = isRTL ? isLeft : !isLeft;
        var headerTextId = headerText && id + '-headerText';
        var customWidthStyles = type === _Panel_types__WEBPACK_IMPORTED_MODULE_9__["PanelType"].custom || type === _Panel_types__WEBPACK_IMPORTED_MODULE_9__["PanelType"].customNear ? { width: customWidth } : {};
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_7__["divProperties"]);
        var isOpen = this._isOpen;
        if (!isOpen && !isAnimating && !isHiddenOnDismiss) {
            return null;
        }
        this._classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            focusTrapZoneClassName: focusTrapZoneProps ? focusTrapZoneProps.className : undefined,
            hasCloseButton: hasCloseButton,
            headerClassName: headerClassName,
            isAnimating: isAnimating,
            isFooterSticky: isFooterSticky,
            isFooterAtBottom: isFooterAtBottom,
            isOnRightSide: isOnRightSide,
            isOpen: isOpen,
            isHiddenOnDismiss: isHiddenOnDismiss,
            type: type
        });
        var _classNames = this._classNames;
        var overlay;
        if (isBlocking && isOpen) {
            overlay = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"], { className: _classNames.overlay, isDarkThemed: false, onClick: isLightDismiss ? onLightDismissClick : undefined });
        }
        var header = onRenderHeader(this.props, this._onRenderHeader, headerTextId);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__["Layer"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, layerProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_5__["Popup"], { role: "dialog", "aria-modal": "true", ariaLabelledBy: header ? headerTextId : undefined, onDismiss: this.dismiss, className: _classNames.hiddenPanel },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "aria-hidden": !isOpen && isAnimating }, nativeProps, { ref: this._panel, className: _classNames.root }),
                    overlay,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusTrapZone_index__WEBPACK_IMPORTED_MODULE_8__["FocusTrapZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: !isBlocking || (isHiddenOnDismiss && !isOpen) ? false : forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector, isClickableOutsideFocusTrap: true }, focusTrapZoneProps, { className: _classNames.main, style: customWidthStyles, elementToFocusOnDismiss: elementToFocusOnDismiss }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _classNames.commands, "data-is-visible": true }, onRenderNavigation(this.props, this._onRenderNavigation)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _classNames.contentInner },
                            header,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._allowScrollOnPanel, className: _classNames.scrollableContent, "data-is-scrollable": true }, onRenderBody(this.props, this._onRenderBody)),
                            onRenderFooter(this.props, this._onRenderFooter)))))));
    };
    PanelBase.prototype.open = function () {
        var _this = this;
        if (!this._isOpen) {
            this._isOpen = true;
            this.setState({
                isAnimating: true
            }, function () {
                _this._async.setTimeout(_this._onTransitionComplete, 200);
            });
            if (this.props.onOpen) {
                this.props.onOpen();
            }
        }
    };
    PanelBase.prototype._shouldListenForOuterClick = function (props) {
        return !!props.isBlocking && !!props.isOpen;
    };
    PanelBase.prototype._updateFooterPosition = function () {
        var scrollableContent = this._scrollableContent;
        if (scrollableContent) {
            var height = scrollableContent.clientHeight;
            var innerHeight_1 = scrollableContent.scrollHeight;
            this.setState({
                isFooterSticky: height < innerHeight_1 ? true : false
            });
        }
    };
    PanelBase.prototype._dismissOnOuterClick = function (ev) {
        var panel = this._panel.current;
        if (this._isOpen && panel) {
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_7__["elementContains"])(panel, ev.target)) {
                if (this.props.onOuterClick) {
                    this.props.onOuterClick();
                    ev.preventDefault();
                }
                else {
                    this.dismiss();
                }
            }
        }
    };
    PanelBase.defaultProps = {
        isHiddenOnDismiss: false,
        isOpen: false,
        isBlocking: true,
        hasCloseButton: true,
        type: _Panel_types__WEBPACK_IMPORTED_MODULE_9__["PanelType"].smallFixedFar
    };
    return PanelBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));

//# sourceMappingURL=Panel.base.js.map

/***/ }),

/***/ "pqMv":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Checkbox/Checkbox.styles.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "Gc2k");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "iRzo");


var MS_CHECKBOX_LABEL_SIZE = '20px';
var MS_CHECKBOX_TRANSITION_DURATION = '200ms';
var MS_CHECKBOX_TRANSITION_TIMING = 'cubic-bezier(.4, 0, .23, 1)';
var getStyles = function (props) {
    var className = props.className, theme = props.theme, reversed = props.reversed, checked = props.checked, disabled = props.disabled, isUsingCustomLabelRender = props.isUsingCustomLabelRender;
    var semanticColors = theme.semanticColors;
    var checkmarkFontColor = semanticColors.inputForegroundChecked;
    var checkmarkFontColorCheckedDisabled = semanticColors.disabledBackground;
    var checkmarkFontColorHovered = semanticColors.inputBorder;
    var checkboxBorderColor = semanticColors.smallInputBorder;
    var checkboxBorderColorChecked = semanticColors.inputBackgroundChecked;
    var checkboxBorderColorDisabled = semanticColors.disabledBodySubtext;
    var checkboxBorderHoveredColor = semanticColors.inputBorderHovered;
    var checkboxBackgroundChecked = semanticColors.inputBackgroundChecked;
    var checkboxBackgroundCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxBorderColorCheckedHovered = semanticColors.inputBackgroundCheckedHovered;
    var checkboxHoveredTextColor = semanticColors.bodyText;
    var checkboxBackgroundDisabledChecked = semanticColors.disabledBodySubtext;
    var checkboxTextColor = semanticColors.bodyText;
    var checkboxTextColorDisabled = semanticColors.disabledText;
    return {
        root: [
            'ms-Checkbox',
            {
                position: 'relative',
                display: 'flex'
            },
            reversed && 'reversed',
            checked && 'is-checked',
            !disabled && 'is-enabled',
            disabled && 'is-disabled',
            className
        ],
        input: [
            {
                position: 'absolute',
                background: 'none',
                opacity: 0,
                selectors: (_a = {},
                    _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &:focus + label"] = {
                        outline: '1px solid ' + theme.palette.neutralSecondary,
                        outlineOffset: '2px',
                        selectors: (_b = {},
                            _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                outline: '1px solid ActiveBorder'
                            },
                            _b)
                    },
                    _a)
            }
        ],
        label: [
            'ms-Checkbox-label',
            theme.fonts.medium,
            {
                display: 'flex',
                alignItems: isUsingCustomLabelRender ? 'center' : 'flex-start',
                cursor: disabled ? 'default' : 'pointer',
                position: 'relative',
                userSelect: 'none',
                textAlign: 'left'
            },
            reversed && {
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end'
            },
            !disabled && [
                !checked && {
                    selectors: {
                        ':hover .ms-Checkbox-checkbox': {
                            borderColor: checkboxBorderHoveredColor,
                            selectors: (_c = {},
                                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    borderColor: 'Highlight'
                                },
                                _c)
                        },
                        ':focus .ms-Checkbox-checkbox': { borderColor: checkboxBorderHoveredColor },
                        ':hover .ms-Checkbox-checkmark': {
                            color: checkmarkFontColorHovered,
                            opacity: '1',
                            selectors: (_d = {},
                                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                                    color: 'Highlight'
                                },
                                _d)
                        }
                    }
                },
                checked && {
                    selectors: (_e = {
                            ':hover .ms-Checkbox-checkbox': {
                                background: checkboxBackgroundCheckedHovered,
                                borderColor: checkboxBorderColorCheckedHovered
                            },
                            ':focus .ms-Checkbox-checkbox': {
                                background: checkboxBackgroundCheckedHovered,
                                borderColor: checkboxBorderColorCheckedHovered
                            }
                        },
                        _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            selectors: {
                                ':hover .ms-Checkbox-checkbox': {
                                    background: 'Window',
                                    borderColor: 'Highlight'
                                },
                                ':focus .ms-Checkbox-checkbox': {
                                    background: 'Highlight'
                                },
                                ':focus:hover .ms-Checkbox-checkbox': {
                                    background: 'Highlight'
                                },
                                ':focus:hover .ms-Checkbox-checkmark': {
                                    color: 'Window'
                                },
                                ':hover .ms-Checkbox-checkmark': {
                                    color: 'Highlight'
                                }
                            }
                        },
                        _e)
                },
                {
                    selectors: {
                        ':hover .ms-Checkbox-text': { color: checkboxHoveredTextColor },
                        ':focus .ms-Checkbox-text': { color: checkboxHoveredTextColor }
                    }
                }
            ]
        ],
        checkbox: [
            'ms-Checkbox-checkbox',
            {
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: MS_CHECKBOX_LABEL_SIZE,
                width: MS_CHECKBOX_LABEL_SIZE,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: checkboxBorderColor,
                boxSizing: 'border-box',
                transitionProperty: 'background, border, border-color',
                transitionDuration: MS_CHECKBOX_TRANSITION_DURATION,
                transitionTimingFunction: MS_CHECKBOX_TRANSITION_TIMING,
                /* in case the icon is bigger than the box */
                overflow: 'hidden'
            },
            !reversed
                ? // this margin on the checkbox is for backwards compat.
                    // notably it has the effect where a customRender is used, there will be only a 4px margin from checkbox to label.
                    // the label by default would have another 4px margin for a total of 8px margin between checkbox and label.
                    // we don't combine the two (and move it into the text) to not incur a breaking change for everyone using custom render atm.
                    {
                        marginRight: 4
                    }
                : {
                    marginLeft: 4
                },
            !disabled &&
                checked && {
                background: checkboxBackgroundChecked,
                borderColor: checkboxBorderColorChecked,
                selectors: (_f = {},
                    _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        background: 'Highlight',
                        borderColor: 'Highlight'
                    },
                    _f)
            },
            disabled && {
                borderColor: checkboxBorderColorDisabled,
                selectors: (_g = {},
                    _g[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderColor: 'InactiveBorder'
                    },
                    _g)
            },
            checked &&
                disabled && {
                background: checkboxBackgroundDisabledChecked,
                borderColor: checkboxBorderColorDisabled
            }
        ],
        checkmark: [
            'ms-Checkbox-checkmark',
            {
                opacity: checked ? '1' : '0',
                color: checked && disabled ? checkmarkFontColorCheckedDisabled : checkmarkFontColor,
                selectors: (_h = {},
                    _h[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        color: disabled ? 'InactiveBorder' : 'Window',
                        MsHighContrastAdjust: 'none'
                    },
                    _h)
            }
        ],
        text: [
            'ms-Checkbox-text',
            {
                color: disabled ? checkboxTextColorDisabled : checkboxTextColor,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].medium,
                lineHeight: '20px'
            },
            !reversed
                ? {
                    marginLeft: 4
                }
                : {
                    marginRight: 4
                },
            disabled && {
                selectors: (_j = {},
                    _j[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        // backwards compat for the color of the text when the checkbox was rendered
                        // using a Button.
                        color: 'InactiveBorder'
                    },
                    _j)
            }
        ]
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
};
//# sourceMappingURL=Checkbox.styles.js.map

/***/ }),

/***/ "qIec":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/components/Dropdown/Dropdown.types.js ***!
  \********************************************************************************************************************************/
/*! exports provided: DropdownMenuItemType, ResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "p6i1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_0__["ResponsiveMode"]; });

/* harmony import */ var _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/selectableOption/SelectableOption.types */ "c1k0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenuItemType", function() { return _utilities_selectableOption_SelectableOption_types__WEBPACK_IMPORTED_MODULE_1__["SelectableOptionMenuItemType"]; });



 // Exported because the type is an optional prop and not exported otherwise.
//# sourceMappingURL=Dropdown.types.js.map

/***/ }),

/***/ "ruqu":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/node_modules/office-ui-fabric-react/lib/Panel.js ***!
  \***************************************************************************************************/
/*! exports provided: Panel, PanelType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Panel/index */ "2tUa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelType", function() { return _components_Panel_index__WEBPACK_IMPORTED_MODULE_0__["PanelType"]; });


//# sourceMappingURL=Panel.js.map

/***/ }),

/***/ "sxkt":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/propertyFields/collectionData/PropertyFieldCollectionDataHost.module.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../postcss-loader/src??postcss!./PropertyFieldCollectionDataHost.module.css */ "fbad");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "tGMu":
/*!*************************************************************************************!*\
  !*** ./node_modules/@pnp/spfx-property-controls/lib/PropertyFieldCollectionData.js ***!
  \*************************************************************************************/
/*! exports provided: CustomCollectionFieldType, PropertyFieldCollectionData, PropertyFieldCollectionDataHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propertyFields_collectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyFields/collectionData */ "HR+7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomCollectionFieldType", function() { return _propertyFields_collectionData__WEBPACK_IMPORTED_MODULE_0__["CustomCollectionFieldType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionData", function() { return _propertyFields_collectionData__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldCollectionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyFieldCollectionDataHost", function() { return _propertyFields_collectionData__WEBPACK_IMPORTED_MODULE_0__["PropertyFieldCollectionDataHost"]; });


//# sourceMappingURL=PropertyFieldCollectionData.js.map

/***/ })

}]);
//# sourceMappingURL=chunk.vendors~pnp-propcontrols-colldata.js.map