import { Component, OnInit } from "@angular/core";
import Contact from "../../../modals/contact.modal";
import { contact } from "./contact";
import { about } from "../about-me/data";
import { NgOptimizedImage } from "@angular/common";
import { abouts } from "../../../modals/item.modal";
@Component({
  selector: "app-contact",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent implements OnInit {
  id = "contact";
  contact: Contact[] = [];
  about: abouts[] = [];

  ngOnInit(): void {
    this.contact = contact;
    this.about = about;
  }
}
