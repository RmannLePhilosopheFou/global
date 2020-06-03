import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil-video',
  templateUrl: './accueil-video.component.html',
  styleUrls: ['./accueil-video.component.scss']
})
export class AccueilVideoComponent implements OnInit {
secondes: number;
  constructor(private routes: Router) {

  }
    goToTheNextPage() {
        this.routes.navigate(['/landing']);
    }
  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
        (value) => {
          this.secondes = value;
        }
  );
  }

}
