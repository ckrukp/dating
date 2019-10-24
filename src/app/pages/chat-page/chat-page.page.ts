import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {

  messages = [
    {
      user:'anton',
      createdAt:1554090856000,
      msg:'Hi! What are you doing?',
      status:'Read'
    },
    {
      user:'lita',
      createdAt:1554090956000,
      msg:'I am studying Russian.',
      status:'Read'
    },
    {
      user:'anton',
      createdAt:1554091056000,
      msg:'Sure. Do you know English?',
      status:'Delivered'
    },
    {
      user:'lita',
      createdAt:1554093056000,
      msg:'Yes. I know English and Chinese.',
      status:'Deliverd'
    }
  ];

  currentUser = 'anton';

  newMsg = '';

  //@ViewChild(IonContent) content:IonContent

  constructor(private navc: NavController) { }

  ngOnInit() {
  }

  sendMessage(){
    this.messages.push({
      user:'anton',
      createdAt: new Date().getTime(),
      msg: this.newMsg,
      status:'Delivered'
    });

    this.newMsg = '';
    setTimeout(()=> {
      //this.content.scrollToBottom(200);
    });
  }

  displayVoiceCall(){
    this.navc.navigateForward('/voice-call');
  }

  displayBackPage(){
    this.navc.back();
  }
  

}
