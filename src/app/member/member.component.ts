import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member1Service } from 'src/Services/member1.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private MS: Member1Service, private dialog: MatDialog) { }

  dataSource: any[] = GLOBAL._DB.members;

  delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(x => {
      if (x) {
        this.MS.onDelete(id).subscribe(() => this.dataSource = this.MS.tab);
      }
    });
  }

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];
}
