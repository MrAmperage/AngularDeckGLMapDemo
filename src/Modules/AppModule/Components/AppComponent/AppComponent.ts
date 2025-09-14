import { Component } from "@angular/core";
import { CustomMapController, MapModel } from "@mr.amperage/angular-deck.gl";
import { OBJLoader } from "@loaders.gl/obj";

@Component({
  selector: "AppComponent",
  templateUrl: "./AppComponent.html",
  styleUrls: ["./AppComponent.css"],
  standalone: false,
})
export default class AppComponent {
  ModelLoader = OBJLoader;
  MapController = CustomMapController;
  Data: MapModel[] = [
    new MapModel(
      {
        Coordinates: [87.15609686851167, 54.22993514648337, 0],
        Mesh: "",
        Color: [256, 0, 0],
      },
      "Three"
    ),
  ];
}
