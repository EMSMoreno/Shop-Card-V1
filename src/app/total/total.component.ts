import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnChanges {
  @Input() list: any[] = [];
  total: number = 0

  constructor() { }

  ngOnChanges() {
    console.log('#changes');
    this.total = +this.list
      .map((i) => i.price * i.qty)
      .reduce((acc, val) => acc + val, 0)
      .toFixed(2)

  }
}

