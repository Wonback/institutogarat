import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terapia',
  imports: [],
  templateUrl: './terapia.html',
  styleUrl: './terapia.css',
})
export class Terapia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Terapia Intensiva (UTI) | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Unidad de Terapia Intensiva (UTI) en Instituto Garat. Cuidados críticos con monitoreo continuo las 24 horas. Gualeguaychú, Entre Ríos.' });
  }
}
