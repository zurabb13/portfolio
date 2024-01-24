import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  project = [
    {
      img: 'assets/img/png/services/ad.jpg',
      detail: 'branding',
      name: 'Say Coffee',
    },
    {
      img: 'assets/img/png/services/ad.jpg',
      detail: 'branding',
      name: 'Say Coffee',
    },
    {
      img: 'assets/img/png/services/ad.jpg',
      detail: 'branding',
      name: 'Say Coffee',
    },
    {
      img: 'assets/img/png/services/ad.jpg',
      detail: 'branding',
      name: 'Say Coffee',
    },
  ];
}
