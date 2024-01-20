import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { UsServicesComponent } from '../../us-services/us-services.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    AboutMeComponent,
    UsServicesComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
