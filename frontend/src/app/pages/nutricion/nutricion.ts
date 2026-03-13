import { Component, signal, NgModule } from '@angular/core';
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
export class Nutricion {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Lic. María Julieta Negri',
      role: 'Licenciada en Nutrición',
      bio: 'Integrante del Servicio de Nutrición y Alimentación del Sanatorio Garat. Con sólida formación académica y experiencia en soporte nutricional clínico, trabaja para garantizar una atención nutricional segura, personalizada y basada en evidencia científica.',
      thumbnail: 'https://ik.imagekit.io/wonback/Nutricion/negri-thumb.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Nutricion/negri.jpg',
      bioImagePosition: 'center',
    },
    {
      id: 2,
      name: 'Lic. Natalia Cicerone',
      role: 'Licenciada en Nutrición',
      bio: 'Integrante del Servicio de Nutrición y Alimentación del Sanatorio Garat. Con sólida formación académica y experiencia en soporte nutricional clínico, trabaja para garantizar una atención nutricional segura, personalizada y basada en evidencia científica.',
      thumbnail: 'https://ik.imagekit.io/wonback/Nutricion/cicerone-thumb.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Nutricion/cicerone.jpg',
      bioImagePosition: 'center',
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
  }
}
