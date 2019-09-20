import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewprodComponent } from './products/newprod/newprod.component';
import { DetailprodComponent } from './products/detailprod/detailprod.component';
import { EditprodComponent } from './products/editprod/editprod.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: NewprodComponent },
  { path: 'products/:id', component: DetailprodComponent},
  { path: 'products/:id/edit', component: EditprodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
