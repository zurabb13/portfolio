import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { Infos } from "../../../modals/info";
import { Info } from "../../../shared/info";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  constructor(){
    this.info = Info
  }
  info:Infos[]= []
}
