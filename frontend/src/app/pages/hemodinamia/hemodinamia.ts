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
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Cargo Actual</h4>
             <ul class="list-none text-gray-700">
               <li><span class="font-semibold">Jefe del Servicio de Hemodinamia y Terapéutica por Cateterismo</span></li>
               <li>Instituto Médico Quirúrgico Garat – Concordia, Entre Ríos</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Especialidades</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Cardiología</li>
              <li>Cardiología Intervencionista y Terapéutica Endovascular</li>
            </ul>
          </div>
        </div>
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
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Cargo Actual</h4>
             <ul class="list-none text-gray-700">
               <li><span class="font-semibold">Jefe de Electrofisiología</span></li>
               <li>Instituto Médico Quirúrgico Garat – Concordia, Entre Ríos</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Especialidades</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Cardiología</li>
              <li>Especialista en Electrofisiología</li>
              <li>Estudios electrofisiológicos y ablaciones</li>
              <li>Implante de dispositivos cardíacos</li>
            </ul>
          </div>
        </div>
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
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Cargo Actual</h4>
             <ul class="list-none text-gray-700">
               <li><span class="font-semibold">Staff del Servicio de Hemodinamia</span></li>
               <li>Instituto Médico Quirúrgico Garat – Concordia, Entre Ríos</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Especialidades</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Cardiología</li>
              <li>Cardiología Intervencionista</li>
            </ul>
          </div>
        </div>
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
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Cargo Actual</h4>
             <ul class="list-none text-gray-700">
               <li><span class="font-semibold">Staff del Servicio de Hemodinamia</span></li>
               <li>Instituto Médico Quirúrgico Garat – Concordia, Entre Ríos</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-green-700 text-lg mb-2">Especialidades</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Cardiología</li>
              <li>Cardiología Intervencionista</li>
            </ul>
          </div>
        </div>
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
