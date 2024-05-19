import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component'; 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'rozetka';
  products: ProductComponent[] = [];

  constructor() { }
  
  addProduct(image: string, titleText: string): void {
    const product = new ProductComponent();
    product.image = image;
    product.titleText = titleText;
    this.products.push(product);
  }
  
  ngOnInit(): void {
    this.addProduct('assets/iphone.jpg', 'Телефоны');
    this.addProduct('assets/laptop.jpg', 'Ноутбуки');
    this.addProduct('assets/pc.jpg', 'Компьютеры');
    this.addProduct('assets/tablets.jpg', 'Планшеты');
    this.addProduct('assets/monitor.jpg', 'Мониторы');
    this.addProduct('assets/accessories.jpg', 'Акссесуары');
    this.addProduct('assets/pcsupplies.jpg', 'Комплектующие');
    this.addProduct('assets/TV.jpg', 'Телевизоры');
  }
}
