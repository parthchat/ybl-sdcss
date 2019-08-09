import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-stepper',
  templateUrl: './services-stepper.component.html',
  styleUrls: ['./services-stepper.component.css']
})
export class ServicesStepperComponent implements OnInit {
  isLinear: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
