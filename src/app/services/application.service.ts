import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      personal: this.fb.group({
        fullName: ['', Validators.required],
        cellphone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required]
      }),

      salary: this.fb.group({
        grossIncome: [0, Validators.required],
        netIncome: [0, Validators.required],
        expenses: [0, Validators.required]
      })
    });
  }
}
