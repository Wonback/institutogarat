import { Component, signal, NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileUser, Eye, Goal, CircleAlert } from 'lucide-angular';

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
  imports: [LucideAngularModule.pick({ FileUser, Eye, Goal, CircleAlert })],
  exports: [LucideAngularModule],
})
export class HemodinamiaIconsModule {}

interface Treatment {
  title: string;
  description: string;
}

@Component({
  selector: 'app-hemodinamia',
  imports: [CommonModule, HemodinamiaIconsModule],
  templateUrl: './hemodinamia.html',
  styleUrl: './hemodinamia.css',
})
export class Hemodinamia implements OnInit, OnDestroy {
  procedures: Treatment[] = [
    {
      title: 'CARDIOLOGÍA INTERVENCIONISTA',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Angioplastia coronaria con stent</li>
          <li>Tratamiento del infarto agudo de miocardio</li>
          <li>Cateterismo diagnóstico coronario</li>
          <li>Implante valvular aórtico transcatéter (TAVI)</li>
        </ul>
      `,
    },
    {
      title: 'TERAPÉUTICA ENDOVASCULAR',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Angioplastia periférica</li>
          <li>Colocación de stents vasculares</li>
          <li>Tratamiento endovascular de aneurismas (EVAR / TEVAR)</li>
          <li>Revascularización de miembros inferiores</li>
        </ul>
      `,
    },
    {
      title: 'ELECTROFISIOLOGÍA',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Estudios electrofisiológicos</li>
          <li>Ablaciones por radiofrecuencia y crioablación</li>
          <li>Implante de marcapasos</li>
          <li>Implante de cardiodesfibriladores (CDI)</li>
        </ul>
      `,
    },
    {
      title: 'NEUROINTERVENCIONISMO',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Tratamiento endovascular de aneurismas cerebrales</li>
          <li>Embolización de malformaciones vasculares</li>
        </ul>
      `,
    }
  ];

  pathologies: Treatment[] = [
    {
      title: 'CARDIOVASCULARES',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Infarto agudo de miocardio</li>
          <li>Angina de pecho</li>
          <li>Enfermedad coronaria</li>
          <li>Estenosis valvular aórtica</li>
          <li>Insuficiencia cardíaca de origen isquémico</li>
        </ul>
      `,
    },
    {
      title: 'ARRITMIAS',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Fibrilación auricular</li>
          <li>Taquicardias supraventriculares</li>
          <li>Taquicardia ventricular</li>
          <li>Bloqueos auriculoventriculares</li>
        </ul>
      `,
    },
    {
      title: 'VASCULARES PERIFÉRICAS Y AÓRTICAS',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Enfermedad arterial periférica e isquemia de miembros inferiores</li>
          <li>Estenosis carotídea</li>
          <li>Aneurisma de aorta abdominal y torácica</li>
          <li>Disección aórtica y hematoma intramural</li>
        </ul>
      `,
    },
    {
      title: 'NEUROLÓGICAS',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Accidente cerebrovascular (ACV) isquémico</li>
          <li>Aneurismas cerebrales</li>
          <li>Malformaciones vasculares</li>
        </ul>
      `,
    }
  ];

  selectedP = signal<Treatment>(this.procedures[0]);
  selectedType = signal<'procedure' | 'pathology'>('procedure');

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Cristian S. García',
      role: 'Jefe del Servicio - Cardiólogo y Cardioangiólogo Intervencionista',
      bio: '"Comprometido con brindar diagnósticos precisos y tratamientos mínimamente invasivos seguros, favoreciendo una recuperación más rápida y mejores resultados clínicos."',
      thumbnail: 'https://ik.imagekit.io/wonback/Hemodinamia/Cristian%20Garcia.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Hemodinamia/Cristian%20Garcia.jpeg',
      bioImagePosition: 'center 20%',
      cv: `
        <ul class="list-disc list-inside space-y-2">
          <li>Especialista en Cardiología (Universidad Nacional de Rosario).</li>
          <li>Especialista en Hemodinamia, Angiografía y Cardioangiología Intervencionista (Universidad de Buenos Aires – Colegio Argentino de Cardioangiólogos Intervencionistas).</li>
          <li>Rotación Departamento de Cardiología Intervencionista Fundación Favaloro (CABA).</li>
          <li>Fellow Hemodinamia Hospital Universitario Austral (Pilar).</li>
          <li>ProEducar-SOLACI Fellows Course for iterventionists-in-Training held in Buenos Aires.</li>
          <li>Ex Médico Asistente Unidad Médica Presidencial.</li>
          <li>SOLACI-CACI partnership with TCT (CABA).</li>
          <li>Evento Aorta Endovascular Rosario.</li>
          <li>Simposio ENDOLIMB Rosario.</li>
          <li>Taller Curso casos de cuello en aorta CHEvar-Esar (CABA).</li>
        </ul>
      `,
    },
    {
      id: 2,
      name: 'Dr. Sebastián Gallino',
      role: 'Jefe de Electrofisiología - Cardiólogo – Especialista en Electrofisiología',
      bio: '"Mi enfoque está centrado en el paciente, priorizando la atención humanizada, la seguridad en cada procedimiento de electrofisiología y la resolución de trastornos del ritmo cardíaco."',
      thumbnail: 'https://ik.imagekit.io/wonback/Hemodinamia/Sebastian%20Gallino.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Hemodinamia/Sebastian%20Gallino.jpeg',
      bioImagePosition: 'center',
      cv: `
        <ul class="list-disc list-inside space-y-2">
          <li>Especialista en Cardiología (Universidad de Buenos Aires)</li>
          <li>Especialista en Electrofisiología y Marcapasos. Certificación de la Sociedad Argentina de Cardiología, la Federación Argentina de Cardiología, Sociedad Argentina de Estimulación Cardiaca.</li>
          <li>Ex-Staff Hospital Cosme Argerich (CABA)</li>
          <li>Fellowship en Electrofisiología en el Hospital Juan Fernández (CABA)</li>
          <li>Rotación por Hospital Sant Pau (Barcelona), Henry Ford Hospital (Detroit USA), Cleveland Clinic (Weston Miami USA).</li>
        </ul>
      `,
    },
    {
      id: 3,
      name: 'Dra. Sofía Krause',
      role: 'Staff - Cardióloga y Cardioangióloga Intervencionista',
      bio: '"Integro un equipo que utiliza tecnología de última generación para brindar atención médica personalizada y humana en cardiología intervencionista."',
      thumbnail: 'https://ik.imagekit.io/wonback/Hemodinamia/Sofia%20Krause.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Hemodinamia/Sofia%20Krause.jpeg',
      bioImagePosition: 'center',
      cv: `
        <ul class="list-disc list-inside space-y-2">
          <li>Especialista en Cardiología (Hospital Universitario Austral)</li>
          <li>Especialista en Hemodinamia, Angiografía y Cardioangiología Intervencionista (Universidad de Buenos Aires – Colegio Argentino de Cardioangiólogos Intervencionistas).</li>
          <li>Miembro de comité de Hemodinamia – Federación Argentina de Cardiología</li>
          <li>Programa CLIMB 2025 – Entrenamiento virtual en Habilidades en Intervenciones Estructurales, Women as One.</li>
          <li>Programa Pathfinder EMBRACE en Isquemia Crítica que Amenaza la Extremidad (ICAE) –Carolina del Norte, Estados Unidos.</li>
          <li>Programa WE EMBRACE en ICAE – Buffalo, Nueva York, Estados Unidos.</li>
          <li>Rotación en Cardiología Intervencionista con Prof. Flavio Ribichini – Azienda Ospedaliera Universitaria Integrata Verona, Italia.</li>
          <li>Miembro de Sociedad Latinoamericana de Cardiología Intervencionista.</li>
        </ul>
      `,
    },
    {
      id: 4,
      name: 'Dr. Luis García Bourquin',
      role: 'Staff - Cardiólogo y Cardioangiólogo Intervencionista',
      bio: '"Trabajamos con un enfoque centrado en el paciente para resolver patologías complejas a través de procedimientos endovasculares eficientes y seguros."',
      thumbnail: 'https://ik.imagekit.io/wonback/Hemodinamia/Luis%20Garcia%20Bourquin.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Hemodinamia/Luis%20Garcia%20Bourquin.jpeg',
      bioImagePosition: 'top',
      cv: `
        <ul class="list-disc list-inside space-y-2">
          <li>Especialista en Cardiología - Sanatorio de la Trinidad Mitre (Universidad de Buenos Aires – Sociedad Argentina de Cardiología).</li>
          <li>Especialista en Hemodinamia, Angiografía y Cardioangiología Intervencionista (Universidad de Buenos Aires – Colegio Argentino de Cardioangiólogos Intervencionistas).</li>
          <li>Implantador certificado de válvulas apáticas percutáneas.</li>
          <li>Rotación en cardiología intervencionista hospital 12 de octubre de Madrid.</li>
        </ul>
      `,
    }
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);
  private rotationInterval: any;
  
  constructor() {
    this.selectedMember.set(this.teamMembers[0]);
  }

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    this.stopRotation();
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      const currentIndex = this.teamMembers.findIndex(m => m.id === this.selectedMember().id);
      const nextIndex = (currentIndex + 1) % this.teamMembers.length;
      this.selectedMember.set(this.teamMembers[nextIndex]);
    }, 5000); // Rota cada 5 segundos
  }

  stopRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
    // Reinicia el temporizador si el usuario hace clic manualmente
    this.stopRotation();
    this.startRotation();
  }

  selectTreatment(treatment: Treatment, type: 'procedure' | 'pathology') {
    this.selectedP.set(treatment);
    this.selectedType.set(type);
  }
}
