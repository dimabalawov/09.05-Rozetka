import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() image: string;
  @Input() titleText: string;

  constructor() {
    this.image = '';
    this.titleText = ''
   }

  ngOnInit(): void {
  }
}

