import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./core/header/header.component";
import { BodyComponent } from "./core/body/body.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CacheInterceptor } from "./core/utils/cache.interseptors";

const COMPONENTS = [HeaderComponent, BodyComponent];
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...COMPONENTS],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ]
})
export class AppComponent {
  title = "portfolio";
}
