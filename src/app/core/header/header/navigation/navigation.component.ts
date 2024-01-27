import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayModule,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ListComponent } from '../../../../shared/list/list.component';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Nav } from '../../../../modals/nav.melal';
import { nav } from './nav';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ScrollService } from '../../../../services/scroll.service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    OverlayModule,
    ListComponent,
    PortalModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [ScrollService],
})
export class NavigationComponent implements OnInit {
  constructor(
    private overlay: Overlay,
    private scrollService: ScrollService,
  ) {}

  //viewChild
  @ViewChild(CdkPortal) portal!: CdkPortal;
  @ViewChild('banner') BannerComponent!: ElementRef;

  //overlayRef
  overlayRef: OverlayRef | null = null;

  //navigation list
  nav: Nav[] = [];

  //scroll Service
  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }

  //burger modal
  openModal(): void {
    const config = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });

    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }

  //ngoninit
  ngOnInit() {
    this.nav = nav;
  }
}
