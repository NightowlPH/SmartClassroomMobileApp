import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginPage } from '../../pages/login/login';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  apiUrl:string= "https://rfid.test.nightowl.foundationu.com/api";

  constructor(
    public http: HttpClient,
  ) {
    console.log('Hello LoginProvider Provider');
  }

  login(data:object){
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  loginWithToken(data) {
		return this.http.post(`${this.apiUrl}/login`, data,{
			headers: this.Headers()
		});
  }

  logout() {		
		let data = {username: localStorage.getItem('username')}
		console.log(data);
		return this.http.post(`${this.apiUrl}/logout`, data,{
			headers: this.Headers()
		}).subscribe( () =>{
			localStorage.clear()
		})
	}

  private Headers() {
		if(localStorage.getItem('token')!=null){
			return new HttpHeaders().set('x-access-token', localStorage.getItem('token'));
		} else {
			console.log("token is missing");
			// this.router.navigate(['/login']);
		}
	}	
}
