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
export class TraumatologiaIconsModule {}

interface Treatment {
  title: string;
  description: string;
}

@Component({
  selector: 'app-traumatologia',
  imports: [CommonModule, TraumatologiaIconsModule],
  templateUrl: './traumatologia.html',
  styleUrl: './traumatologia.css',
})
export class Traumatologia {
  treatments: Treatment[] = [
    {
      title: 'CIRUGÍAS ARTROSCÓPICAS',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Artroscopias simples y complejas de rodilla, hombro, codo y tobillo.</li>
          <li>Tratamiento de lesiones del manguito rotador.</li>
          <li>Resolución de inestabilidad de hombro.</li>
        </ul>
      `,
    },
    {
      title: 'FRACTURAS Y LESIONES MIOTENDINOSAS',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Tratamiento quirúrgico de fracturas de miembros superiores e inferiores.</li>
          <li>Reparación de lesiones tendinosas en mano.</li>
          <li>Reparación de rupturas del tendón de Aquiles y del aparato extensor de la rodilla.</li>
          <li>Tratamiento integral de patologías del pie.</li>
          <li>Cirugía abierta y percutánea del juanete (Hallux valgus).</li>
        </ul>
      `,
    },
    {
      title: 'TRATAMIENTOS NO QUIRÚRGICOS Y MEDICINA REGENERATIVA',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Infiltraciones articulares con ácido hialurónico.</li>
          <li>Tratamiento de lesiones deportivas con plasma rico en plaquetas (PRP).</li>
        </ul>
      `,
    },
    {
      title: 'ONCOLOGÍA ORTOPÉDICA',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Tratamiento de lesiones tumorales óseas y en partes blandas de miembros superiores e inferiores.</li>
        </ul>
      `,
    },
    {
      title: 'REEMPLAZOS ARTICULARES',
      description: `
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Artroplastias totales de rodilla, cadera, hombro y rodilla.</li>
          <li>Artroplastias parciales de cadera, rodilla y hombro.</li>
        </ul>
      `,
    },
  ];

  selectedTreatment = signal<Treatment>(this.treatments[0]);

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Esteban Rovira',
      role: 'Médico Traumatólogo',
      bio: '"Soy el doctor Esteban Rovira y llevo muchos años ejerciendo como traumatólogo en el Sanatorio Garat. Este servicio nació gracias a la visión de mi padre, el doctor Ricardo Rovira, quien lo creó hace años junto a un equipo de colegas jóvenes y la tecnología necesaria. Estamos totalmente preparados para ofrecerle a nuestros pacientes una atención de excelencia."',
      thumbnail: 'https://ik.imagekit.io/wonback/Traumatologia/rovira.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Traumatologia/Rovira%20thumnail%20upscayl.png',
      bioImagePosition: 'center 20%',
      cv: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Datos Personales y Profesionales</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Matrícula Nacional: 66.839</li>
              <li>Matrícula Provincial: 6.731</li>
              <li>Especialista en Ortopedia y Traumatología</li>
              <li>Certificado por la Asociación Argentina de Ortopedia y Traumatología (AAOT)</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación y Residencia</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Ex Residente – Hospital Español de Buenos Aires</li>
              <li>Jefe de Residentes – Hospital Español de Buenos Aires</li>
              <li>Becario – Hospital de Pediatría “Prof. Dr. Juan P. Garrahan”</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Cargo Actual</h4>
             <ul class="list-none text-gray-700">
               <li><span class="font-semibold">Jefe del Servicio de Ortopedia y Traumatología</span></li>
               <li>Sanatorio Garat – Concordia, Entre Ríos</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Subespecialidades</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Cirugía Artroscópica de Rodilla, Hombro y Tobillo</li>
              <li>Tratamiento de Lesiones Deportivas</li>
              <li>Resolución con cirugía mini-invasiva de lesiones deportivas con rápido retorno a la práctica</li>
            </ul>
          </div>
          
          <p class="text-xs text-gray-400 italic pt-4 border-t mt-4">Currículum actualizado a noviembre de 2025.</p>
        </div>
      `,
    },
    {
      id: 2,
      name: 'Dr. Joaquín Carutti',
      role: 'Especialista en Ortopedia, Traumatología, y Cirugía Artroscópica',
      bio: '"Soy Joaquín Carutti, integrante del equipo de ortopedia y traumatología del Instituto Médico Quirúrgico Garat. Me enorgullece formar parte de este grupo de profesionales que siempre está listo para asistir a los pacientes, ya sea en situaciones de emergencia o en problemas de salud cotidianos."',
      thumbnail: 'https://ik.imagekit.io/wonback/Traumatologia/carutti-300x300.png',
      bioImage: 'https://ik.imagekit.io/wonback/Traumatologia/Cerruti%20thumbnail%20Upscayl.png',
      bioImagePosition: 'center 20%',
      cv: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Títulos de Especialista</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Especialista en Ortopedia y Traumatología – UBA</li>
              <li>Especialista en Cirugía Artroscópica – AAA</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación y Acreditaciones</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Especialista en Ortopedia y Traumatología – Universidad de Buenos Aires (UBA)</li>
              <li>Especialista en Ortopedia y Traumatología – Asociación Argentina de Ortopedia y Traumatología (AAOT)</li>
              <li>Especialista en Cirugía Artroscópica – Asociación Argentina de Artroscopia (AAA)</li>
              <li>Miembro certificado – Asociación Argentina de Ortopedia y Traumatología (AAOT)</li>
              <li>Miembro certificado – Asociación Argentina de Artroscopia (AAA)</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación Internacional y Perfeccionamiento</h4>
             <ul class="list-disc list-inside text-gray-700 space-y-1">
               <li>Beca en Ortopedia y Traumatología otorgada por concurso – Fundación MAPFRE</li>
               <li>Servicio de Cadera y Rodilla – Hospital Dexeus, Barcelona, España</li>
               <li>Instituto Catalán de Medicina del Deporte – Barcelona, España</li>
               <li>Fellowship (2 años) junto al equipo médico del IAR</li>
               <li>Práctica quirúrgica y seguimiento clínico en: Instituto Quirúrgico Callao (IQC) y Sanatorio Anchorena</li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Residencias y Posgrados</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Posgrado en Traumatología del Deporte – AATD</li>
              <li>Ex Residente – Hospital de Agudos Dr. Cosme Argerich (CABA)</li>
            </ul>
          </div>
        </div>
      `,
    },
    {
      id: 3,
      name: 'Dr. Jesús Larocca',
      role: 'Especialista en Ortopedia y Traumatología',
      bio: '"Soy el Dr. Jesús Larocca, especialista en Traumatología del Sanatorio Garat. Ofrecemos una atención integral de primer nivel que abarca los aspectos biológicos, psicológicos y sociales, acompañando al paciente para asegurar su pronta recuperación y retorno a la vida cotidiana."',
      thumbnail: 'https://ik.imagekit.io/wonback/Traumatologia/larocca-300x300.png',
      bioImage: 'https://ik.imagekit.io/wonback/Traumatologia/Larocca%20thumnail_upscayl_2x_high-fidelity-4x.png',
      bioImagePosition: 'top',
      cv: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación Universitaria</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Médico – Facultad de Ciencias Médicas, Universidad Nacional de Rosario</li>
              <li>Promedio académico e histórico: 8,53</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación de Posgrado</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Especialista en Ortopedia y Traumatología – Universidad Nacional de Rosario (2010–2013)</li>
              <li>Hospital Escuela Eva Perón – Granadero Baigorria, Santa Fe</li>
              <li>Posgrado Bianual en Cadera y Rodilla (2014–2016) – Asociación Argentina de Cadera y Rodilla (ACARO)</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Experiencia Laboral</h4>
             <ul class="list-none text-gray-700 space-y-3">
               <li>
                 <span class="font-semibold block text-[#15aa45]">2014 – Actualidad</span>
                 <ul class="list-disc list-inside ml-4 mt-1">
                    <li><span class="font-medium">Instituto Médico Quirúrgico Garat – Concordia:</span> Cirugías, procedimientos, consultorio externo y guardias traumatológicas</li>
                    <li><span class="font-medium">Hospital San José – Federación, Entre Ríos:</span> Consultorios externos, internación y urgencias</li>
                    <li><span class="font-medium">Centro Médico Salta – Concordia:</span> Atención en consultorio externo</li>
                 </ul>
               </li>
               <li>
                 <span class="font-semibold block text-[#15aa45]">2013 – 2014</span>
                 <ul class="list-disc list-inside ml-4 mt-1">
                    <li><span class="font-medium">Jefe de Residentes – Especialización en Ortopedia y Traumatología, Hospital Escuela Eva Perón:</span> Actividad asistencial, quirúrgica, docente y organizativa</li>
                 </ul>
               </li>
             </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Actividades Académicas y Congresos</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Participación continua en Congresos Argentinos de Ortopedia y Traumatología (47° a 52°)</li>
              <li>Cursos y jornadas oficiales de patología y cirugía de cadera y rodilla</li>
              <li>Cursos AO y actividades formativas de la Asociación Rosarina de Ortopedia y Traumatología</li>
              <li>Presentación de múltiples trabajos científicos en congresos nacionales (SADI, ACARO y AAOT)</li>
              <li><strong>Premio Poster Accesit – ACARO:</strong> “Luxación controlada de cadera como alternativa a la artroscopía…”</li>
            </ul>
          </div>
        </div>
      `,
    },
    {
      id: 4,
      name: 'Dr. Cristian Iúdica',
      role: 'Especialista en Ortopedia y Traumatología',
      bio: '"Soy el Dr. Cristian Iúdica, especialista en Traumatología con más de 20 años de trayectoria. Actualmente formo parte del equipo médico del Sanatorio Garat, comprometido con la atención de la comunidad."',
      thumbnail: 'https://ik.imagekit.io/wonback/Traumatologia/iudica.jpeg',
      bioImage: 'https://ik.imagekit.io/wonback/Traumatologia/Iudica%20thumnail_upscayl_2x_high-fidelity-4x.png',
      bioImagePosition: 'center',
      cv: `
        <div class="space-y-4">
          <div class="text-sm text-[#15aa45] font-semibold uppercase tracking-wide mb-2">
            Médico Traumatólogo – Concordia, Entre Ríos
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Datos Profesionales</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Matrícula Nacional: 101.577</li>
              <li>Matrícula Provincial: 9.199</li>
              <li>Especialista en Ortopedia y Traumatología</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Formación</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Residencia completa – Hospital Militar Central, Buenos Aires</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-[#1c8b3b] text-lg mb-2">Cargos Actuales</h4>
             <ul class="list-disc list-inside text-gray-700 space-y-1">
               <li>Profesional Asistente Interino – Servicio de Ortopedia y Traumatología, Hospital D.C. Masvernat – Concordia</li>
               <li>Miembro del Servicio de Ortopedia y Traumatología – Sanatorio Garat, desde el 2024</li>
             </ul>
          </div>
        </div>
      `,
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[2]); // Default to Justin (index 0 in preview, but 2 here just for variety, let's actually default to the first one defined in the list which is Justin in the mockup, but here I mapped Justin to index 0 logic essentially. Wait, in my array Justin is index 0. So I will init with index 0).
  
  constructor() {
    this.selectedMember.set(this.teamMembers[0]);
  }

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
  }

  selectTreatment(treatment: Treatment) {
    this.selectedTreatment.set(treatment);
  }
}
