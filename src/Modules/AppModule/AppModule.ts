import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./Components/AppComponent/AppComponent";
import { MapComponent } from "angular-map-libre-gl";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
