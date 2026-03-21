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
      bio: 'Integrante del Servicio de Nutrición y Alimentación del Sanatorio Garat. Con sólida formación académica y experiencia en soporte nutricional clínico, trabaja para garantizar una atención nutricional segura, personalizada y basada en evidencia científica.',
      thumbnail:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Mar%C3%ADa%20Julieta%20Negri.HEIC?updatedAt=1774092304374',
      bioImage:
        'https://ik.imagekit.io/wonback/Nutricion/Lic.%20Mar%C3%ADa%20Julieta%20Negri.HEIC?updatedAt=1774092304374',
      bioImagePosition: 'center',
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
