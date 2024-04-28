import { Component , Inject } from '@angular/core';

import { DatePipe } from '@angular/common';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EvenementServiceService } from 'src/Services/evenement.service.service';


@Component({
  selector: 'app-evetform',
  templateUrl: './evetform.component.html',
  styleUrls: ['./evetform.component.css']
})
export class EvetformComponent {
  form!: FormGroup;
  verifEdit: boolean = false;

  constructor(

    private dialogRef: MatDialogRef<EvetformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,//bech yothor boite 
    private ES: EvenementServiceService,

  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.verifEdit = true;
      console.log(this.data);
      this.initForm2();
    } else {
      this.verifEdit = false;
      this.initForm();
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      lieu: new FormControl(null, [Validators.required]),
      dateDebut: new FormControl(null, [Validators.required]),
      dateFin: new FormControl(null, [Validators.required]),
      //SourcePDF: new FormControl(null,),
      //createDate:new FormControl(null,[Validators.required]),
    });
  }
  initForm2(): void {
    this.form = new FormGroup({
      titre: new FormControl(this.data?.titre, [Validators.required]),
      lieu: new FormControl(this.data?.lieu, [Validators.required]),
      dateDebut: new FormControl(this.data?.dateDebut, [Validators.required]),
      dateFin: new FormControl(this.data?.dateDebut, [Validators.required]),
      //SourcePDF: new FormControl(null,),

      //createDate:new FormControl(null,[Validators.required]),
    });
  }

  save() {
    if (!this.verifEdit) {
      this.dialogRef.close(this.form.value);
      this.ES.save(this.form.value).subscribe(() => {
        console.log(this.form.value);
        // this.router.navigate(['/events']);
      });
    } else {
      this.dialogRef.close(this.form.value);
      this.ES.edit(this.form.value, this.data?.id).subscribe(() => {
        //  this.router.navigate(['/events']);
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
