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
        cellphone: ['', [Validators.required, Validators.pattern(/^0[0-9]{9}$/)]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required]
      }),

      salary: this.fb.group({
        grossIncome: [null, [Validators.required, Validators.min(0)]],
        netIncome: [null, [Validators.required, Validators.min(0)]],
        expenses: [null, [Validators.required, Validators.min(0)]]
      })
    });
  }
}
