import { Component, OnInit } from '@angular/core';
import {JobService } from '../../services/job';

@Component({
  selector: 'app-',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(jobService: JobService) { }

  ngOnInit() {
  }

}
