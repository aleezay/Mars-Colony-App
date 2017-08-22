import { Injectable } from '@angular/core';
import { Report, NewReport } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncountersService {
    encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    

constructor(private http: Http){}

getReports(): Promise<Report[]>{
   
      return this.http.get(this.encountersUrl)
               .toPromise()
               .then((response) => response.json().aliens)
               .catch(this.handleError);
     
    }

postEncounters(encounters, NewReport): Promise<Report[]>{
     const headers = new Headers({'Content-Type': 'application/json'});
     const body = JSON.stringify({ NewReport });

     return this.http
      .post(this.encountersUrl, body, {headers: headers})
               .toPromise()
               .then((response) => response.json().colonist)
               .catch(this.handleError)
}

     private handleError(error){
      console.log(error);
          return Promise.reject(error.message || error);
     }
}


