import { Component } from '@angular/core';
import { ProdutoItem } from 'src/shared/models/produtoItem';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component {
  products: ProdutoItem[] = [
    new ProdutoItem('iPhone 15 Pro Max', 13999, '1TB 6.7" 5G Titânio preto'),
    new ProdutoItem('Samsung S23 Ultra', 9899, '1TB 6.8" 5G Violeta'),
    new ProdutoItem('Motorola Edge 20 Pro', 4999, '256GB 6.7" 5G Azul'),
    new ProdutoItem('Xiaomi Mi 11 Ultra', 5999, '256GB 6.8" 5G Preto'),
    new ProdutoItem('Asus ROG Phone 5', 6999, '512GB 6.8" 5G Preto'),
  ]

  ordenarPorNomeAZ() {
    this.products.sort((a, b) => a.name.localeCompare(b.name))
  }

  ordenarPorNomeZA() {
    this.products.sort((a, b) => b.name.localeCompare(a.name))
  }

  ordenarPorPrecoCrescente() {
    this.products.sort((a, b) => a.price - b.price)
  }

  ordenarPorPrecoDecrescente() {
    this.products.sort((a, b) => b.price - a.price)
  }
}
