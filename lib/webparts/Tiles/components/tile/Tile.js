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
var __assign = (this && this.__assign) || function () {
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
import * as React from 'react';
import styles from './Tile.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/components/Icon';
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var palette = this.props.themeVariant.palette;
        var tileStyle = {};
        var icoStyle = {};
        var tileFontSize = {};
        var tileInnerStyle = {};
        var fontInnerStyle = {};
        if (this.props.staticWidth) {
            tileStyle.flexBasis = "".concat(this.props.tileWidth, "px");
            tileStyle.minWidth = "".concat(this.props.tileWidth, "px");
            tileStyle.flexGrow = 0;
        }
        else {
            tileStyle.flexBasis = '120px';
            tileStyle.minWidth = '120px';
            tileStyle.flexGrow = 1;
        }
        if (this.props.tileHeight) {
            tileStyle.height = "".concat(this.props.tileHeight, "px");
            icoStyle.fontSize = "".concat(Math.round(this.props.tileHeight / 2 - 18), "px");
            tileFontSize.fontSize = "".concat(Math.round(this.props.tileHeight / 6 - 6), "px");
        }
        if (this.props.colourMode === '1' || this.props.colourMode === undefined) {
            tileInnerStyle.backgroundColor = palette.themePrimary;
            fontInnerStyle.color = palette.white;
        }
        else if (this.props.colourMode === '2') {
            if (this.props.tileColour) {
                tileInnerStyle.backgroundColor = "".concat(this.props.tileColour);
                fontInnerStyle.color = "".concat(this.props.tileFont);
            }
        }
        else {
            tileInnerStyle.backgroundColor = "".concat(this.props.item.background);
            fontInnerStyle.color = "".concat(this.props.item.foreground);
        }
        // Add borderRadius and justifyItems to the container
        tileInnerStyle.borderRadius = "".concat(this.props.borderRadius, "px");
        tileInnerStyle.display = 'flex';
        tileInnerStyle.justifyContent = this.props.justifyItems;
        tileInnerStyle.alignItems = 'center'; // Ensure items are centered vertically
        return (React.createElement("div", { className: styles.tile, style: tileStyle },
            React.createElement("a", { href: this.props.item.url, target: this.props.item.target, title: this.props.item.title, style: tileInnerStyle },
                React.createElement("div", { className: styles.tileIcon },
                    React.createElement(Icon, { iconName: this.props.item.icon, style: __assign(__assign({}, fontInnerStyle), icoStyle) })),
                React.createElement("div", { className: styles.tileTitle, style: __assign(__assign({}, fontInnerStyle), tileFontSize) }, this.props.item.title),
                React.createElement("div", { className: styles.overflow }, this.props.item.description))));
    };
    return Tile;
}(React.Component));
export { Tile };
//# sourceMappingURL=Tile.js.map