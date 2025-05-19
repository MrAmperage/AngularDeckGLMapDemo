import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./Components/AppComponent/AppComponent";
import {
  DeckGLComponent,
  DrillingProjectLoaderComponent,
  ToolbarWidgetComponent,
  MapService,
  TileLayerDirective,
  TerrainLayerDirective,
} from "angular-deck.gl-map";
import { provideNzConfig } from "ng-zorro-antd/core/config";
import { GlobalNgZorroConfig, GlobalNzZorroDateProvider } from "./NzConfig";
import { provideNzI18n, ru_RU } from "ng-zorro-antd/i18n";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import ru from "@angular/common/locales/ru";
registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DeckGLComponent,
    TileLayerDirective,
    TerrainLayerDirective,
    DrillingProjectLoaderComponent,
    ToolbarWidgetComponent,
  ],
  providers: [
    DeckGLComponent,
    MapService,
    provideNzConfig(GlobalNgZorroConfig),
    provideNzI18n(ru_RU),
    GlobalNzZorroDateProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
