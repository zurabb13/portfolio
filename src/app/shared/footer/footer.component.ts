import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { Info } from "../info";
import { Infos } from "../../modals/info";
@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  constructor(){
    this.contact = Info
  }
  date = new Date();
  contact:Infos[] = [] 
}
