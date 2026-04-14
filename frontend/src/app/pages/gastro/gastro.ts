import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gastro',
  imports: [],
  templateUrl: './gastro.html',
  styleUrl: './gastro.css',
})
export class Gastro implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Gastroenterología | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Servicio de Gastroenterología en Instituto Garat. Endoscopía, colonoscopía y tratamiento de enfermedades digestivas. Gualeguaychú, Entre Ríos.' });
  }
}
