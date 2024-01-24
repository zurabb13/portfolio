import { Component } from '@angular/core';

import { desc } from './desk';
import { Desc } from '../../../../modals/desk.modal';
@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.scss',
})
export class DescComponent {
  isHovered = false;
  desc: Desc[] = [];
  constructor() {
    this.desc = desc;
  }
}
