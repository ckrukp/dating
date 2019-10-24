import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VipothersettingPage } from '../vipothersetting/vipothersetting.page';

@Component({
  selector: 'app-vipdktransform',
  templateUrl: './vipdktransform.page.html',
  styleUrls: ['./vipdktransform.page.scss'],
})
export class VipdktransformPage implements OnInit {

  data: Array<{icon: string, showDetails: boolean}> = [];

  constructor(private modal:ModalController, private newModal:ModalController) {
    this.data.push({
      icon:'md-arrow-dropup',
      showDetails : false
    });
  }

  ngOnInit() {
  }

  async displayOtherSetting() {
    this.modal.dismiss();
    const modal = await this.newModal.create({
      component: VipothersettingPage,
      cssClass: 'vip-other-settings-modal-css'
    });
    modal.present();
  }


}
