import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-traumatologia',
  imports: [CommonModule],
  templateUrl: './traumatologia.html',
  styleUrl: './traumatologia.css',
})
export class Traumatologia {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Esteban Rovira',
      role: 'Médico Traumatólogo',
      bio: 'Especialista en cirugía artroscópica de rodilla y hombro. Con más de 10 años de experiencia, su enfoque combina técnicas mínimamente invasivas con una recuperación acelerada.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2687&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Dr. Joaquín Carutti',
      role: 'Especialista en Ortopedia, Traumatología, y Cirugía Artroscópica',
      bio: 'Lidera nuestro equipo con una visión integral de la salud osteoarticular. Su compromiso es garantizar que cada paciente reciba un trato humano y de excelencia académica.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Dr. Jesús Larocca',
      role: 'Especialista en Ortopedia y Traumatología',
      bio: 'Experto en patologías vertebrales complejas. Dedicado al diagnóstico preciso y tratamiento de dolencias de espalda, priorizando siempre las opciones conservadoras antes que las quirúrgicas.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Dr. Cristian Iúdica',
      role: 'Especialista en Ortopedia y Traumatología',
      bio: 'A cargo del área de rehabilitación funcional. Trabaja codo a codo con los médicos para diseñar planes de recuperación personalizados para deportistas y pacientes activos.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop',
    },
  ];

  selectedMember = signal<TeamMember>(this.teamMembers[2]); // Default to Justin (index 0 in preview, but 2 here just for variety, let's actually default to the first one defined in the list which is Justin in the mockup, but here I mapped Justin to index 0 logic essentially. Wait, in my array Justin is index 0. So I will init with index 0).
  
  constructor() {
    this.selectedMember.set(this.teamMembers[0]);
  }

  selectMember(member: TeamMember) {
    this.selectedMember.set(member);
  }
}
