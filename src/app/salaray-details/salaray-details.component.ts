import {Component, inject} from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

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

  salaryForm = this.appService.form.get('salary') as FormGroup;

  next() {
    if (this.salaryForm.valid) {
      this.router.navigate(['/approval']);
    } else {
      this.salaryForm.markAllAsTouched();
    }
  }

}
