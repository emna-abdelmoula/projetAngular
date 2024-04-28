import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import {Article} from "src/Modeles/Publication"
import { ArticleService } from 'src/Services/article.service';
import { MatSort } from '@angular/material/sort';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArticleformComponent } from '../articleform/articleform.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'title', 'lien','date','actions'];
  datasource = new MatTableDataSource<Article>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tabArticle: Article[]=[];
  
  constructor(private MS: ArticleService,private dialog: MatDialog) {

  }
  getAllArticle(){
    this.MS.GETALL().subscribe((r)=>{this.tabArticle=r
      this.datasource = new MatTableDataSource(this.tabArticle);
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ArticleformComponent, dialogConfig)


   
}
  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator; 
    this.getAllArticle(); 
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

  delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(x => {
      if (x) {
        this.MS.onDelete(id).subscribe(() => this.datasource = this.MS.tabArticle);
      }
    });
  }
  onedit(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    // Retrieve the article and then open the modal inside the subscribe block
    this.MS.getArticleById(id).subscribe((article) => {
      if (article) {
        console.log('Article data for editing:', article); // Check the retrieved data

        dialogConfig.data = article;
        this.dialog.open(ArticleformComponent, dialogConfig);
      } else {
        // Handle the case where no article was found
        console.error(`No article found with ID: ${id}`);
      }
    });
  }
  
  
  // delete(id: string): void {
  //   let dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     height: '200px',
  //     width: '300px',
  //   });

  //   dialogRef.afterClosed().subscribe((x) => {
  //     if (x) {
  //       this.MS.onDelete(id).subscribe(() => this.datasource = this.MS.tab);
  //     }
  //   });
  // }
}