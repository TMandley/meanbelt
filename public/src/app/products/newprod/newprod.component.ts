import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {

  product: Object = {id: this.genrandom(), name: "", price: null, quantity: null};
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this._http.createProduct(this.product).subscribe(data => {
      this.router.navigate(['/products']);
    })
  }
  clearForm(form){
    form.reset()
  }
  genrandom(){
    return Math.floor(Math.random() * 99999);
  }
}
