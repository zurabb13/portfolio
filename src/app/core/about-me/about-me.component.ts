import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  name: string;
  url: string;
  imageUrl: string;
}
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  items: Item[] = [
    { name: 'Angular', url: '', imageUrl: './assets/img/svg/logo/angular.svg' },
    {
      name: 'Typescript',
      url: '',
      imageUrl: './assets/img/svg/logo/typescript.svg',
    },
    {
      name: 'Javascript',
      url: '',
      imageUrl: './assets/img/svg/logo/javascript.svg',
    },
    { name: 'React', url: '', imageUrl: './assets/img/svg/logo/react.svg' },
    { name: 'NodeJS', url: '', imageUrl: './assets/img/svg/logo/nodejs.svg' },
    { name: 'NestJS', url: '', imageUrl: './assets/img/svg/logo/nestjs.svg' },
    { name: 'MongoDB', url: '', imageUrl: './assets/img/svg/logo/mongodb.svg' },
    {
      name: 'Postgres',
      url: '',
      imageUrl: './assets/img/svg/logo/postgresql.svg',
    },
    { name: 'Docker', url: '', imageUrl: './assets/img/svg/logo/docker.svg' },
    { name: 'Html', url: '', imageUrl: './assets/img/svg/logo/html.svg' },
    { name: 'Css', url: '', imageUrl: './assets/img/svg/logo/css.svg' },
    { name: 'Scss', url: '', imageUrl: './assets/img/svg/logo/scss.svg' },

    {
      name: 'Material',
      url: '',
      imageUrl: './assets/img/svg/logo/angular-material.svg',
    },
    {
      name: 'Tailwind',
      url: '',
      imageUrl: './assets/img/svg/logo/tailwind.svg',
    },
    { name: 'Primeng', url: '', imageUrl: './assets/img/svg/logo/primeng.svg' },
    { name: 'WebPack', url: '', imageUrl: './assets/img/svg/logo/webpack.svg' },
    { name: 'Figma', url: '', imageUrl: './assets/img/svg/logo/figma.svg' },
    { name: 'XD', url: '', imageUrl: './assets/img/svg/logo/xd.svg' },
    { name: 'Git', url: '', imageUrl: './assets/img/svg/logo/git.svg' },
    { name: 'GitHub', url: '', imageUrl: './assets/img/svg/logo/github.svg' },
    { name: 'Npm', url: '', imageUrl: './assets/img/svg/logo/npm.svg' },
    { name: 'Yarn', url: '', imageUrl: './assets/img/svg/logo/yarn.svg' },
    { name: 'NX', url: '', imageUrl: './assets/img/svg/logo/nx.svg' },

    {
      name: 'WebStorm',
      url: '',
      imageUrl: './assets/img/svg/logo/webstorm.svg',
    },
    { name: 'Trello', url: '', imageUrl: './assets/img/svg/logo/trello.svg' },
    { name: 'Jira', url: '', imageUrl: './assets/img/svg/logo/jira.svg' },
    { name: 'Eslint', url: '', imageUrl: './assets/img/svg/logo/eslint.svg' },
    { name: 'Chart', url: '', imageUrl: './assets/img/svg/logo/chart.svg' },
  ];
  about = [
    {
      name: 'Frontend Developer',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
    {
      name: 'UI/UX Design',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
    {
      name: 'E-Commerce',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
    {
      name: 'Responsive Design',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
    {
      name: 'Version Control',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
    {
      name: 'Version Control',
      img: './assets/img/svg/portal-1.svg',
      img2: './assets/img/svg/portal-2.svg',
    },
  ];
}
