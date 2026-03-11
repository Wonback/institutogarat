import { Component, signal, NgModule } from '@angular/core';
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
export class Neonatologia {
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
      name: 'Médico 1',
      role: 'Neonatólogo/a',
      bio: 'Información del profesional próximamente.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
      cv: 'Información curricular no disponible.',
    },
    {
      id: 2,
      name: 'Médico 2',
      role: 'Neonatólogo/a',
      bio: 'Información del profesional próximamente.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
      cv: 'Información curricular no disponible.',
    },
    {
      id: 3,
      name: 'Médico 3',
      role: 'Neonatólogo/a',
      bio: 'Información del profesional próximamente.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
      cv: 'Información curricular no disponible.',
    },
    {
      id: 4,
      name: 'Médico 4',
      role: 'Neonatólogo/a',
      bio: 'Información del profesional próximamente.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
      cv: 'Información curricular no disponible.',
    },
    {
      id: 5,
      name: 'Médico 5',
      role: 'Neonatólogo/a',
      bio: 'Información del profesional próximamente.',
      thumbnail: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImage: 'https://ik.imagekit.io/wonback/Neonatologia/neonatologia-hero.jpg',
      bioImagePosition: 'center',
      cv: 'Información curricular no disponible.',
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
  }

  selectTreatment(treatment: Treatment) {
    this.selectedTreatment.set(treatment);
  }
}
