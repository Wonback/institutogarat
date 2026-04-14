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
      cv: `
        <p class="font-semibold text-[#1c8b3b] mb-1">Título Académico</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Licenciada en Nutrición – Universidad de Buenos Aires (1997–2002)</li>
          <li>M.Conuer. N° 31</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Experiencia Laboral</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Instituto Médico Quirúrgico Garat (2017 – Presente) – Nutricionista de Internación: valoración del estado nutricional, seguimiento dietético, soporte enteral, supervisión del servicio de alimentación y formación de alumnos pasantes.</li>
          <li>Consultorio Particular (2008 – Presente) – Tratamientos personalizados: obesidad, diabetes, dislipemias, hipertensión, patologías renales y oncológicas, trastornos de deglución, alimentación enteral, TEA, trastornos alimentarios, desnutrición en adultos y celiaquía.</li>
          <li>Escuela N° 27, Nuestra Sra. de Lourdes (2017–2019) – Educación nutricional en nivel inicial: valoración antropométrica, talleres de nutrición saludable e higiene.</li>
          <li>Clínica de Nutrición y Salud del Dr. Cormillot, CABA (2006–2013) – Nutricionista de Consultorios Externos e Internación: planes alimentarios, supervisión del servicio de alimentación y talleres grupales.</li>
          <li>Hospital de Clínicas José de San Martín, CABA (2003–2007) – División Nutrición: valoración nutricional, conteo de hidratos, abordaje interdisciplinario en trastornos de la conducta alimentaria y docencia universitaria.</li>
          <li>Hospital Dr. F. Muñiz, CABA (2004–2006) – Administración del servicio alimentario: planificación de menús, control de higiene y calidad, supervisión de personal y gestión de insumos.</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Cursos y Capacitaciones Recientes</p>
        <ul class="list-disc list-inside space-y-1 mb-4">
          <li>Soporte Nutricional y Dietoterapia en Cirugías Gastrointestinales – 3° edición (2024)</li>
          <li>Nutrición y Alimentación en Adultos en Cuidados Paliativos – Instituto Nacional del Cáncer (2023)</li>
          <li>Dieta Keto y Ayuno Intermitente (2023)</li>
          <li>III Jornadas de Actualización en Soporte Nutricional (Concordia, 2022)</li>
          <li>Selectividad Alimentaria en Niños con TEA (2022)</li>
          <li>Master Class Enfoque Integrador en TEA – Abordaje Nutricional (2020)</li>
          <li>Alimentación Vegetariana y Vegana (2019)</li>
          <li>Introducción al Soporte Nutricional y Metabólico – Nutrición Enteral y Parenteral – Hospital Italiano (2009)</li>
        </ul>
        <p class="font-semibold text-[#1c8b3b] mb-1">Actividad Académica y Congresos</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Conferencista – Jornada de Atención Integral del Adolescente (C.C. San Martín, 2005)</li>
          <li>Conferencista – 2° Congreso Metropolitano de Odontología: "Plan Alimentario del Paciente Diabético" (2004)</li>
          <li>Póster – 10° Congreso Internacional de Medicina Interna del Hospital de Clínicas (2004)</li>
          <li>Secretaria – VIII y IX Congreso Latinoamericano de Vasculopatías, Factores de Riesgo y Pie Diabético (2003 y 2005)</li>
          <li>XVIII Congreso Argentino de Nutrición, CABA (2011)</li>
        </ul>
      `,
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[0]);
  currentGallerySlide = signal(0);
  private rotationInterval: any;
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  ngOnInit() {
    this.title.setTitle('Nutrición | Instituto Garat');
    const desc = 'Servicio de Nutrición en Instituto Garat. Planes alimentarios personalizados, nutrición clínica y supervisión de menús institucionales. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Nutrición | Instituto Garat' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: 'https://institutogarat.vercel.app/nutricion' });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) { link = this.doc.createElement('link'); this.doc.head.appendChild(link); }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/nutricion');
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

  onGalleryScroll(event: Event) {
    const el = event.target as HTMLElement;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    this.currentGallerySlide.set(index);
  }

  scrollToSlide(container: HTMLElement, index: number) {
    container.scrollTo({ left: container.clientWidth * index, behavior: 'smooth' });
  }
}
