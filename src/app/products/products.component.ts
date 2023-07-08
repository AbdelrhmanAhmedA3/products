import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { ProductsDTO } from '../model/productsDTO';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  searchValue!: string;
  // trem:string = '';
  productsList!: ProductsDTO[];
  copyProductList!: any;
  selectedImageIndex = 0;

  constructor(private router: Router, private appService: AppService) {};

  ngOnInit() {
    this.getProducts();
  };

  logOut() {
    if (localStorage.getItem('isToken')) {
      localStorage.removeItem('isToken');
      this.router.navigate(['/login']);
    }
  };

  getProducts() {
    this.appService.getData().subscribe((data: any) => {
      this.productsList = data.products;
      this.copyProductList = data.products
    });
  };

  deleteProduct(productIndex: number) {
    for (let index = 0; index < this.copyProductList.length; index++) {
      if (this.copyProductList[index].id === this.productsList[productIndex].id) {
          this.copyProductList.splice(productIndex, 1);
        }
      }
      this.productsList.splice(productIndex, 1);
  };

  searchingInArray() {
    this.productsList = this.copyProductList.filter((element: any) =>
      element.title
        .toLowerCase()
        .includes(this.searchValue.toLowerCase().trim())
    );
  };
  // nextImage(productIndex: number, imagelentgh: number) {
  //   if (this.selectedImageIndex < imagelentgh - 1) {
  //     ++this.selectedImageIndex;
  //   } else {
  //     this.selectedImageIndex = 0;
  //   }
  // }

  // previousImage(productIndex: number, imagelentgh: number) {
  //   if (
  //     this.selectedImageIndex < imagelentgh - 1 &&
  //     this.selectedImageIndex != 0
  //   ) {
  //     --this.selectedImageIndex;
  //   } else {
  //     this.selectedImageIndex = 0;
  //   }
  // }


}
