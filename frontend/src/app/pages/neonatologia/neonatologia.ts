import { Component, signal, NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Baby, HeartHandshake, FileUser } from 'lucide-angular';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  thumbnail: string;
  bioImage: string;
  bioImagePosition?: string;
  thumbnailPosition?: string;
  thumbnailZoom?: number;
  cv?: string;
}

interface Treatment {
  title: string;
  description: string;
}

@NgModule({
  imports: [LucideAngularModule.pick({ Baby, HeartHandshake, FileUser })],
  exports: [LucideAngularModule],
})
export class NeonatologiaIconsModule {}

@Component({
  selector: 'app-neonatologia',
  imports: [CommonModule, NeonatologiaIconsModule],
  templateUrl: './neonatologia.html',
  styleUrl: './neonatologia.css',
})
export class Neonatologia implements OnInit, OnDestroy {
  treatments: Treatment[] = [
    {
      title: 'ATENCIÓN AL RECIÉN NACIDO PREMATURO',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Cuidados intensivos e intermedios para prematuros de distintas edades gestacionales.</li>
          <li>Monitoreo continuo de funciones vitales y soporte respiratorio.</li>
          <li>Nutrición parenteral y enteral adaptada a las necesidades del recién nacido.</li>
        </ul>
      `,
    },
    {
      title: 'INTERNACIÓN CONJUNTA Y FAMILIA CENTRADA',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Ingreso irrestricto a la unidad las 24 horas para madre y padre.</li>
          <li>Acompañamiento familiar activo durante todo el proceso de internación.</li>
          <li>Apoyo psicológico y contención para los padres.</li>
        </ul>
      `,
    },
    {
      title: 'LACTANCIA MATERNA Y CONTACTO PIEL A PIEL',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Fomento de la lactancia materna exclusiva desde el primer día.</li>
          <li>Método canguro: contacto piel a piel madre/padre con el recién nacido.</li>
          <li>Asesoramiento y apoyo a madres con dificultades en la lactancia.</li>
        </ul>
      `,
    },
    {
      title: 'DIAGNÓSTICO Y SEGUIMIENTO NEONATAL',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Pesquisa neonatal (tamizaje metabólico, auditivo y visual).</li>
          <li>Ecografía cerebral transfontanelar y ecocardiograma neonatal.</li>
          <li>Seguimiento de recién nacidos de riesgo hasta los 2 años de edad corregida.</li>
        </ul>
      `,
    },
    {
      title: 'PATOLOGÍAS NEONATALES FRECUENTES',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Tratamiento de ictericia neonatal (fototerapia).</li>
          <li>Manejo de dificultad respiratoria y síndrome de distrés respiratorio.</li>
          <li>Atención de recién nacidos con hipoglucemia, infecciones y malformaciones congénitas.</li>
          <li>Soporte en casos de asfixia perinatal.</li>
        </ul>
      `,
    },
    {
      title: 'REANIMACIÓN Y EMERGENCIAS NEONATALES',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Reanimación cardiopulmonar neonatal avanzada (RCP-neo).</li>
          <li>Sala de partos equipada para la atención inmediata del recién nacido.</li>
          <li>Coordinación con unidades de mayor complejidad para derivaciones cuando es necesario.</li>
        </ul>
      `,
    },
  ];

  selectedTreatment = signal<Treatment>(this.treatments[0]);

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dra. Giuliana Martínez',
      role: 'Médica Neonatóloga',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Comprometida con la atención integral del recién nacido y el acompañamiento cercano a las familias durante el proceso de internación.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/giuliana.jpeg',
      thumbnailPosition: 'center',
      thumbnailZoom: 1.1,
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/giuliana.jpeg',
      bioImagePosition: 'center 30%',
    },
    {
      id: 2,
      name: 'Dra. Karina Cordobés',
      role: 'Médica Neonatóloga',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Dedicada al cuidado del recién nacido prematuro y de término, con énfasis en la lactancia materna y los cuidados centrados en la familia.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      thumbnailPosition: 'center',
      thumbnailZoom: 1,
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
    },
    {
      id: 3,
      name: 'Dra. Magali Pérez Garnier',
      role: 'Médica Neonatóloga',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Especializada en el seguimiento del recién nacido de riesgo y en el abordaje interdisciplinario para una atención humanizada y basada en evidencia.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/magali%20perez%202',
      thumbnailPosition: 'center 0%',
      thumbnailZoom: 1.7,
      bioImage:
        'https://ik.imagekit.io/wonback/Neonatologia/Magali%20Perez.png?updatedAt=1774612409897',
      bioImagePosition: 'center 10%',
    },
    {
      id: 4,
      name: 'Dr. Roberto Mega',
      role: 'Médico Neonatólogo',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Con experiencia en el manejo de patologías neonatales complejas y en la atención inmediata del recién nacido en sala de partos.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/mega%202',
      thumbnailPosition: 'center 0%',
      thumbnailZoom: 1.5,
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/Mega.png?updatedAt=1774612353700',
      bioImagePosition: 'center 10%',
    },
    {
      id: 5,
      name: 'Dr. Francisco José Olivera Seitz',
      role: 'Médico Neonatólogo',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Comprometido con la reanimación neonatal avanzada y con el concepto de maternidades seguras y centradas en la familia.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/olivera.jpeg',
      thumbnailPosition: 'center',
      thumbnailZoom: 1.2,
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/olivera.jpeg',
      bioImagePosition: 'center 35%',
    },
    {
      id: 6,
      name: 'Dra. Celeste Pérez Trejo',
      role: 'Médica Neonatóloga',
      bio: 'Integrante del Servicio de Neonatología del Instituto Garat. Dedicada al cuidado integral del recién nacido y al acompañamiento humanizado de las familias durante cada etapa de la internación.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      thumbnailPosition: 'center',
      thumbnailZoom: 1,
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
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

  selectTreatment(treatment: Treatment) {
    this.selectedTreatment.set(treatment);
  }
}
