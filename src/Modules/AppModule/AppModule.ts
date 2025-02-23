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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DeckGLComponent,
    TileLayerComponent,
    TerrainLayer,
    DrillingProjectLoaderComponent,
    ToolbarWidgetComponent,
  ],
  providers: [DeckGLComponent, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
