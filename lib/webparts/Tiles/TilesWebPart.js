var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'TilesWebPartStrings';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ThemeProvider } from '@microsoft/sp-component-base';
import { PropertyPaneToggle, PropertyPaneSlider, PropertyPaneDropdown } from '@microsoft/sp-property-pane';
import { Tiles, LinkTarget } from './components';
import { IconPicker } from '@pnp/spfx-controls-react/lib/IconPicker';
import { initializeIcons } from 'office-ui-fabric-react/lib';
import { SimpleColorPicker } from './components/colorpicker/SimpleColorPicker';
var ThemeColorsFromWindow = window.__themeState__.theme;
var TilesWebPart = /** @class */ (function (_super) {
    __extends(TilesWebPart, _super);
    function TilesWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TilesWebPart.prototype.onInit = function () {
        this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
        this._themeVariant = this._themeProvider.tryGetTheme();
        this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);
        if (this.context.sdks.microsoftTeams)
            initializeIcons();
        return _super.prototype.onInit.call(this);
    };
    TilesWebPart.prototype._handleThemeChangedEvent = function (args) {
        this._themeVariant = args.theme;
        this.render();
    };
    TilesWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(Tiles, {
            title: this.properties.title,
            tileHeight: this.properties.tileHeight,
            tileWidth: this.properties.tileWidth,
            tileColour: this.properties.tileColour,
            tileFont: this.properties.tileFont,
            staticWidth: this.properties.staticWidth,
            collectionData: this.properties.collectionData,
            displayMode: this.displayMode,
            themeVariant: this._themeVariant,
            ThemeColorsFromWindow: ThemeColorsFromWindow,
            colourMode: this.properties.colourMode,
            borderRadius: this.properties.borderRadius,
            justifyItems: this.properties.justifyItems,
            bannerImageUrl: this.properties.bannerImageUrl,
            fUpdateProperty: function (value) {
                _this.properties.title = value;
            },
            fPropertyPaneOpen: this.context.propertyPane.open
        });
        ReactDom.render(element, this.domElement);
    };
    TilesWebPart.prototype.loadPropertyPaneResources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, PropertyFieldColorPicker, PropertyFieldColorPickerStyle, PropertyFieldNumber, _b, PropertyFieldCollectionData, CustomCollectionFieldType;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, import('@pnp/spfx-property-controls/lib/PropertyFieldColorPicker')];
                    case 1:
                        _a = _c.sent(), PropertyFieldColorPicker = _a.PropertyFieldColorPicker, PropertyFieldColorPickerStyle = _a.PropertyFieldColorPickerStyle;
                        return [4 /*yield*/, import('@pnp/spfx-property-controls/lib/propertyFields/number')];
                    case 2:
                        PropertyFieldNumber = (_c.sent()).PropertyFieldNumber;
                        return [4 /*yield*/, import('@pnp/spfx-property-controls/lib/PropertyFieldCollectionData')];
                    case 3:
                        _b = _c.sent(), PropertyFieldCollectionData = _b.PropertyFieldCollectionData, CustomCollectionFieldType = _b.CustomCollectionFieldType;
                        this.propertyFieldNumber = PropertyFieldNumber;
                        this.propertyFieldCollectionData = PropertyFieldCollectionData;
                        this.customCollectionFieldType = CustomCollectionFieldType;
                        this.propertyFieldColorPicker = PropertyFieldColorPicker;
                        this.propertyFieldColorPickerStyle = PropertyFieldColorPickerStyle;
                        return [2 /*return*/];
                }
            });
        });
    };
    TilesWebPart.prototype.getPropertyPaneConfiguration = function () {
        var tileColourplaceholder = [];
        var tileFontplaceholder = [];
        var tileStaticWidthplaceholder = [];
        if (this.properties.colourMode === '2') {
            tileColourplaceholder = this.propertyFieldColorPicker('tileColour', {
                key: "tileColour",
                label: strings.tileColour,
                selectedColor: this.properties.tileColour,
                onPropertyChange: this.onPropertyPaneFieldChanged,
                properties: this.properties,
                disabled: false,
                isHidden: false,
                alphaSliderHidden: false,
                style: this.propertyFieldColorPickerStyle.Full,
                iconName: 'Precipitation'
            });
            tileFontplaceholder = this.propertyFieldColorPicker('tileFont', {
                key: "tileFont",
                label: strings.tileFont,
                selectedColor: this.properties.tileFont,
                onPropertyChange: this.onPropertyPaneFieldChanged,
                properties: this.properties,
                disabled: false,
                isHidden: false,
                alphaSliderHidden: false,
                style: this.propertyFieldColorPickerStyle.Full,
                iconName: 'Precipitation'
            });
        }
        if (this.properties.staticWidth) {
            tileStaticWidthplaceholder = PropertyPaneSlider('tileWidth', {
                label: strings.widthStaticSet,
                max: 1000,
                min: 10,
                step: 1,
                showValue: true,
                value: this.properties.tileHeight
            });
        }
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: "Tile Content",
                            groupFields: [
                                this.propertyFieldCollectionData("collectionData", {
                                    key: "collectionData",
                                    label: strings.tilesDataLabel,
                                    panelHeader: strings.tilesPanelHeader,
                                    panelDescription: "",
                                    manageBtnLabel: strings.tilesManageBtn,
                                    value: this.properties.collectionData,
                                    fields: [
                                        {
                                            id: "title",
                                            title: strings.titleField,
                                            type: this.customCollectionFieldType.string,
                                            required: true
                                        },
                                        {
                                            id: "description",
                                            title: strings.descriptionField,
                                            type: this.customCollectionFieldType.string,
                                            required: false
                                        },
                                        {
                                            id: "url",
                                            title: strings.urlField,
                                            type: this.customCollectionFieldType.string,
                                            required: true
                                        },
                                        {
                                            id: "sortOrder",
                                            title: strings.sortOrder,
                                            type: this.customCollectionFieldType.number,
                                            required: true
                                        },
                                        {
                                            id: "background",
                                            title: strings.colorSetUniqueBg,
                                            type: this.customCollectionFieldType.custom,
                                            onCustomRender: function (field, value, onUpdate, item, itemId, onError) {
                                                return (React.createElement(SimpleColorPicker, {
                                                    key: itemId,
                                                    onChange: function (colour) {
                                                        onUpdate(field.id, colour);
                                                        return Event;
                                                    }
                                                }));
                                            }
                                        },
                                        {
                                            id: "foreground",
                                            title: strings.colorSetUniqueFg,
                                            type: this.customCollectionFieldType.custom,
                                            onCustomRender: function (field, value, onUpdate, item, itemId, onError) {
                                                return (React.createElement(SimpleColorPicker, {
                                                    key: itemId,
                                                    onChange: function (colour) {
                                                        onUpdate(field.id, colour);
                                                        return Event;
                                                    }
                                                }));
                                            }
                                        },
                                        {
                                            id: "icon",
                                            title: strings.iconField,
                                            type: this.customCollectionFieldType.custom,
                                            onCustomRender: function (field, value, onUpdate, item, itemId, onError) {
                                                return (React.createElement(IconPicker, {
                                                    key: itemId,
                                                    currentIcon: value,
                                                    buttonLabel: strings.iconSelectFile,
                                                    onChange: function (iconName) {
                                                        onUpdate(field.id, iconName);
                                                        return Event;
                                                    },
                                                    onSave: function (iconName) {
                                                        onUpdate(field.id, iconName);
                                                        return Event;
                                                    }
                                                }));
                                            }
                                        },
                                        {
                                            id: "target",
                                            title: strings.targetField,
                                            type: this.customCollectionFieldType.dropdown,
                                            options: [
                                                {
                                                    key: LinkTarget.parent,
                                                    text: strings.targetCurrent
                                                },
                                                {
                                                    key: LinkTarget.blank,
                                                    text: strings.targetNew
                                                }
                                            ]
                                        }
                                    ]
                                })
                            ]
                        },
                        {
                            groupName: "Tile Settings",
                            groupFields: [
                                PropertyPaneSlider('tileHeight', {
                                    label: strings.tilesHeight,
                                    max: 300,
                                    min: 120,
                                    step: 1,
                                    showValue: true,
                                    value: this.properties.tileHeight
                                }),
                                PropertyPaneToggle('staticWidth', {
                                    key: 'staticWidthID',
                                    label: strings.widthAutomaticOrStatic,
                                    onText: strings.widthStatic,
                                    offText: strings.widthAutomatic,
                                    checked: this.properties.staticWidth
                                }),
                                tileStaticWidthplaceholder,
                                PropertyPaneDropdown('colourMode', {
                                    label: strings.colourMode,
                                    options: [
                                        { key: '1', text: strings.colourModeTheme },
                                        { key: '2', text: strings.colourModeUniform },
                                        { key: '3', text: strings.colourModeUnique }
                                    ],
                                    selectedKey: '1',
                                }),
                                tileColourplaceholder,
                                tileFontplaceholder,
                                // INI MASIH BELUM WORK, HARUSNTA APPLY KE CONTAINER SAMA BG BUKAN DI ICONS
                                PropertyPaneSlider('borderRadius', {
                                    label: strings.borderRadius,
                                    max: 50,
                                    min: 0,
                                    step: 1,
                                    showValue: true,
                                    value: this.properties.borderRadius
                                }),
                                PropertyPaneDropdown('justifyItems', {
                                    label: strings.justifyItems,
                                    options: [
                                        { key: 'start', text: strings.justifyStart },
                                        { key: 'center', text: strings.justifyCenter },
                                        { key: 'end', text: strings.justifyEnd }
                                    ],
                                    selectedKey: 'center',
                                }),
                                PropertyPaneFilePicker('')
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return TilesWebPart;
}(BaseClientSideWebPart));
export default TilesWebPart;
//# sourceMappingURL=TilesWebPart.js.map