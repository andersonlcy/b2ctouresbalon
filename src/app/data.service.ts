import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http ) { }

  /*fetchData(){
    return this.http.get('https://ng-angular-68038.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }*/

   createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('973aaca7-cca5-45c9-8cec-939951f2ac52:446bd234-5ec9-471a-aaad-661958c79ef5')); 
  }

  getTuristic_plans() {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get('https://touresbalon.restlet.net/v1/touristic_plans/', {
      headers: headers
    }).map(res => res.json());
  }

<<<<<<< HEAD
=======
  
getCompany(companyId:string) {
    var headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(`https://angular2.apispark.net/v1/companies/${companyId}`, {
      headers: headers
    }).map(res => res.json());
  }  


>>>>>>> d7128355ea9f7c0beed5be035fb3e598188ef8d5
}
