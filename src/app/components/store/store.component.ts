import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';

const selectedCart = [
     { price: 20 },
     { price: 45 },
     { price: 67 },
     { price: 1305 }
  ];

const totalCartPrice={
  rubles: 0, 
  euros: 0, 
  dollars: 0, 
  pounds: 0, 
  yens: 0
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private _rest: RestService) {}

  ngOnInit() {
    this.getCurrency();
    console.log(this.getCurrency()); // chek that it's work
  } 

  getCurrency(){    
    let sum = selectedCart.map(obj => obj.price).reduce((acc, next) => acc+next);
    this._rest.getCurrency().subscribe((cur: any) => {        
      totalCartPrice.rubles=sum*cur.quotes.USDRUB;
      totalCartPrice.euros=sum*cur.quotes.USDEUR;
      totalCartPrice.dollars=sum*cur.quotes.USDUSD;
      totalCartPrice.pounds=sum*cur.quotes.USDGBP;
      totalCartPrice.yens=sum*cur.quotes.USDJPY;         
    });
    return totalCartPrice;
  }

}

