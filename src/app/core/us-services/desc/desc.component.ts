import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface Desc {
  title: string;
  description: string;
  img: string;
}
@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.scss',
  animations: [
    trigger('mouseenter', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('200ms ease-in')),
    ]),
  ],
})
export class DescComponent {
  isHovered = false;
  desc: Desc[] = [
    {
      title: 'Web Development',
      description:
        'Branding strategy Podcasting inside of workflows to establish a framework. Taking key performance indicators.',
      img: './assets/img/png/services/web.jpg',
    },
    {
      title: 'Branding strategy',
      description:
        'Podcasting inside of workflows to establish a framework. Taking key performance indicators.',
      img: './assets/img/png/services/ui.jpg',
    },
    {
      title: 'Backend Developer',
      description:
        'Podcasting inside of workflows to establish a framework. Taking key performance indicators.',
      img: './assets/img/png/services/backend.webp',
    },
    {
      title: 'Frontend Developer',
      description:
        'Podcasting inside of workflows to establish a framework. Taking key performance indicators.',
      img: './assets/img/png/services/ad.jpg',
    },
    {
      title: '3D Animation',
      description:
        'Podcasting inside of workflows to establish a framework. Taking key performance indicators.',
      img: './assets/img/png/services/3s.jpg',
    },
  ];
}
