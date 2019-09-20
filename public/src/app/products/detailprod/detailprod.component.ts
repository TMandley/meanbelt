import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.css']
})
export class DetailprodComponent implements OnInit {
  @Output() someEvent = new EventEmitter();

  product: Object = {id: null, name: "", price: null, quantity: null};

  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this._http.getOneProduct(id).subscribe(data => {
      this.product = data;
    })
  }
  deleteProd(){
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this._http.deleteProduct(id).subscribe(data => {
      this.someEvent.emit();
      this.router.navigate(['/products']);
    })
  }

}
