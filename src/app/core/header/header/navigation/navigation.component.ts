import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayModule,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ListComponent } from '../../../../shared/list/list.component';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Nav } from '../../../../modals/nav.melal';
import { nav } from './nav';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, OverlayModule, ListComponent, PortalModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [],
})
export class NavigationComponent implements OnInit {
  constructor(private overlay: Overlay) {}

  overlayRef: OverlayRef | null = null;
  @ViewChild(CdkPortal) portal!: CdkPortal;
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

  nav: Nav[] = [];
  ngOnInit() {
    this.nav = nav;
  }
}
