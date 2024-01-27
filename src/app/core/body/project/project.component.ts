import { Component } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [PortfolioComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  id = 'project';
}
