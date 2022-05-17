import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MyStoreServiceService {

  productsDB:Product[]= [];
  constructor() { 
    let product1:Product = new Product(1,'Nikon123',15000,500,'camera');
    let product2:Product = new Product(2,'Panasonic',25000,500,'camera');
    let product3:Product = new Product(3,'Nikon-600',135000,100,'camera');
    let product4:Product = new Product(4,'Samsung - 1',18000,1500,'phone');
    let product5:Product = new Product(5,'Mi-123',19000,2500,'phone');
    let product6:Product = new Product(6,'Redmi',12000,3500,'phone');

    this.productsDB.push(product1);
    this.productsDB.push(product2);
    this.productsDB.push(product3);
    this.productsDB.push(product4);
    this.productsDB.push(product5);
    this.productsDB.push(product6);
  }

  // tdform
  addProduct(product:Product)
  {
    this.productsDB.push(product);
  }

  getAllProducts():Product[]
  {
    return this.productsDB;
  }
 // call a api for getting proucts based on category
 // localhost : 8080/api/products/{phone}
  getAllProductsBasedonCategory(searcCategory:string):Product[]
  {
      let resultArr:Product[] = [];


      this.productsDB.forEach(p=>{
        if(p.category == searcCategory)
        {
          resultArr.push(p);
        }
      });

      return resultArr;
  }

}
