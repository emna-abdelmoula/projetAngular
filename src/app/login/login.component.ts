import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService (2)';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private L :AuthService,private router:Router) {}
    SIGN():void{
      //appeler le service authservice
      this.L.doGoogleLogin().then(()=>{this.router.navigate(['/members'])})
    }
}
