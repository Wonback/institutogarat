import { Component, signal, NgModule, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { LucideAngularModule, FileUser } from 'lucide-angular';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  thumbnail: string;
  thumbnailPosition?: string;
  thumbnailZoom?: number;
  bioImage: string;
  bioImagePosition?: string;
  cv?: string;
}

@NgModule({
  imports: [LucideAngularModule.pick({ FileUser })],
  exports: [LucideAngularModule],
})
export class ClinicaIconsModule {}

@Component({
  selector: 'app-clinica',
  imports: [CommonModule, ClinicaIconsModule],
  templateUrl: './clinica.html',
  styleUrl: './clinica.css',
})
export class Clinica implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dra. María Florencia Prieto',
      role: 'Infectología',
      bio: '"Lideramos con el compromiso de brindar una atención clínica integral, donde la precisión en el diagnóstico y la vanguardia en infectología aseguren el bienestar de nuestra comunidad."',
      thumbnail: 'TODO: foto Dra. Prieto',
      bioImage: 'https://ik.imagekit.io/wonback/Clinica%20e%20Infectologia/florenciaprieto.webp',
      bioImagePosition: 'center',
      cv: `
        <p class="font-semibold text-[#1c8b3b] mb-1">Formación</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Médica especialista en Clínica Médica (UNR)</li>
          <li>Especialista en Infectología (UNNE)</li>
          <li>Diplomada en VIH e ITS con perspectiva de género (FLASO-UNCuyo)</li>
          <li>Magíster en Salud Pública (UNC)</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Ocupación actual</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Jefa del Servicio de Infectología — Instituto Garat</li>
          <li>Infectología y control de infecciones hospitalarias</li>
          <li>Coordinadora del Programa de Optimización de uso de Antimicrobianos (PROA)</li>
        </ul>
      `,
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);
  private rotationInterval: any;
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  ngOnInit() {
    this.title.setTitle('Clínica e Infectología | Instituto Garat');
    const desc =
      'Servicio de Clínica e Infectología en Instituto Garat. Diagnóstico y tratamiento integral de enfermedades del adulto. Control de infecciones y PROA. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Clínica e Infectología | Instituto Garat',
    });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://institutogarat.vercel.app/clinica',
    });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/clinica');
    this.startRotation();
  }

  ngOnDestroy() {
    this.stopRotation();
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      const currentIndex = this.teamMembers.findIndex((m) => m.id === this.selectedMember().id);
      const nextIndex = (currentIndex + 1) % this.teamMembers.length;
      this.selectedMember.set(this.teamMembers[nextIndex]);
    }, 5000);
  }

  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
    this.stopRotation();
    this.startRotation();
  }
}
