import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import {AuthenticationProvider} from '../../providers/authentication/authentication';
import {RoomPage} from '../room/room';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	message:string;
	userAccount:Object;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public authenticationProvider: AuthenticationProvider
	) {
	}

	ionViewDidLoad() {
			console.log("This is the login page");
			console.log("did load");
			// console.log(localStorage.getItem('token'));
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
			// 		} 
			// 		else{					
			// 			localStorage.removeItem('token');
			// 			console.log('No session');
			// 			this.navCtrl.push(LoginPage);
			// 		}
			// 	})
			// } 
	}

	login(loginData:ILogin){
		if(loginData.username == "" || loginData.password == ""){ //if inputs have no values
			this.message = "Please fill up required inputs";
		} else{ //if inputs have values
			this.userAccount = { 
				username: loginData.username, 
				password: loginData.password 
			};
			this.authenticationProvider.login(this.userAccount)
			.subscribe(data => {
				console.log(data);
				console.log(data['token'], data['userType']);					
				if(data['token'] && data['userType']){
					if(data['userType'] == "Admin"){
						console.log("You are logged in as Admin");				
						localStorage.setItem('token', data['token']);
						this.navCtrl.push(RoomPage);
					}	else if(data['userType'] == "User") {
						console.log("You are logged in as User");			
						localStorage.setItem('token', data['token']);
						this.navCtrl.push(RoomPage);
					}					
				} else {					
					this.message = "Invalid username or password";
				}
			}, (error: HttpErrorResponse) => {
				if(error.error && error.status == 401) {
					this.message = "Invalid username or password";
				} else if( error.status == 500) {
					console.log("Internal server error");
				}
			})
		}
	}

}

export interface ILogin{
  username: string;
  password: string;
}