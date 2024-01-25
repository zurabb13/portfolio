import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { UsServicesComponent } from './us-services/us-services.component';

const COMPONENTS = [
  BannerComponent,
  AboutMeComponent,
  UsServicesComponent,
  ProjectComponent,
  TestimonialComponent,
  ContactComponent,
  FooterComponent,
];
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
