import { Component } from "@angular/core";
import { CustomMapController } from "angular-deck.gl-map";

@Component({
  selector: "AppComponent",
  templateUrl: "./AppComponent.html",
  styleUrls: ["./AppComponent.css"],
  standalone: false,
})
export default class AppComponent {
  MapController = CustomMapController;
}
