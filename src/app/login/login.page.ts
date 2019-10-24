import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../pages/tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hideLogin = false;
  hideSignup = false;
  labelColor1 = "#b9b9b9";
  labelColor2 = "#b9b9b9";
  borderLabel1 = "";
  borderLabel2 = "";

  constructor(private navc: NavController) { }

  ngOnInit() {
    this.displayLogin();
  }

  displayLogin(){
    this.hideLogin = true;
    this.hideSignup = false;
    this.labelColor1 = "#fff";
    this.labelColor2 = "#b9b9b9";
    this.borderLabel1 = "1px solid #fff";
    this.borderLabel2 = "";
  }

  displaySignup(){
    this.hideLogin = false;
    this.hideSignup = true;
    this.labelColor1 = "#b9b9b9";
    this.labelColor2 = "#fff";
    this.borderLabel1 = "";
    this.borderLabel2 = "1px solid #fff";
  }

  displayTabs(){
    this.navc.navigateForward('/tabs');
  }

}
