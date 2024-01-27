import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

import { about, items } from './data';
import Item, { abouts } from '../../../modals/item.modal';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgFor, MatTooltipModule, NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  id = 'aboutme';
  item: Item[] = [];
  about: abouts[] = [];
  ngOnInit(): void {
    this.item = items;
    this.about = about;
  }
}
