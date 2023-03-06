import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() result = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  updatePrice(qty: string | number) {
    this.item.qty = +qty;
    this.result.emit(this.item)
  }

  removefromBasket() {
    if (this.item.qty) {
      this.item.basket = !this.item.basket;
      this.result.emit(this.item);
    }
  }
}
