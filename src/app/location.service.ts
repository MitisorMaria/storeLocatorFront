import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }
 

  getAllStores() {
    let apiurl = "http://localhost:8080/stores";
    return this.http.get(apiurl);
  }

  deleteStore(storeId : number) {
    let apiurl = "http://localhost:8080/stores/" + storeId;
    return this.http.delete(apiurl);
  }

  addStore(store : Store) {
    let apiurl = "http://localhost:8080/stores/";
    return this.http.post(apiurl, store);
  }
  
  updateStore(store : Store) {
    let apiurl = "http://localhost:8080/stores/";
    return this.http.put(apiurl, store);
  }

}
