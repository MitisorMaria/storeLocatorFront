import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Store } from '../store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  latitude = 46.770439;
  longitude = 23.591423;

  constructor(private locationService : LocationService) { }

  public storesList : any;

  ngOnLoad() {
    this.getAllStores();
  }
  ngOnInit(): void {
    this.getAllStores();
  }

  addStore(store : any) {
    this.locationService.addStore(store).subscribe(
      val => {
      },
      response => {
      },
      () => {
      }
    )
    window.location.reload();
  }

  getAllStores() {
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
