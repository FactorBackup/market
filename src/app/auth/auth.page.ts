import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/home');
  }
  signup() {
    this.router.navigateByUrl('/signup');
  }

}
