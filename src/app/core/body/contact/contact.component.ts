import { Component, OnInit } from '@angular/core';
import Contact from '../../../modals/contact.modal';
import { contact } from './contact';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contact: Contact[] = [];

  ngOnInit(): void {
    this.contact = contact;
  }
}
