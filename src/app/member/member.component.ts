import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

dataSource:any[]=GLOBAL._DB.members;
  // {
  //   id:'123456',
  //   cin:'293899',
  //   name:"Emna",
  //   cv:'lien',
  //   type:'etudiante',
  //   createdDate:'29/01/2024'
  // },
  // {
  //   id:'123390',
  //   cin:'293866',
  //   name:"Ilyes",
  //   cv:'lien',
  //   type:'etudiant',
  //   createdDate:'02/01/2024'
  // },
  // {
  //   id:'123123',
  //   cin:'293833',
  //   name:"Omar",
  //   cv:'lien',
  //   type:'etudiant',
  //   createdDate:'09/01/2024'
  // }

displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
}
