import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PrestationsService} from '../../../services/prestations.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-enterprice-video',
  templateUrl: './enterprice-video.component.html',
  styleUrls: ['./enterprice-video.component.scss']
})
// tslint:disable-next-line:class-name
export class enterpriceVideoComponent implements OnInit {
  services: any[] = [];
  id: number;
  serviceToShow: any;

  constructor(private modalService: NgbModal, private prestationService: PrestationsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.services = this.prestationService.services;
    this.serviceToShow = this.getQuestionByIdFromServices(this.id);
  }
  getQuestionByIdFromServices(id) {
    const service = this.services.find(
        (s) => {
          return s.id === id;
        }
    );
    return service;

  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }
}
