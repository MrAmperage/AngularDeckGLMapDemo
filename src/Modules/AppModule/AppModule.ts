import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./Components/AppComponent/AppComponent";
import {
  TileLayerComponent,
  DeckGLComponent,
  TerrainLayer,
  DrillingProjectLoaderComponent,
  ToolbarWidgetComponent,
  MapService,
} from "angular-deck.gl-map";
import { provideNzConfig } from "ng-zorro-antd/core/config";
import { GlobalNgZorroConfig } from "./NzConfig";
import { provideNzI18n, ru_RU } from "ng-zorro-antd/i18n";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DeckGLComponent,
    TileLayerComponent,
    TerrainLayer,
    DrillingProjectLoaderComponent,
    ToolbarWidgetComponent,
  ],
  providers: [
    DeckGLComponent,
    MapService,
    provideNzConfig(GlobalNgZorroConfig),
    provideNzI18n(ru_RU),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
