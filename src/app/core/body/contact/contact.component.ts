import { Component, OnInit } from '@angular/core';
import Contact from '../../../modals/contact.modal';
import { contact } from './contact';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  id = 'contact';
  contact: Contact[] = [];

  ngOnInit(): void {
    this.contact = contact;
  }
}
