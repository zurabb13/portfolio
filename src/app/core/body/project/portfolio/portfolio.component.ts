import { NgOptimizedImage } from "@angular/common";
import { Component, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss"
})
export class PortfolioComponent {
  project = [
    {
      img: "assets/img/png/services/nisa.jpg",
      detail: "Blog CMS",
      name: "NISA CMS",
      done: true,
      link: "https://nisa-two.vercel.app/home"
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Blog Platform",
      comming: "coming soon",
      done: false,
      link: ""
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Job Board",
      comming: "coming soon",
      done: false,
      link: ""
    },
    {
      img: "assets/img/png/services/ad.jpg",
      detail: "branding",
      name: "Airbnb",
      comming: "coming soon",
      done: false,
      link: ""
    }
  ];
  comming = "coming soon";
}
