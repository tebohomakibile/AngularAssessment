import {Component, inject} from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {Router} from '@angular/router';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
  standalone: true
})
export class PersonalDetailsComponent {

  public appService = inject(ApplicationService)
  private router = inject(Router);

  personalForm = this.appService.form.get('personal') as FormGroup;

  next() {
    if (this.personalForm.valid) {
      this.router.navigate(['/salary-info']);
    } else {
      this.personalForm.markAllAsTouched();
    }
  }
}
