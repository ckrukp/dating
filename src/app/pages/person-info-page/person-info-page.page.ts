import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-person-info-page',
  templateUrl: './person-info-page.page.html',
  styleUrls: ['./person-info-page.page.scss'],
})
export class PersonInfoPagePage implements OnInit {

  image_array = [];

  slideOptsOne = {};

  constructor() {
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      //autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        // type: 'custom',
        // clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
      }
    };
  }

  ngOnInit() {
    for(let i = 1; i < 9; i++){
      this.image_array.push('../../../assets/photos/photo_large' + i + '.png'); 
    }
  }

}
