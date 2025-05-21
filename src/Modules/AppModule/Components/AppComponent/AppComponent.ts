import { Component } from "@angular/core";
import { CustomMapController, MapModel } from "angular-deck.gl-map";

@Component({
  selector: "AppComponent",
  templateUrl: "./AppComponent.html",
  styleUrls: ["./AppComponent.css"],
  standalone: false,
})
export default class AppComponent {
  MapController = CustomMapController;
  Data: MapModel[] = [
    new MapModel({
      Position: [87.15609686851167, 54.22993514648337, 0],
      Mesh: "",
      Color: [256, 0, 0],
    }),
  ];
}
