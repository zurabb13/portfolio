import { Component, OnInit } from '@angular/core';
import Contact from '../../../modals/contact.modal';
import { contact } from './contact';
import { about } from '../about-me/data';
import { abouts } from '../../../modals/item.modal';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contact: Contact[] = [];
  about: any = [];

  ngOnInit(): void {
    this.contact = contact;
    this.about = about;
    console.log(this.about);
  }
}
