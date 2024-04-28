import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  nom!:String;

  photoURL!: any;
  user: any;

  constructor(private L:AuthService,private router:Router){}

  logout() :void{
    this.L.doLogout().then(()=>{this.router.navigate(['/login'])})
  }

  ngOnInit() :void {
    this.L.getUserClaims().then((userInfo) => {
      this.user=userInfo;
        console.log(userInfo.displayName)
        console.log(userInfo.photoURL)
        this.nom = userInfo.displayName;
        this.photoURL = userInfo.photoURL;
    }).catch(error => {
        console.error('Error fetching user claims:', error);
    });
}
  }

