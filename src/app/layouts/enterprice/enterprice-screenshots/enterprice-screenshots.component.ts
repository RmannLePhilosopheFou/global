import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-enterprice-screenshots',
  templateUrl: './enterprice-screenshots.component.html',
  styleUrls: ['./enterprice-screenshots.component.scss']
})
// tslint:disable-next-line:class-name
export class enterpriceScreenshotsComponent implements OnInit {

  constructor() { }

public index: any;

  public config: SwiperConfigInterface = {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide: 1,
        keyboard: true,
        mousewheel: false,
        preventClicks: false,
        preventClicksPropagation: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.43,
            slideShadows: false
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination'
        }
  };
  public slides = [
      { img: 'assets/images/jojo.jpg', nom: 'Joel'},
      { img: 'assets/images/jojo-armand.jpg', nom: 'jean'},


  ];


  Affiche() {
console.log('yessss');
  }

  ngOnInit() {  }
}
