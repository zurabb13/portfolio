import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { UsServicesComponent } from '../../us-services/us-services.component';
import { ProjectComponent } from '../../project/project.component';
import { TestimonialComponent } from '../../testimonial/testimonial.component';
import { ContactComponent } from '../../contact/contact.component';

const COMPONENTS = [
  BannerComponent,
  AboutComponent,
  AboutMeComponent,
  UsServicesComponent,
  ProjectComponent,
  TestimonialComponent,
  ContactComponent,
];
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
