import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Desc } from '../../../modals/desk.modal';
import { desc } from './desk';
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
