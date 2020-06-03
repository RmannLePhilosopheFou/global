import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PrestationsService} from '../../../services/prestations.service';

@Component({
  selector: 'app-enterprice-services',
  templateUrl: './enterprice-services.component.html',
  styleUrls: ['./enterprice-services.component.scss']
})
// tslint:disable-next-line:class-name
export class enterpriceServicesComponent implements OnInit {

  constructor(private router: Router, private prestationsService: PrestationsService) { }

  services: any[] = [];

  ngOnInit() {
    this.services = this.prestationsService.services;
    console.log(this.services);
  }

  goToDetailService(data) {
 return '/landing/' + data.id + '/service-detail';
  }

}
