import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./core/header/header.component";
import { BodyComponent } from "./core/body/body.component";

const COMPONENTS = [HeaderComponent, BodyComponent];
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...COMPONENTS],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "portfolio";
}
