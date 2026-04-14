import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cirugia',
  imports: [],
  templateUrl: './cirugia.html',
  styleUrl: './cirugia.css',
})
export class Cirugia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Cirugía General | Instituto Garat');
    this.meta.updateTag({ name: 'description', content: 'Servicio de Cirugía General en Instituto Garat. Cirugía laparoscópica, abdominal y de urgencia con tecnología de vanguardia. Gualeguaychú, Entre Ríos.' });
  }
}
