import { Component, inject, OnInit, ViewChild, ElementRef, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Carousel3d } from '../../shared/carousel3d/carousel3d';

@Component({
  selector: 'app-institucional',
  imports: [Carousel3d],
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
    'https://ik.imagekit.io/wonback/institucional/foto-1.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-2.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-3.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-4.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-5.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-6.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-7.jpg',
    'https://ik.imagekit.io/wonback/institucional/foto-8.jpg',
  ];

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
