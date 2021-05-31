import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';
import { Store } from '../store';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private locationService : LocationService, private route: ActivatedRoute) { }
  private store: any;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

    this.getStoreById(idFromRoute);
  }

  updateStore(store : any) {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

    this.locationService.updateStore(idFromRoute, store).subscribe(
      val => {
        alert("updated");
      },
      response => {
      },
      () => {
      }
    )
    window.location.reload();
  }

  getStoreById(id : number) {
    this.locationService.getStoreById(id).subscribe(
      val => {
          this.store = <Store>val;
      },
      response => {

      },
      () => {

      }
    )
  }

  getStore() {
    return this.store;
  }

}
