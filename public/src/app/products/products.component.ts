import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  constructor(private _http: HttpService, public route: ActivatedRoute) { }

  ngOnInit() {
    console.log('hello');
    this._http.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}
