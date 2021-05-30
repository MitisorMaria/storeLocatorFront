import { Component } from '@angular/core';
import { LocationService } from './location.service';

interface Store {
  id:number,
  name: string,
  address: string,
  latitude: number,
  longitude: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-locator';
  latitude = 46.770439;
  longitude = 23.591423;

  constructor (private locationService : LocationService) {}

  public storesList : any;

  ngOnInit() {
    this.locationService.getAllStores().subscribe(
      val => {
          this.storesList = <Store>val;
      },
      response => {

      },
      () => {

      }
    )
  }

  addStore(store : any) {
    alert("add store");
  }

  updateStore(store : any) {
    alert("update store");
  }

  deleteStore(store : Store) {
    alert("delete store" + store.id);
    this.locationService.deleteStore(store.id).subscribe(
      val => {
      },
      response => {
      },
      () => {
      }
    )
  }
}
