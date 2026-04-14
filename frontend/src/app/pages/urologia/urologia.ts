import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-urologia',
  imports: [],
  templateUrl: './urologia.html',
  styleUrl: './urologia.css',
})
export class Urologia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Urología | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Servicio de Urología en Instituto Garat. Diagnóstico y tratamiento de enfermedades del tracto urinario y sistema reproductor masculino. Gualeguaychú, Entre Ríos.' });
  }
}
