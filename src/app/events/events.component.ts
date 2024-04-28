import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EvenementServiceService } from 'src/Services/evenement.service.service';
import { EvetformComponent } from '../evetform/evetform.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit , AfterViewInit {
  tabEvt: Event[] = [];
  displayedColumns: string[] = [
    'id',
    'titre',
    'lieu',
    'dd',
    'df',
    'action',
  ];
  nom = 'list';
  datasource = new MatTableDataSource<Event>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private evtService: EvenementServiceService,
    private dialog: MatDialog
  ) {}

  open() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EvetformComponent, dialogConfig);
  }

  delete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.evtService.ONDELETE(id).subscribe(() => {
          this.getAllEvents();
        });
      }
    });
  }

  // onedit(id: string) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   this.evtService.getEvtById(id).subscribe((result) => {
  //     dialogConfig.data = result;
  //     this.dialog.open(EvetformComponent, dialogConfig);
  //   });
  // }


  onedit(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    // Retrieve the article and then open the modal inside the subscribe block
    this.evtService.getEvtById(id).subscribe((result) => {
      if (result) {
        console.log('Event data for editing:', result); // Check the retrieved data

        dialogConfig.data = result;
        this.dialog.open(EvetformComponent, dialogConfig);
      } else {
        // Handle the case where no article was found
        console.error(`No event found with ID: ${id}`);
      }
    });
  }
  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.evtService.GETALL().subscribe((result) => {
      console.log(result);
      this.tabEvt = result;
      this.datasource = new MatTableDataSource<Event>(this.tabEvt);
    });
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }


}

