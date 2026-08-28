import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  submitted = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    subject: ['General Enquiry', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // NOTE: This is a static front-end demo. Wire this up to your backend / email
    // service (e.g. Formspree, EmailJS, or your own API) to actually send messages.
    this.submitted.set(true);
    this.form.reset({ subject: 'General Enquiry' });
  }
}
