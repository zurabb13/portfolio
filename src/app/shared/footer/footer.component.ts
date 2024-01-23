import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  date = new Date();
  contact = [
    {
      img: '../../../assets/img/svg/icons/facebook.svg',
      title: 'facebook',
      url: 'https://www.facebook.com',
    },
    {
      img: '../../../assets/img/svg/icons/github.svg',
      title: 'github',
      url: 'https://www.github.com/zurabb13',
    },
    {
      img: '../../../assets/img/svg/icons/linkedin.svg',
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/zurabb13',
    },
    {
      img: '../../../assets/img/svg/icons/twitter.svg',
      title: 'X',
      url: 'https://x.com',
    },
  ];
}
