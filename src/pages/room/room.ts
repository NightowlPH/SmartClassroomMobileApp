import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {AuthenticationProvider} from '../../providers/authentication/authentication';
import {LoginPage} from '../login/login';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public authenticationProvider: AuthenticationProvider
  ) {
    this.menuCtrl.enable(true, 'myMenu'); //enables sidemenu
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }
  

}
