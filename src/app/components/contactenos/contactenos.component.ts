import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styles: [`
    #map-container {
      width: 100%;
      height: 0;
      margin: 0 auto;
      padding-top: 134.74026%;
      position: relative;
    }
    #map {
      width: 100%;
      height: 100%; /* had to specify height/width */
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  `]
})
export class ContactenosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
