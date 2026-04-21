import { Component, inject, OnInit, ViewChild, ElementRef, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-institucional',
  imports: [RouterLink],
  templateUrl: './institucional.html',
  styleUrl: './institucional.css',
})
export class Institucional implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  @ViewChild('lightboxModal') lightboxModal!: ElementRef<HTMLDialogElement>;
  selectedImage = signal('');

  // Reemplazar con las URLs reales de ImageKit
  readonly galleryImages = [
    'https://ik.imagekit.io/wonback/Institucional/1.webp',
    'https://ik.imagekit.io/wonback/Institucional/2.webp',
    'https://ik.imagekit.io/wonback/Institucional/3.webp',
    'https://ik.imagekit.io/wonback/Institucional/4.webp',
    'https://ik.imagekit.io/wonback/Institucional/5.webp',
    'https://ik.imagekit.io/wonback/Institucional/6.webp',
    'https://ik.imagekit.io/wonback/Institucional/7.webp',
    'https://ik.imagekit.io/wonback/Institucional/8.webp',
  ];

  scrollToSlide(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
  }

  openLightbox(index: number) {
    this.selectedImage.set(this.galleryImages[index]);
    this.lightboxModal.nativeElement.showModal();
  }

  ngOnInit() {
    this.title.setTitle('Quiénes Somos | Instituto Garat');
    this.meta.updateTag({
      name: 'description',
      content:
        'El Instituto Médico Quirúrgico Garat fue fundado en 1943 por el Dr. Néstor Garat. Más de 80 años de excelencia médica en Concordia, Entre Ríos.',
    });
  }
}
