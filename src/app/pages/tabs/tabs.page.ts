import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private navc:NavController) { }

  ngOnInit() {
  }

  displayMessagePage(){
    console.log('fffffff');
  }

  displayChat(){
    this.navc.navigateForward('/chat-page');
  }

}
