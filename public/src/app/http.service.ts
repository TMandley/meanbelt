import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts(){
    return this._http.get('/api/products');
  }
  getOneProduct(id: Number){
    return this._http.get(`/api/products/${id}`);
  }
  createProduct(productobj){
    return this._http.post('/api/products', productobj);
  }
  editProduct(id: Number, productobj){
    return this._http.put(`/api/products/${id}`, productobj);
  }
  deleteProduct(id: Number){
    return this._http.delete(`/api/products/${id}`);
  }
}
