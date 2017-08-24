import { Routes} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { ReportComponent } from './components/report/report.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const appRoutes: Routes = [ //our routes can be anything as long as they are strings. can name them anything we want
  { path: '', component: WelcomeComponent, data: { state: 'welcome' } }, //description
  { path: 'register', component: RegisterComponent, data: { state: 'register' } },
  { path: 'encounters', component:EncountersComponent, data: { state: 'encounters' } },
  { path: 'report', component:ReportComponent, data: { state: 'report' } },
  { path: '**', component:NotfoundComponent, data: { state: 'notfound' } }
];
