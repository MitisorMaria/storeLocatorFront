import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private locationService : LocationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

}
