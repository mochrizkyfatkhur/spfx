import { stylesheet } from 'typestyle';
export var createstyles = function (theme) {
    return stylesheet({
        root: {
            backgroundColor: theme.semanticColors.bodyBackground,
        },
        title: {
            color: theme.palette.themePrimary,
            fontSize: theme.fonts.large.fontSize
        }
    });
};
//# sourceMappingURL=ThemeVariantTypeStyle.styles.js.map