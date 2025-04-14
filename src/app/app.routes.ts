import { Routes } from '@angular/router';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {SalarayDetailsComponent} from './salaray-details/salaray-details.component';
import {ApprovalComponent} from './approval/approval.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
  { path: 'personal-info', component: PersonalDetailsComponent },
  { path: 'salary-info', component: SalarayDetailsComponent },
  { path: 'approval', component: ApprovalComponent },
];
