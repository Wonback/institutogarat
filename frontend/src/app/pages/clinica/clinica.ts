import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clinica',
  imports: [],
  templateUrl: './clinica.html',
  styleUrl: './clinica.css',
})
export class Clinica implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Clínica Médica | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Servicio de Clínica Médica en Instituto Garat. Diagnóstico y tratamiento integral de enfermedades del adulto. Gualeguaychú, Entre Ríos.' });
  }
}
