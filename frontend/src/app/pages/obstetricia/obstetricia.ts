import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-obstetricia',
  imports: [],
  templateUrl: './obstetricia.html',
  styleUrl: './obstetricia.css',
})
export class Obstetricia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Obstetricia | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Servicio de Obstetricia en Instituto Garat. Atención del embarazo, parto y posparto con el mayor cuidado para madre e hijo. Gualeguaychú, Entre Ríos.' });
  }
}
