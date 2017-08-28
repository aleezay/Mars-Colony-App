import { Component, OnInit } from '@angular/core';
import {AlienService } from '../../services/alien';
import { Alien } from '../../models/alien';
import { NewReport} from '../../models/report';
import { ReportService } from '../../services/encounters';
import { Router } from '@angular/router';
import { FormControl, FormGroup,
  Validators, ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    ReportService
  ]
})
export class ReportComponent implements OnInit {

aliens: Alien[];

reportForm = new FormGroup({
alien_id: new FormControl('', [Validators.required]),
action: new FormControl('', [Validators.required])
});

  constructor(private alienService: AlienService, private reportService: ReportService, 
              private router: Router) { }

async ngOnInit(){
  this.aliens = await this.alienService.getAliens();
}

async submitReport(){
   const newReport: NewReport = {
     atype: this.reportForm.get('alien_id').value,
     date: '08.25.2017',
     action: this.reportForm.get('action').value,
     colonist_id: '3'
   };
await this.reportService.postEncounters(newReport);
  //  console.log('Colonists eat marsbars', newReport );
  this.router.navigate(['encounters']);
}

}
  
