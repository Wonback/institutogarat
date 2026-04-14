import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';
import { NgClass, DOCUMENT } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

function soloLetras(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(value) ? null : { soloLetras: true };
}

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  form: FormGroup;
  cvFile: File | null = null;
  cvError = '';
  submitted = false;
  modalType: 'success' | 'error' | null = null;
  modalMessage = '';
  loading = false;

  rrhhFunciones = [
    'Selección de personal',
    'Motivación, capacitación y desarrollo',
    'Resolución de conflictos interpersonales',
    'Construcción de equipos armónicos',
    'Identificación de fortalezas y áreas de mejora',
    'Reconocimiento y retención de talentos',
  ];

  sectores = [
    'Cirugía',
    'Gastroenterología',
    'Urología',
    'Neonatología',
    'Hemodinamia',
    'Clínica Médica',
    'Nutrición',
    'Terapia Intensiva (U.T.I.)',
    'Traumatología',
    'Obstetricia',
    'Guardia',
    'Administración',
    'Enfermería',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private meta: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: Document) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), soloLetras]],
      apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), soloLetras]],
      sector: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.titleService.setTitle('Trabajá con Nosotros | Instituto Garat');
    const desc = 'Enviá tu CV a Instituto Garat. Sumamos profesionales de la salud comprometidos con la excelencia médica. Concordia, Entre Ríos.';
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:title', content: 'Trabajá con Nosotros | Instituto Garat' });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: 'https://institutogarat.vercel.app/contacto' });
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) { link = this.doc.createElement('link'); this.doc.head.appendChild(link); }
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://institutogarat.vercel.app/contacto');
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.cvError = '';
    this.cvFile = null;
    if (!file) return;
    if (file.type !== 'application/pdf') {
      this.cvError = 'Solo se admiten archivos en formato PDF.';
      input.value = '';
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      this.cvError = 'El archivo no puede superar los 4 MB.';
      input.value = '';
      return;
    }
    this.cvFile = file;
  }

  private openModal(type: 'success' | 'error', message: string) {
    this.modalType = type;
    this.modalMessage = message;
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
  }

  onSubmit() {
    this.submitted = true;
    if (!this.cvFile && !this.cvError) {
      this.cvError = 'El CV es requerido.';
    }
    if (this.form.invalid || !this.cvFile) return;

    const formData = new FormData();
    formData.append('nombre', this.form.value.nombre);
    formData.append('apellido', this.form.value.apellido);
    formData.append('sector', this.form.value.sector);
    formData.append('cv', this.cvFile);

    this.loading = true;
    this.http.post(`${environment.apiBaseUrl}/api/cv`, formData).subscribe({
      next: () => {
        this.loading = false;
        this.form.reset();
        this.cvFile = null;
        this.submitted = false;
        this.cvError = '';
        this.openModal('success', '¡Tu postulación fue enviada con éxito! Nos pondremos en contacto a la brevedad.');
      },
      error: (err) => {
        this.loading = false;
        console.error('Error al enviar postulación:', { status: err.status, message: err.message, body: err.error });
        this.openModal('error', err.error?.error || 'Ocurrió un error al enviar. Intentá más tarde.');
      },
    });
  }
}
