import { Component, Output, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { nav } from './../../core/header/header/navigation/nav';
import { Nav } from '../../modals/nav.melal';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Output() closeModel = new EventEmitter<void>();
  constructor() {
    this.burgerManu = nav;
  }
  burgerManu: Nav[] = [];
}
