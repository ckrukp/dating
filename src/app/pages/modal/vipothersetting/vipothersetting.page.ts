import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vipothersetting',
  templateUrl: './vipothersetting.page.html',
  styleUrls: ['./vipothersetting.page.scss'],
})
export class VipothersettingPage implements OnInit {

  constructor(private newModal:ModalController) { }

  ngOnInit() {
  }

  closeOSModal(){
    this.newModal.dismiss();
  }

}
