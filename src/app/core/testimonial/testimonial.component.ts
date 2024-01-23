import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { info, partners } from './testimonial';
import { Info, Partner } from '../../modals/testimonial.modal';
register();
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent implements AfterViewInit, OnInit {
  info: Info[] = [];
  partners: Partner[] = [];

  ngOnInit(): void {
    this.info = info;
    this.partners = partners;
  }
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
