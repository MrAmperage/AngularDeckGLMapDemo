import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./Components/AppComponent/AppComponent";
import {
  DrillingProjectMapPluginComponent,
  MapComponent,
  TerrainLayerComponent,
} from "angular-map-libre-gl";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MapComponent,
    TerrainLayerComponent,
    DrillingProjectMapPluginComponent,
  ],
  providers: [MapComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
