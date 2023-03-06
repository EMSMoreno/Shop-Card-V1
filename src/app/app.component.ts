import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any[] = [];
  // array fica guardado em local storage, por isso pode ficar vazio

  cart: any[] = [];
  // cart é o novo array que vai receber os dados do list, para poder fazer um select

  constructor() {
    // this.list = [
    //   { id: 1, name: 'Pão', price: 0.25 },
    //   { id: 2, name: 'Manteiga', price: 1.79 },
    //   { id: 3, name: 'Fiambre', price: 1.49 },
    //   { id: 4, name: 'Queijo', price: 2.09 },
    //   { id: 5, name: 'Chouriço', price: 2.29 },
    //   { id: 6, name: 'Paio', price: 3.19 },
    //   { id: 7, name: 'Manteiga Amendoim', price: 3.99 },
    //   { id: 8, name: 'Queijo Fresco', price: 4.59 },
    //   { id: 9, name: 'Presunto', price: 5.99 },
    //   { id: 10, name: 'Nutella', price: 6.49 },
    // ]
    // this.save('list', this.list)
    this.load()
  }
  // um constructor é uma forma especial de método para criar um objeto dentro de uma classe
  // this.load carrega o array para local storage

  load() {
    const list = localStorage.getItem('list'); // get usado para definir valores (não retorna valores)
    this.list = list ? JSON.parse(list) : this.list = [];
    // olha para strings JSON e transforma valores/objetos em JS
    // caso contrário, retorna a lista (array)
  }

  save(name: string, data: any[]) {
    localStorage.setItem(name, JSON.stringify(data));
    // set usado para obter info e retornar valor, transf o array em string.
    // funçao generica p/ guardar local storage qualquer array c/ qualquer nome
  }

  addItem(item: any) {
    //this.cart.push(item)
    this.cart = [...this.cart, item]
    this.save('cart', this.cart)
    console.log(item)
  }

  removeItem(index: number) {
    this.cart.splice(index, 1)
    this.save('cart', this.cart)
  }

  setItem(item: any, index: number) {
    const _lista = [...this.cart];
    _lista[index] = item;
    this.cart = _lista;
    if (!item.basket) this.cart.splice(index, 1)
    this.save('cart', this.cart);
    // cada elem do array (item e index) são definidos na função 
    // defino variavel _lista que chama uma notação de array (bas. faz ref aos elem do array, neste caso, apenas 1)
    // defino index como item, e this.list como _lista.
  }
}


/* o form vai criar uma lista - que vai adicionar produtos e respetiva quantidade
   essa lista vai receber os inputs do preço e da quantidade */