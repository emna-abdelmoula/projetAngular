import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/Services/article.service';
import { Article } from 'src/Modeles/Publication';

@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.css']
})
export class ArticleformComponent implements OnInit {
  form!: FormGroup;
  idcourant: any;
  type: any;
  lien: any;
  title: String;
  date: any;
  sourcepdf: any;
  

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private MS: ArticleService,
    private dialogRef: MatDialogRef<ArticleformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // It's better to use the Article type here for strong typing
  ) { 
    this.idcourant = data.id;
    this.type=data.type;
    this.title=data.title;
    this.lien=data.lien;
    this.date=data.date;
    this.sourcepdf=data.sourcepdf;
    console.log(this.type)
    console.log(this.idcourant)
  }


  ngOnInit(): void {
   this.initForm();

  }

  initForm(): void {
    this.form = new FormGroup({
      
      type: new FormControl(this.type, [Validators.required]),
      title: new FormControl(this.title, [Validators.required]),
      lien: new FormControl(this.lien, [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
      sourcepdf: new FormControl(this.sourcepdf, [Validators.required])
    });
  }

  // In your ArticleformComponent
save(): void {
     
  this.dialogRef.close( this.form.value);
    const articleData = this.form.value;
    if (this.idcourant) {
      // Call the update article method
      this.articleService.updateArticle(this.idcourant, articleData).subscribe(() => {
        this.dialogRef.close(articleData);
        this.router.navigate(['/articles']);
      });
    } else {
      // Call the save (create) article method
      this.articleService.ONSAVE(articleData).subscribe(() => {
        this.dialogRef.close(articleData);
        this.router.navigate(['/articles']);
      });
    }
  } 


  

  close(): void {
    this.dialogRef.close();
  }
}
