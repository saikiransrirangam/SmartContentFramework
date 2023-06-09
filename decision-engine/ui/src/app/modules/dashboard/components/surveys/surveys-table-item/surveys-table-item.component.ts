import { Component, Input, OnInit } from '@angular/core';

import { Survey } from '../../../models/survey';

@Component({
  selector: '[surveys-table-item]',
  templateUrl: './surveys-table-item.component.html',
})
export class SurveysTableItemComponent implements OnInit {
  @Input() dataRow = <Survey>{};
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - constructor
   **-------------------------------------------------------------------------------------
   */
  constructor() {}
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - ngOnInit
   **-------------------------------------------------------------------------------------
   */
  ngOnInit(): void {
    console.log(this.dataRow);
  }
}
