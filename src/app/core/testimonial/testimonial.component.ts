import { AfterViewInit, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
register();
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent implements AfterViewInit {
  info = [
    {
      img: './../../../assets/img/png/testimonial/test-1.jpg',
      name: 'Esther Howard',
      description: `Working with people from all over the world makes for many great
              collaborations and projects. Here's what some of them say about working
              with me. Ultrices in cursus.`,
      position: ' Web Development',
    },
    {
      img: './../../../assets/img/png/testimonial/test-2.jpg',
      name: 'Esther Howard',
      description: `Working with people from all over the world makes for many great
              collaborations and projects. Here's what some of them say about working
              with me. Ultrices in cursus.`,
      position: ' Web Development',
    },
    {
      img: './../../../assets/img/png/testimonial/test-3.jpg',
      name: 'Esther Howard',
      description: `Working with people from all over the world makes for many great
              collaborations and projects. Here's what some of them say about working
              with me. Ultrices in cursus.`,
      position: ' Web Development',
    },
  ];
  partners = [
    {
      img: './../../../assets/img/png/partners/aos.png',
      title: 'aos',
    },
    {
      img: './../../../assets/img/png/partners/buzzer.png',
      title: 'buzzer',
    },
    {
      img: './../../../assets/img/png/partners/forbes.png',
      title: 'forbes',
    },
    {
      img: './../../../assets/img/png/partners/kik.png',
      title: 'kik',
    },
    {
      img: './../../../assets/img/png/partners/paypal.png',
      title: 'paypal',
    },
    {
      img: './../../../assets/img/png/partners/ts.png',
      title: 'ts',
    },
  ];
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      loop: true,
    });
    const partners = new Swiper('.partners', {
      slidesPerView: 5,
      loop: true,
    });
  }
}
