import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { VipsettingPage } from '../modal/vipsetting/vipsetting.page';
import { UserfilterPage } from '../modal/userfilter/userfilter.page';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.page.html',
  styleUrls: ['./user-list-page.page.scss'],
})
export class UserListPagePage implements OnInit {

  userlist_image_array = [];
  userlist_name_array = [];
  userlist_age_array = [];

  value = 0;
  filter = 0;

  constructor(private modal:ModalController) { }

  ngOnInit() {

    this.filter = 0;

    for(let i = 1; i < 16; i++){
      this.userlist_image_array.push('../../../assets/photos/photo' + i + '.png');
      this.userlist_name_array.push('User_' + i);
      this.userlist_age_array.push(Math.floor(Math.random() * 15) + 16);
    }
    
  }

  async displayVIPSettings(){
    const modal = await this.modal.create({
      component: VipsettingPage,
      cssClass: 'vip-setting-modal-css'
    });
    modal.present();
  }

  async displayUserFilter(){
    this.filter = 1;
    
    const modal = await this.modal.create({
      component: UserfilterPage,
      cssClass: 'user-filter-modal-css'
    });
    modal.present();
    //document.getElementById('userlist-filter-btn').setAttribute('style', 'display:fixed');
  }

  displayUserList(){
    this.filter = 0;
  }

}
