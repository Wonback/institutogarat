import { Component, signal, NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileUser } from 'lucide-angular';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  thumbnail: string;
  bioImage: string;
  bioImagePosition?: string;
  cv?: string;
}

@NgModule({
  imports: [LucideAngularModule.pick({ FileUser })],
  exports: [LucideAngularModule],
})
export class NutricionIconsModule {}

@Component({
  selector: 'app-nutricion',
  imports: [CommonModule, NutricionIconsModule],
  templateUrl: './nutricion.html',
  styleUrl: './nutricion.css',
})
export class Nutricion implements OnInit, OnDestroy {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Lic. María Julieta Negri',
      role: 'Licenciada en Nutrición',
      bio: 'Mi esfuerzo, trayectoria y dedicación se reflejan en la formación del equipo que hoy integra este servicio. Deseo seguir incorporando nuevos aprendizajes, comprometida con brindar una atención nutricional de excelencia.',
      thumbnail:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Mar%C3%ADa%20Julieta%20Negri.HEIC?updatedAt=1774092304374',
      bioImage:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Mar%C3%ADa%20Julieta%20Negri.HEIC?updatedAt=1774092304374',
      bioImagePosition: 'center',
      cv: `
        <p class="font-semibold text-[#1c8b3b] mb-1">Título Académico</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Licenciada en Nutrición – Universidad Nacional de Córdoba (1996–2001)</li>
          <li>CONUER N° 62</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Actividad Profesional</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Instituto Médico Quirúrgico Garat (desde 2003) – 60 camas, Sala y UTI</li>
          <li>Evaluación, diagnóstico y planificación nutricional individualizada</li>
          <li>Dietas especiales: trastornos de deglución (IDDSI), renales, diabetes y otras patologías</li>
          <li>Soporte nutricional enteral y parenteral – prescripción, progresión y seguimiento</li>
          <li>Formulación de Bolsas de Alimentación Parenteral Magistrales</li>
          <li>Supervisión de menús, dietas especiales e inocuidad alimentaria</li>
          <li>Presidenta de ADELIN – Asociación de Lic. en Nutrición de Concordia (2018–2020)</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Formación de Posgrado</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Posgrado en Nutrición Clínica – Universidad Favaloro (2003, 120 hs)</li>
          <li>Posgrado en Soporte Nutricional – Universidad del Salvador / AADYD (2010, 200 hs)</li>
          <li>Actualización en Nutrición Clínica – Conceptual Rosario (2016, 110 hs)</li>
          <li>Nutrición Aplicada al Deporte – Conceptual Rosario (2017, 72 hs)</li>
          <li>Soporte Nutricional y Dietoterapia en Cirugías Gastrointestinales – SNC (2024)</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Congresos Recientes</p>
        <ul class="list-disc list-inside space-y-1">
          <li>1° Congreso Patagónico de Nutrición Clínica – Neuquén (2024)</li>
          <li>XXII Congreso Argentino de Soporte Nutricional Enteral y Parenteral – AANEP, Buenos Aires (2025)</li>
        </ul>
      `,
    },
    {
      id: 2,
      name: 'Lic. Natalia Cicerone',
      role: 'Licenciada en Nutrición',
      bio: 'Integrante del Servicio de Nutrición y Alimentación del Sanatorio Garat. Con sólida formación académica y experiencia en soporte nutricional clínico, trabaja para garantizar una atención nutricional segura, personalizada y basada en evidencia científica.',
      thumbnail:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Natalia%20Cicerone?updatedAt=1774093346777',
      bioImage:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Natalia%20Cicerone?updatedAt=1774093346777',
      bioImagePosition: 'center',
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);
  private rotationInterval: any;

  ngOnInit() {
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
