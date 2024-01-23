import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact = [
    {
      img: './../../../assets/img/svg/email.svg',
      type: 'Email',
      details: 'zura.baramia98@outlook.com',
    },
    {
      img: './../../../assets/img/svg/phone.svg',
      type: 'Phone',
      details: '(+995) 511 15 35 89',
    },
    {
      img: './../../../assets/img/svg/address.svg',
      type: 'Address',
      details: 'Georgia',
    },
  ];
}
