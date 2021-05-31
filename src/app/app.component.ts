import { Component } from '@angular/core';
import { LocationService } from './location.service';
import { Store } from './store';


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
    this.locationService.addStore(store).subscribe(
      val => {
        alert("added");
      },
      response => {
      },
      () => {
      }
    )
    window.location.reload();
  }


  deleteStore(store : Store) {
    this.locationService.deleteStore(store.id).subscribe(
      val => {
      },
      response => {
      },
      () => {
      }
    )
    window.location.reload();
  }
  
}
