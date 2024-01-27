import { Component } from "@angular/core";
import { DescComponent } from "./desc/desc.component";

@Component({
  selector: "app-us-services",
  standalone: true,
  imports: [DescComponent],
  templateUrl: "./us-services.component.html",
  styleUrl: "./us-services.component.scss",
})
export class UsServicesComponent {
  id = "services";
}
