import { Component, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, stagger } from 'motion';
import { LucideAngularModule, Mail, Cross, LucideIconProvider, LUCIDE_ICONS } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({ Mail, Cross }),
    },
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // 1. Logo Animation
    const logo = this.el.nativeElement.querySelector('.title-font');
    if (logo) {
      animate(
        logo,
        { opacity: [0, 1], x: [-30, 0] },
        {
          duration: 0.8,
          ease: 'easeOut',
        },
      );
    }

    // 2. Nav Links
    const navLinks = this.el.nativeElement.querySelectorAll('nav a');
    if (navLinks.length > 0) {
      animate(
        navLinks,
        { opacity: [0, 1], y: [-20, 0] },
        {
          delay: stagger(0.05, { startDelay: 0.2 }),
          duration: 0.5,
          ease: 'easeOut',
        },
      );
    }
  }

  animateButton(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    animate(
      target,
      {
        scale: [1, 1.1, 1],
      },
      {
        duration: 0.3,
        ease: 'easeOut',
      },
    );
  }
}
