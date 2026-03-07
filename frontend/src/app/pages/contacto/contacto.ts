import { Component, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

function soloLetras(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(value) ? null : { soloLetras: true };
}

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  form: FormGroup;
  cvFile: File | null = null;
  cvError = '';
  submitted = false;
  modalType: 'success' | 'error' | null = null;
  modalMessage = '';
  loading = false;

  sectores = [
    'Cirugía',
    'Gastroenterología',
    'Urología',
    'Neonatología',
    'Hemodinámia',
    'Clínica Médica',
    'Nutrición',
    'Terapia Intensiva (U.T.I)',
    'Traumatología',
    'Guardia',
    'Administración',
    'Enfermería',
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), soloLetras]],
      apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), soloLetras]],
      sector: ['', Validators.required],
    });
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
