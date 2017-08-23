import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  async ngOnInit(){
//      const data = {
  
//   name: 'ping',
//   atype: 'peach',
//   date: '22/08/2017',
//   action: 'eat',
//   colonist_id: '4'
// }

  const encounters = await this.reportService.getEncounters();
  console.log(encounters);
  }
}