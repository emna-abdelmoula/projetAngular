import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member1Service } from 'src/Services/member1.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  constructor(private MS: Member1Service, private router: Router, private activatedRoute: ActivatedRoute) {}

  form!: FormGroup;
  idcourant!: string;

  ngOnInit(): void {
    this.idcourant = this.activatedRoute.snapshot.params['id']; // Récupérer l'ID courant de la route

    if (!!this.idcourant) { // Vérifier si l'ID est défini (edit)
      this.MS.getMemberbyId(this.idcourant).subscribe(x => this.initForm2(x));
    } else { // Création d'un nouveau membre
      this.initForm();
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    });
  }

  initForm2(x: any): void {
    this.form = new FormGroup({
      cin: new FormControl(x.cin, [Validators.required]),
      name: new FormControl(x.name, [Validators.required]),
      cv: new FormControl(x.cv, [Validators.required]),
      type: new FormControl(x.type, [Validators.required])
    });
  }

  onsubmit() {
    if (!!this.idcourant) { // Si l'ID est défini, mettre à jour le membre
      this.MS.updateMember(this.idcourant, this.form.value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    } else { // Sinon, enregistrer un nouveau membre
      const memberToSave = this.form.value;
      this.MS.ONSAVE(memberToSave).subscribe(() => {
        this.router.navigate(['/members']);
      });
    }
  }
  
}
