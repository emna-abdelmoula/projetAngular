import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  //forcage de type bech twli tothor sous forme de boite de dialogue 3outh maythor sur toute la page
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  title="Are you sure?"
  content="Are you sure you want to delete this item ?"
  cancel="Cancel"
  actions="confirm";
}
