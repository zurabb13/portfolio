import { Component,OnInit } from "@angular/core";
import { AboutComponent } from "../about/about.component";


@Component({
  selector: "app-banner",
  standalone: true,
  imports: [AboutComponent],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
})
export class BannerComponent implements OnInit {
 about:string = "Hello ✌️ I'm Zura Baramia"
 ngOnInit(){
  this.about
 }
}