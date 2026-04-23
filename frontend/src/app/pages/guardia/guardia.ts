import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface TriageLevel {
  nivel: string;
  categoria: string;
  descripcion: string;
  tiempo: string;
  color: string;
}

@Component({
  selector: 'app-guardia',
  imports: [],
  templateUrl: './guardia.html',
  styleUrl: './guardia.css',
})
export class Guardia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  imagingModalities = [
    { sigla: 'Rx', nombre: 'Rayos X' },
    { sigla: 'ECO', nombre: 'Ecografía' },
    { sigla: 'TAC', nombre: 'Tomografía Axial Computada' },
    { sigla: 'RMN', nombre: 'Resonancia Magnética Nuclear' },
  ];

  triageLevels: TriageLevel[] = [
    {
      nivel: 'TRIAGE I',
      categoria: 'Reanimación',
      descripcion:
        'Condición de salud extrema que amenaza la vida del paciente. Requiere una intervención médica inmediata.',
      tiempo: '0 Min',
      color: '#dc2626',
    },
    {
      nivel: 'TRIAGE II',
      categoria: 'Emergencia',
      descripcion:
        'Situación de alto riesgo que representa potencial amenaza de su estado de salud. Debe recibir una atención médica rápida.',
      tiempo: '30 Min',
      color: '#ea580c',
    },
    {
      nivel: 'TRIAGE III',
      categoria: 'Urgencia',
      descripcion:
        'Condición aguda, no amenazante de la vida. Requiere consulta médica no inmediata.',
      tiempo: '2 Hs',
      color: '#ca8a04',
    },
    {
      nivel: 'PRIORIDAD IV',
      categoria: 'No Urgencia',
      descripcion:
        'Condición de salud que pueda ser aguda, pero no compromete el estado general del paciente y no representa un riesgo evidente.',
      tiempo: '4 Hs',
      color: '#16a34a',
    },
    {
      nivel: 'PRIORIDAD V',
      categoria: 'No Urgente',
      descripcion:
        'Condición clínica relacionada con problemas agudos o crónicos sin evidencia de deterioro que comprometa el estado general del paciente. No representa un riesgo evidente para la vida.',
      tiempo: 'Turno',
      color: '#2563eb',
    },
  ];

  ngOnInit() {
    this.title.setTitle('Guardia Médica | Instituto Garat');
    const desc =
      'Guardia médica permanente en Instituto Garat. Atención de urgencias y emergencias las 24 horas, los 365 días del año. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Guardia Médica | Instituto Garat' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://institutogarat.vercel.app/guardia',
    });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/guardia');
  }
}
