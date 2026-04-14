import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  private doc = inject(DOCUMENT);

  ngOnInit() {
    this.title.setTitle('Cirugía General | Instituto Garat');
    const desc = 'Servicio de Cirugía General en Instituto Garat. Cirugía laparoscópica, abdominal y de urgencia con tecnología de vanguardia. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Cirugía General | Instituto Garat' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: 'https://institutogarat.vercel.app/cirugia' });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) { link = this.doc.createElement('link'); this.doc.head.appendChild(link); }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/cirugia');
  }
}
