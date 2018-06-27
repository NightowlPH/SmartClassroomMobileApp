import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthenticationProvider} from '../../providers/authentication/authentication';
import {RoomPage} from '../room/room';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild (LoginPage) login: LoginPage;
  
  constructor(
    public navCtrl: NavController,
    public authenticationProvider: AuthenticationProvider
  ) { }

  ionViewDidLoad() {
    // console.log(this.login.userAccount);
    console.log("did load");
    console.log("This is the home page");
    if(localStorage.getItem('token')==null){
      console.log('There is no token');
      this.navCtrl.push(LoginPage);
    } else {
      this.navCtrl.push(RoomPage);
      
    	// let data: object;
 	 		// this.authenticationProvider.loginWithToken(data)
 	 		// .subscribe(data => {
      //   console.log(data['token']);
      //   console.log(data['userType']);
 	 		// 	if(data['token'] && data['userType']){					
			// 		if(data['userType'] == "Admin"){
			// 			console.log('Logged in as ADMIN');			
			// 			localStorage.setItem('token', data['token']);
			// 			this.navCtrl.push(RoomPage);
			// 		} else if(data['userType'] == "User"){
			// 			console.log('Logged in as USER');				
			// 			localStorage.setItem('token', data['token']);
			// 			this.navCtrl.push(RoomPage);
			// 		}														
			// 	}
 	 		// })
    }


 	 	// if(localStorage.getItem('token')){
 	 	// 	let data: object;
 	 	// 	this.loginProvider.loginWithToken(data)
 	 	// 	.subscribe( data => { 	 			
 	 	// 		if(data['token'] && data['userType']){										
		// 			if(data['userType'] == "Admin"){
		// 				console.log('Logged in as ADMIN');			
		// 				// localStorage.setItem('token', data['token']);
		// 				this.navCtrl.push(RoomPage);
		// 			} else if(data['userType'] == "User"){
		// 				console.log('Logged in as USER');				
		// 				// localStorage.setItem('token', data['token']);
		// 				this.navCtrl.push(RoomPage);
		// 			}														
		// 		} else{					
		// 			localStorage.removeItem('token');
		// 			console.log('No session');
		// 			this.navCtrl.push(LoginPage);
		// 		}
 	 	// 	})
 	 	// } else{
    //   localStorage.removeItem('token');
    //   console.log('No session');
    //   this.navCtrl.push(LoginPage);
    // }
  }
}
