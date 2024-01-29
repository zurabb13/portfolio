import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
  project = [
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "E-Commerce",
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Blog Platform",
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Job Board",
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Airbnb",
    },
  ];
  comming = "coming soon"
}
