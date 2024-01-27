import { Component, Output, EventEmitter } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { nav } from "./../../core/header/header/navigation/nav";
import { Nav } from "../../modals/nav.melal";
import { NgOptimizedImage } from "@angular/common";
import { ScrollService } from "../../services/scroll.service";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [MatSidenavModule, NgOptimizedImage],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export class ListComponent {
  @Output() closeModel = new EventEmitter<void>();
  constructor(private scrollService: ScrollService) {
    this.burgerManu = nav;
  }
  burgerManu: Nav[] = [];

  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }
}
