import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { VipsettingPage } from '../modal/vipsetting/vipsetting.page';

@Component({
  selector: 'app-tinder-like-page',
  templateUrl: './tinder-like-page.page.html',
  styleUrls: ['./tinder-like-page.page.scss'],
})
export class TinderLikePagePage implements OnInit {

  @ViewChild('card_container', {static : false}) card_container: ElementRef;
  @ViewChild('card_check_result', {static : false}) card_check_result: ElementRef;

  image_array = [];
  name_array = ['Shaomei Li', 'Yifei O', 'ShenShen Zhen', 'Shaomei Li', 'Yifei O', 'ShenShen Zhen', 'Alyosha', 'Pavel'];
  age_array = [];
  sex_array = [];
  gps_array = ['Beijing, China', 'Moscow, Russia', 'Shenyang, China', 'Beijing, China', 'Moscow, Russia', 'Shenyang, China', 'Petersbrug, Russia', 'Kiev, Ukrine'];
  distance_array = ['23km Tiananmen', '2km Red Square', '10km Shenyangzhan', '23km Tiananmen', '2km Red Square', '10km Shenyangzhan', '2km CCC', '12km DDD'];
  slide_count = 0;
  checkLike = 0;

  constructor(private modal:ModalController) { }

  ngOnInit() {
    for(let i = 1; i < 9; i++){
      this.image_array.push('../../../assets/photos/photo_large' + i + '.png'); 
      this.age_array.push(Math.floor(Math.random() * 15) + 10);
      this.sex_array.push(i % 2);
      
    }
    this.slide_count = this.image_array.length;
  }

  // onNext() {
  //   if (this.image_array.length > 0){
  //     let front_card = this.card_container.nativeElement.children[this.card_container.nativeElement.children.length - 1];
  //     front_card.className += ' tinderlike-fly-out-over';

  //     setTimeout(() =>{
  //       this.image_array.pop();
  //       this.slide_count = this.image_array.length;
  //     }, 150);
  //   }
  // }

  onLike() {
    if (this.image_array.length > 0){
      let front_card = this.card_container.nativeElement.children[this.card_container.nativeElement.children.length - 1];
      front_card.className += ' tinderlike-fly-out-right';

      let check_result = document.getElementById('tinderlike-simple-info-check-id-'+ (this.image_array.length - 1));
      check_result.className += ' tinderlike-check-like';

      setTimeout(() =>{
        this.image_array.pop();
        this.slide_count = this.image_array.length;
      }, 150);
    }
  }

  onDislike() {
    if (this.image_array.length > 0){
      let front_card = this.card_container.nativeElement.children[this.card_container.nativeElement.children.length - 1];
      front_card.className += ' tinderlike-fly-out-left';

      let check_result = document.getElementById('tinderlike-simple-info-check-id-'+ (this.image_array.length - 1));
      check_result.className += ' tinderlike-check-dislike';
      
      setTimeout(() =>{
        this.image_array.pop();
        this.slide_count = this.image_array.length;
      }, 150);
    }

  }
  
  async displayVIPSettings(){
    const modal = await this.modal.create({
      component: VipsettingPage,
      cssClass: 'vip-setting-modal-css'
    });
    modal.present();
  }

}
