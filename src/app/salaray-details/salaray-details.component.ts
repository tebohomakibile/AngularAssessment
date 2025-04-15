import {Component, inject} from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationService} from '../services/validation.service';

@Component({
  selector: 'app-salaray-details',
  imports: [ReactiveFormsModule],
  templateUrl: './salaray-details.component.html',
  styleUrl: './salaray-details.component.scss',
  standalone: true
})
export class SalarayDetailsComponent {

  public appService = inject(ApplicationService)
  private router = inject(Router);
  private validationService = inject(ValidationService)

  salaryForm = this.appService.form.get('salary') as FormGroup;

  next() {
    if (this.salaryForm.valid) {
      this.router.navigate(['/approval']);
    } else {
      this.salaryForm.markAllAsTouched();
    }
  }

  back() {
    this.router.navigate(['/personal-info']);
  }

  getError(controlName: string): string | null {
    const control = this.salaryForm.get(controlName);
    return this.validationService.getErrorMessage(control!, controlName);
  }

}
