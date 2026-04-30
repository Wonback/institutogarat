import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Wip } from '../../shared/wip/wip';

@Component({
  selector: 'app-urologia',
  imports: [Wip],
  templateUrl: './urologia.html',
  styleUrl: './urologia.css',
})
export class Urologia implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);

  ngOnInit() {
    this.title.setTitle('Urología | Instituto Garat');
    const desc = 'Urología en Instituto Garat. Diagnóstico y tratamiento de enfermedades urinarias y del sistema reproductor masculino. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Urología | Instituto Garat' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: 'https://institutogarat.vercel.app/urologia' });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) { link = this.doc.createElement('link'); this.doc.head.appendChild(link); }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/urologia');
  }
}
