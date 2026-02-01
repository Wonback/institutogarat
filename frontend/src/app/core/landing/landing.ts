import { Component, NgModule, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucideAngularModule, Award, Stethoscope, Hospital, ShieldPlus, Calendar1, FileChartColumn, MessageCircleMore, Speech, MapPin, Phone, Mail, ArrowRight } from 'lucide-angular';
import { animate, inView, stagger } from 'motion';

// Definición del Módulo de Iconos (Correcto)
@NgModule({
  imports: [LucideAngularModule.pick({ Award, Stethoscope, Hospital, ShieldPlus, Calendar1, FileChartColumn, MessageCircleMore, Speech, MapPin, Phone, Mail, ArrowRight })],
  exports: [LucideAngularModule],
})
export class LandingIconsModule {}

@Component({
  selector: 'app-landing',
  imports: [LandingIconsModule], // Importamos el módulo local
    templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
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

    // 3. Specialties Cards (Staggered)
    const specialtiesGrid = this.el.nativeElement.querySelector('.grid.grid-cols-1');
    if (specialtiesGrid) {
        inView(specialtiesGrid, () => {
             // Es más seguro seleccionar los hijos directos o una clase específica
             const cards = specialtiesGrid.querySelectorAll('.p-4');
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
    const contactCard = this.el.nativeElement.querySelector('.lg\\:w-1\\/3.md\\:w-1\\/2.bg-white');
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