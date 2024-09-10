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
import * as React from 'react';
import * as strings from 'TilesWebPartStrings';
import styles from './Tiles.module.scss';
import { Tile } from './tile';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
import { createstyles } from './ThemeVariantTypeStyle.styles';
import { css } from "@uifabric/utilities/lib/css";
var Tiles = /** @class */ (function (_super) {
    __extends(Tiles, _super);
    function Tiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Default React render method
     */
    Tiles.prototype.render = function () {
        var _this = this;
        var CustomStyles = createstyles(this.props.themeVariant);
        return (React.createElement("div", { className: css(styles.tiles, CustomStyles.root) },
            React.createElement(WebPartTitle, { displayMode: this.props.displayMode, title: this.props.title, updateProperty: this.props.fUpdateProperty }),
            this.props.collectionData && this.props.collectionData.length > 0 ? (React.createElement("div", { className: styles.tilesList }, this.props.collectionData
                .sort(function (a, b) {
                return parseInt(a.sortOrder) > parseInt(b.sortOrder) ?
                    1 : ((parseInt(b.sortOrder) > parseInt(a.sortOrder) ? -1 : 0));
            })
                .map(function (tile, idx) {
                return React.createElement(Tile, { key: idx, item: tile, tileHeight: _this.props.tileHeight, tileWidth: _this.props.tileWidth, tileColour: _this.props.tileColour, tileFont: _this.props.tileFont, staticWidth: _this.props.staticWidth, colourMode: _this.props.colourMode, themeVariant: _this.props.themeVariant, ThemeColorsFromWindow: _this.props.ThemeColorsFromWindow, borderRadius: _this.props.borderRadius, justifyItems: _this.props.justifyItems });
            }))) : (React.createElement(Placeholder, { iconName: 'Edit', iconText: strings.noTilesIconText, description: strings.noTilesConfigured, buttonLabel: strings.noTilesBtn, onConfigure: this.props.fPropertyPaneOpen }))));
    };
    return Tiles;
}(React.Component));
export { Tiles };
//# sourceMappingURL=Tiles.js.map