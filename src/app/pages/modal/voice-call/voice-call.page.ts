import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-voice-call',
  templateUrl: './voice-call.page.html',
  styleUrls: ['./voice-call.page.scss'],
})
export class VoiceCallPage implements OnInit {

  avatarPath = '';

  constructor(private navc: NavController) { }

  ngOnInit() {
  }

  closeVoiceCallWindow(){
    this.navc.back();
  }

}
