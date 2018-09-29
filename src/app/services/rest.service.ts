import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = 'http://apilayer.net/api/live?access_key=a1ea2d135eee9c07f56f40bc60a28035&currencies=USD,EUR,JPY,GBP,RUB&format=1';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getCurrency(){
    return this.http.get(url).pipe(
      map(
        (response)=>{
      return response;
    }
  ));
  }

}
