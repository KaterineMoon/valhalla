import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html',
  styleUrls: ['./inversion.component.css'],
  providers: [NgbCarouselConfig]
})
export class InversionComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }  

  ngOnInit() {
  }

}
