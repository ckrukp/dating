import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { VipdktransformPage } from '../vipdktransform/vipdktransform.page';

@Component({
  selector: 'app-vipsetting',
  templateUrl: './vipsetting.page.html',
  styleUrls: ['./vipsetting.page.scss'],
})
export class VipsettingPage implements OnInit {

  constructor(private navParams: NavParams, private modal: ModalController, private newModal:ModalController) { }

  ngOnInit() {
  }

  closePayment(){
    this.modal.dismiss();
  }

  async displayDankarTransform(){
    this.modal.dismiss();
    const newModal = await this.newModal.create({
      component: VipdktransformPage,
      cssClass: 'vip-dk-trans-modal-css'
    });
    newModal.present();
  }

}
