import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NewprodComponent } from './products/newprod/newprod.component';
import { EditprodComponent } from './products/editprod/editprod.component';
import { DetailprodComponent } from './products/detailprod/detailprod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewprodComponent,
    EditprodComponent,
    DetailprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
