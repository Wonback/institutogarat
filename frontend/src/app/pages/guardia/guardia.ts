import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guardia',
  imports: [],
  templateUrl: './guardia.html',
  styleUrl: './guardia.css',
})
export class Guardia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Guardia Médica | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Guardia médica permanente en Instituto Garat. Atención de urgencias y emergencias las 24 horas, los 365 días del año. Gualeguaychú, Entre Ríos.' });
  }
}
