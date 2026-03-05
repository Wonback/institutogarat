import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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
  form: FormGroup;
  cvFile: File | null = null;
  cvError = '';
  submitted = false;
  success = false;

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

  constructor(private fb: FormBuilder) {
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
    if (file.size > 5 * 1024 * 1024) {
      this.cvError = 'El archivo no puede superar los 5 MB.';
      input.value = '';
      return;
    }
    this.cvFile = file;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.cvFile && !this.cvError) {
      this.cvError = 'El CV es requerido.';
    }
    if (this.form.invalid || !this.cvFile) return;

    // TODO: enviar al backend
    this.success = true;
    this.form.reset();
    this.cvFile = null;
    this.submitted = false;
    this.cvError = '';
  }
}
