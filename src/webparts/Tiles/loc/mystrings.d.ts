declare interface ITilesWebPartStrings {
  PropertyPaneDescription: string;
  TilesListDescription: string;
  TileHeight: string;
  tileColour: string;
  tileFont: string;
  iconInformation: string;

  // Properties
  tilesDataLabel: string;
  tilesPanelHeader: string;
  tilesManageBtn: string;
  tilesHeight: string;

  //Properties colour mode
  colourMode: string;
  colourModeTheme: string;
  colourModeUniform: string;
  colourModeUnique: string;

  //Properties width
  widthAutomaticOrStatic: string;
  widthStatic: string;
  widthAutomatic: string;
  widthStaticSet: string;

  //Properties icon
  iconSelectFile: string;

  //Properties color
  colorSetUniqueFg: string;
  colorSetUniqueBg: string;

  //Properties border radius and justify items
  borderRadius: string;
  justifyItems: string;
  justifyStart: string;
  justifyCenter: string;
  justifyEnd: string;

  //banner
  bannerImageFileButtonLabel: string;

  // Tile fields
  titleField: string;
  descriptionField: string;
  urlField: string;
  iconField: string;
  targetField: string;
  sortOrder: string;

  targetCurrent: string;
  targetNew: string;

  // Component
  noTilesIconText: string;
  noTilesConfigured: string;
  noTilesBtn: string;
}

declare module 'TilesWebPartStrings' {
  const strings: ITilesWebPartStrings;
  export = strings;
}