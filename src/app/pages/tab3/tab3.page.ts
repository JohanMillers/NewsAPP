import { DataLocalService } from './../../Services/data-local.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public dataLocal: DataLocalService) {
  


  }

}
