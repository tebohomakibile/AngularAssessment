import {Component, inject} from '@angular/core';
import {ApplicationService} from '../services/application.service';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-approval',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './approval.component.html',
  styleUrl: './approval.component.scss'
})
export class ApprovalComponent {

  public appService = inject(ApplicationService)

  form = this.appService.form;
  salary = this.form.get('salary')?.value;

  get status(): string {
    const { netIncome, expenses } = this.salary;
    return expenses > netIncome * 0.5 ? 'Rejected' : 'Approved';
  }
}
