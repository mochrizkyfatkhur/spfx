import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { ITileInfo } from './components';
export interface ITilesWebPartProps {
    collectionData: ITileInfo[];
    tileHeight: number;
    tileWidth: number;
    tileColour: string;
    tileFont: string;
    title: string;
    staticWidth: boolean;
    colourMode: string;
    themeVariant: IReadonlyTheme | undefined;
    ThemeColorsFromWindow: IReadonlyTheme | undefined;
    borderRadius: number;
    justifyItems: string;
    bannerImageUrl: string;
}
export default class TilesWebPart extends BaseClientSideWebPart<ITilesWebPartProps> {
    private propertyFieldNumber;
    private propertyFieldCollectionData;
    private customCollectionFieldType;
    private propertyFieldColorPicker;
    private propertyFieldColorPickerStyle;
    private _themeProvider;
    private _themeVariant;
    protected onInit(): Promise<void>;
    private _handleThemeChangedEvent;
    render(): void;
    protected loadPropertyPaneResources(): Promise<void>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TilesWebPart.d.ts.map