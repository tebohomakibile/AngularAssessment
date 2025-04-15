import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  private validationMessages: { [key: string]: { [key: string]: string } } = {
    fullName: {
      required: 'Full Name is required.'
    },
    cellphone: {
      required: 'Cellphone number is required.',
      pattern: 'Cellphone number must be a valid 10-digit number.'
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email format.'
    },
    address: {
      required: 'Address is required.'
    },
    grossIncome: {
      required: 'Gross income is required.',
      min: 'Gross income must be greater than or equal to 0.'
    },
    netIncome: {
      required: 'Net income is required.',
      min: 'Net income must be greater than or equal to 0.'
    },
    expenses: {
      required: 'Monthly expenses are required.',
      min: 'Expenses must be greater than or equal to 0.'
    }
  };

  getErrorMessage(control: AbstractControl, fieldName: string): string | null {
    if (!control || !control.errors || !control.touched) return null;
    const fieldErrors = this.validationMessages[fieldName];
    if (!fieldErrors) return null;

    const firstErrorKey = Object.keys(control.errors)[0];
    return fieldErrors[firstErrorKey] || null;
  }
}
