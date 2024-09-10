import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'TilesWebPartStrings';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ThemeProvider, ThemeChangedEventArgs, IReadonlyTheme } from '@microsoft/sp-component-base';
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { PropertyPaneToggle, PropertyPaneSlider, PropertyPaneDropdown, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { Tiles, ITilesProps, ITileInfo, LinkTarget } from './components';
import { IconPicker } from '@pnp/spfx-controls-react/lib/IconPicker';
import { ColorPicker, initializeIcons } from 'office-ui-fabric-react/lib';
import { SimpleColorPicker } from './components/colorpicker/SimpleColorPicker';
import { PropertyFieldFilePicker } from '@pnp/spfx-property-controls/lib/PropertyFieldFilePicker';
import { IFilePickerResult } from '@pnp/spfx-property-controls/lib/PropertyFieldFilePicker';

const ThemeColorsFromWindow: any = (window as any).__themeState__.theme;

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
  bannerImage: string;
}

export default class TilesWebPart extends BaseClientSideWebPart<ITilesWebPartProps> {
  private propertyFieldNumber;
  private propertyFieldCollectionData;
  private customCollectionFieldType;
  private propertyFieldColorPicker;
  private propertyFieldColorPickerStyle;
  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  protected onInit(): Promise<void> {
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);
    this._themeVariant = this._themeProvider.tryGetTheme();
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);

    if (this.context.sdks.microsoftTeams)
      initializeIcons();

    return super.onInit();
  }

  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._themeVariant = args.theme;
    this.render();
  }

  public render(): void {
    const element: React.ReactElement<ITilesProps> = React.createElement(
      Tiles,
      {
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
        bannerImage: this.properties.bannerImage,
        fUpdateProperty: (value: string) => {
          this.properties.title = value;
        },
        fPropertyPaneOpen: this.context.propertyPane.open
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected async loadPropertyPaneResources(): Promise<void> {
    const { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } = await import(
      '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker'
    );

    const { PropertyFieldNumber } = await import(
      '@pnp/spfx-property-controls/lib/propertyFields/number'
    );
    const { PropertyFieldCollectionData, CustomCollectionFieldType } = await import(
      '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData'
    );

    this.propertyFieldNumber = PropertyFieldNumber;
    this.propertyFieldCollectionData = PropertyFieldCollectionData;
    this.customCollectionFieldType = CustomCollectionFieldType;
    this.propertyFieldColorPicker = PropertyFieldColorPicker;
    this.propertyFieldColorPickerStyle = PropertyFieldColorPickerStyle;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    let tileColourplaceholder: any = [];
    let tileFontplaceholder: any = [];
    let tileStaticWidthplaceholder: any = [];
  
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
                  panelDescription: ``,
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
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(SimpleColorPicker, {
                            key: itemId,
                            onChange: (colour: string) => {
                              onUpdate(field.id, colour);
                              return Event;
                            }
                          })
                        );
                      }
                    },
                    {
                      id: "foreground",
                      title: strings.colorSetUniqueFg,
                      type: this.customCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(SimpleColorPicker, {
                            key: itemId,
                            onChange: (colour: string) => {
                              onUpdate(field.id, colour);
                              return Event;
                            }
                          })
                        );
                      }
                    },
                    {
                      id: "icon",
                      title: strings.iconField,
                      type: this.customCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {
                        return (
                          React.createElement(IconPicker, {
                            key: itemId,
                            currentIcon: value,
                            buttonLabel: strings.iconSelectFile,
                            onChange: (iconName: string) => {
                              onUpdate(field.id, iconName);
                              return Event;
                            },
                            onSave: (iconName: string) => {
                              onUpdate(field.id, iconName);
                              return Event;
                            }
                          })
                        );
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
                PropertyFieldFilePicker('bannerImage', {
                  label: strings.bannerImageFileButtonLabel,
                  buttonLabel: strings.bannerImageFileButtonLabel,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: 'bannerImage',
                  filePickerResult: this.properties.bannerImage as unknown as IFilePickerResult,
                  onSave: (filePickerResult: IFilePickerResult) => {
                    this.properties.bannerImage = filePickerResult;
                  },
                  context: this.context
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}