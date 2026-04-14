import { Component, NgModule, ElementRef, AfterViewInit, OnInit, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router'; // Import RouterLink
import { Meta, Title } from '@angular/platform-browser';
import { LucideAngularModule, Award, Stethoscope, Hospital, ShieldPlus, Calendar1, FileChartColumn, MessageCircleMore, Speech, MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-angular';
import { animate, inView, stagger, hover } from 'motion';

// Definición del Módulo de Iconos (Correcto)
@NgModule({
  imports: [LucideAngularModule.pick({ Award, Stethoscope, Hospital, ShieldPlus, Calendar1, FileChartColumn, MessageCircleMore, Speech, MapPin, Phone, Mail, ArrowRight, Check })],
  exports: [LucideAngularModule],
})
export class LandingIconsModule {}

@Component({
  selector: 'app-landing',
  imports: [LandingIconsModule, RouterLink], // Add RouterLink to imports
    templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements OnInit, AfterViewInit {
  emailCopied = signal(false);

  @ViewChild('mailIconRef') mailIconRef!: ElementRef;
  @ViewChild('checkIconRef') checkIconRef!: ElementRef;
  @ViewChild('emailTextRef') emailTextRef!: ElementRef;
  @ViewChild('copiedTextRef') copiedTextRef!: ElementRef;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc: Document,
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Instituto Médico Quirúrgico Garat | Concordia, Entre Ríos');
    const desc = 'Instituto Médico Quirúrgico Garat — Centro especializado en Hemodinamia, Neonatología, Nutrición, Traumatología y más. Atención de excelencia en Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Instituto Médico Quirúrgico Garat | Concordia, Entre Ríos' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: 'https://institutogarat.vercel.app/' });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) { link = this.doc.createElement('link'); this.doc.head.appendChild(link); }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/');
  }

  copyEmail() {
    if (this.emailCopied()) return;
    navigator.clipboard.writeText('contacto@institutogarat.com.ar').then(() => {
      animate(this.mailIconRef.nativeElement, { opacity: 0, scale: 0.4, y: -4 }, { duration: 0.15 });
      animate(this.checkIconRef.nativeElement, { opacity: [0, 1], scale: [0.4, 1.2, 1], y: [4, 0] }, { duration: 0.3, delay: 0.1 });
      animate(this.emailTextRef.nativeElement, { opacity: 0, y: -8 }, { duration: 0.15 });
      animate(this.copiedTextRef.nativeElement, { opacity: [0, 1], y: [8, 0] }, { duration: 0.25, delay: 0.1 });
      this.emailCopied.set(true);

      setTimeout(() => {
        animate(this.checkIconRef.nativeElement, { opacity: 0, scale: 0.4, y: -4 }, { duration: 0.15 });
        animate(this.mailIconRef.nativeElement, { opacity: [0, 1], scale: [0.4, 1.2, 1], y: [4, 0] }, { duration: 0.3, delay: 0.1 });
        animate(this.copiedTextRef.nativeElement, { opacity: 0, y: -8 }, { duration: 0.15 });
        animate(this.emailTextRef.nativeElement, { opacity: [0, 1], y: [8, 0] }, { duration: 0.25, delay: 0.1 });
        this.emailCopied.set(false);
      }, 2500);
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // 1. Hero Content Entrance
    const heroContent = this.el.nativeElement.querySelector('.hero-content');
    if (heroContent) {
      animate(
        heroContent, 
        { opacity: [0, 1], y: [50, 0] }, 
        { duration: 1, ease: 'easeOut' } // <--- CORREGIDO: easeOut
      );
    }

    // 2. Section Titles
    const titles = this.el.nativeElement.querySelectorAll('.title-font.mb-2');
    titles.forEach((title: Element) => {
        inView(title, () => {
             animate(
               title, 
               { opacity: [0, 1], x: [-20, 0] }, 
               { duration: 0.6, ease: 'easeOut' }
             );
             return () => animate(title, { opacity: 0, x: -20 }, { duration: 0 });
        });
    });

    // 3. Specialties Cards (Staggered & Hover)
    const specialtiesDesktopGrid = this.el.nativeElement.querySelector('.hidden.lg\\:grid');
    if (specialtiesDesktopGrid) {
        const cards = specialtiesDesktopGrid.querySelectorAll('.bg-base-200');
        
        // Entrance animation
        inView(specialtiesDesktopGrid, () => {
             if (cards.length > 0) {
               animate(
                  cards,
                  { opacity: [0, 1], y: [30, 0] },
                  { delay: stagger(0.1), duration: 0.6, ease: 'easeOut' }
               );
             }
             return () => {
               if (cards.length > 0) animate(cards, { opacity: 0, y: 30 }, { duration: 0 });
             };
        });

        // Hover animation
        cards.forEach((card: Element) => {
            hover(card, (el) => {
                animate(el, { scale: 1.03, y: -5 }, { duration: 0.3, ease: 'easeOut' });
                return () => animate(el, { scale: 1, y: 0 }, { duration: 0.3, ease: 'easeOut' });
            });
        });
    }

    // 4. Stats Numbers
    // Buscamos el elemento y subimos al padre de forma segura
    const statsIcon = this.el.nativeElement.querySelector('.stats-bottom-fade');
    const statsSection = statsIcon?.parentElement; // Optional chaining por seguridad

    if (statsSection) {
        inView(statsSection, () => {
            const statsCards = statsSection.querySelectorAll('.p-4');
            animate(
                statsCards,
                { opacity: [0, 1], scale: [0.8, 1] },
                { delay: stagger(0.15), duration: 0.5, ease: 'easeOut' }
            );
            return () => animate(statsCards, { opacity: 0, scale: 0.8 }, { duration: 0 });
        });
    }

    // 5. Steps (Left Column)
    // Nota: El selector escapado (\\:) es correcto para clases de Tailwind como "lg:w-2/5"
    const stepsContainer = this.el.nativeElement.querySelector('.lg\\:w-2\\/5.md\\:w-1\\/2'); 
    if (stepsContainer) {
        inView(stepsContainer, () => {
             const steps = stepsContainer.querySelectorAll('.flex.relative');
             animate(
                 steps, 
                 { opacity: [0, 1], x: [-30, 0] },
                 { delay: stagger(0.2), duration: 0.6, ease: 'easeOut' }
             );
             return () => animate(steps, { opacity: 0, x: -30 }, { duration: 0 });
        });
    }
    
    // 6. Contact Card
    const contactCard = this.el.nativeElement.querySelector('.lg\\:w-1\\/3.md\\:w-1\\/2.bg-base-100');
    if (contactCard) {
        inView(contactCard, () => {
            animate(
              contactCard, 
              { opacity: [0, 1], y: [20, 0] }, 
              { duration: 0.7, ease: 'easeOut' }
            );
            return () => animate(contactCard, { opacity: 0, y: 20 }, { duration: 0 });
        });
    }
  }
}