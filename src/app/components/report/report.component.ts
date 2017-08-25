import { Component, OnInit } from '@angular/core';
import {AlienService } from '../../services/alien';
import { Alien } from '../../models/alien';
import { NewReport} from '../../models/report';
import { FormControl, FormGroup,
  Validators, ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers: [
    AlienService
  ]
})
export class ReportComponent implements OnInit {

aliens: Alien[] = []

reportForm = new FormGroup({
alien_id: new FormControl('', [Validators.required])
});

  constructor(private alienService: AlienService) { }

async ngOnInit(){
  this.aliens = await this.alienService.getAliens();
}
}
  
