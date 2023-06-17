import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'curd-app';
  constructor( public _dialog: MatDialog) {}


  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent)
  }
}
