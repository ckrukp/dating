import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { VipsettingPage } from '../modal/vipsetting/vipsetting.page';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  async displayVIPSettings(){
    const modal = await this.modal.create({
      component: VipsettingPage,
      cssClass: 'vip-setting-modal-css'
    });
    modal.present();
  }

}
