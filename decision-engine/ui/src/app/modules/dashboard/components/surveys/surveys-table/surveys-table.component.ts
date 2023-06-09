import { Component, OnInit } from '@angular/core';

import { Survey } from '../../../models/survey';

@Component({
  selector: '[surveys-table]',
  templateUrl: './surveys-table.component.html',
})
export class SurveysTableComponent implements OnInit {
  public tableItems: Survey[] = [
    {
      id: 1,
      title: 'Survey 1',
      description: 'My first Survey',
      questionTotal: 3,
      submissonTotal: 0,
      active: true,
    },
  ];
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME -  constructor
   **-------------------------------------------------------------------------------------
   */
  constructor() {}
  /*
   **-------------------------------------------------------------------------------------
   ** METHOD NAME - ngOnInit
   **-------------------------------------------------------------------------------------
   */
  ngOnInit(): void {}
}
