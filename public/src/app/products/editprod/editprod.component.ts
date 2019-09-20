import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent implements OnInit {

  product: Object = {id: null, name: "", price: null, quantity: null};
  
  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this._http.getOneProduct(id).subscribe(data => {
      this.product = data;
    })
  }
  resetForm(){
    this.ngOnInit();
  }
  onSubmit(){
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this._http.editProduct(id, this.product).subscribe(data => {
      this.router.navigate(['/products']);
    })
  }

}
