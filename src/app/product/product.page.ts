import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {

  constructor(public router: Router,) { }

  goregister() {
    this.router.navigate(['/register']);
  }
}
