import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  dashboard: Array<GridsterItem>;
  gridsterOptions: GridsterConfig = {
    gridType: 'fit',
    compactType: 'compactUp',
    minCols: 1,
    maxCols: 12,
    minRows: 1,
    maxRows: 12,
    outerMarginLeft: 4,
    outerMarginRight: 4,
    outerMarginTop: 4,
    displayGrid: 'always',
    defaultItemCols: 1,
    defaultItemRows: 1,
    minItemCols: 1,
    maxItemCols: 12,
    minItemRows: 1,
    maxItemRows: 12,
    itemChangeCallback: (newPosition) => {
      console.log('grid item event: ', newPosition);
      // todo, save changed gridster layout into user's profile?
    },
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: false
    },
    pushItems: true,
    pushResizeItems: false,
    swap: true
  };

  ngOnInit() {
    this.dashboard = [
      {
        x: 0,
        y: 0,
        rows: 1,
        cols: 1,
        dragEnabled: true,
        resizeEnabled: true,
        data: { foo: 'bar' }
      }
    ];
  }

}
