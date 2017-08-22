import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [
    EncountersService
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private encountersService: EncountersService) { }

  async ngOnInit(){
  const encounters = await this.encountersService.getReports();
  console.log(encounters);

//     const data = {
  
//    name: 'ping',
//   atype: 'peach',
//   date: '22/08/2017',
//   action: 'eat',
//   colonist_id: '4'
// }
//   const newEncounter = await this.encounterService.postEncounters(data);
//   console.log(newEncounter);
  }
}