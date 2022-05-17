import { Component, OnInit } from '@angular/core';
import { MyStoreServiceService } from '../my-store-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  __storeService:MyStoreServiceService;
  allCameras:Product[] = [];

  constructor(__storeService:MyStoreServiceService) {
    this.__storeService = __storeService;
    this.allCameras = __storeService.getAllProductsBasedonCategory('camera');
   }

  ngOnInit(): void {
  }

}
