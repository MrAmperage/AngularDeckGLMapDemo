import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./Components/AppComponent/AppComponent";
import {
  DeckGLComponent,
  MapService,
  TileLayerDirective,
  SimpleMeshLayerDirective,
  TerrainLayerDirective,
} from "@mr.amperage/angular-deck.gl";
import { TerrainMeshExtensionDirective } from "@mr.amperage/angular-terrain-deck.gl-widget";
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
    SimpleMeshLayerDirective,
    TerrainMeshExtensionDirective,
    TerrainLayerDirective,
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
