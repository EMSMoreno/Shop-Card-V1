import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() products: any[] = [];
  product = null
  @Output() addProduct = new EventEmitter<any>()

  constructor() { }

  ngOnInit() { }

  add(product: any) {
    product.qty = 1
    product.basket = true
    this.addProduct.emit(product)
  }
}








//  add(addProduct: any) {
//   this.addProduct.emit({
//     id: new Date().getTime(),
//     name: addProduct.value,
//     qty: 0,
//     price: "",
//     done: false,
//   })
//   addProduct.value = ''
//   console.log(addProduct)
// }
