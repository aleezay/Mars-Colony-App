import { Component, OnInit } from '@angular/core';
import { ColonistService } from '../../services/colonist';
import { NewColonist } from '../../models/colonist';
import { JobService } from '../../services/job';
import {Job} from '../../models/job';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {
  
  jobs: Job[] = [];

registerForm = new FormGroup({
         name: new FormControl('', 
         [Validators.required,
         Validators.maxLength(100),
         Validators.minLength(2),
         this.noNumbers('')
         ]),
          age: new FormControl('', [Validators.required,
          Validators.max(9999),
          Validators.min(0),
          ]),
       job_id: new FormControl('', [Validators.required])
});
  
  constructor(
    private jobService: JobService,
    private colonistService: ColonistService
  ) {}

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
    console.log(this.jobs);
  }

async registerColonist(){
   const newColonist: NewColonist = {
     name: this.registerForm.get('name').value,
     age: this.registerForm.get('age').value,
     job_id: this.registerForm.get('job_id').value
   };

   const colonist = await this.colonistService.registerColonist(newColonist);
   console.log('Colonists eat marsbars', colonist );
 }

 private noNumbers(validNameRegex): ValidatorFn {
   return(control): {[key:string] : any } => { //this function returns an object. cutom validator just copy-paste. all look the same.
const forbiddenName = validNameRegex.test(control.value);
return forbiddenName ? { 'forbiddenName' : { value: control.value } } : null;
   };
 }

}
//rejex that returns true if it finds numbers in a string