import { Injectable } from '@angular/core'; //add this when using a class inside an angular component
import { Report, NewReport } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {
    reportUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    

constructor(private http: Http){}

getEncounters(): Promise<Report[]>{
   
      return this.http.get(this.reportUrl)
               .toPromise()
               .then((response) => response.json().encounters)
               .catch(this.handleError);
    }

postEncounters(encounter: NewReport): Promise<Report[]>{
     const headers = new Headers({'Content-Type': 'application/json'});
     const body = JSON.stringify({ encounter });

     return this.http
      .post(this.reportUrl, body, {headers: headers})
               .toPromise()
               .then((response) => response.json().encounter)
               .catch(this.handleError)
}

     private handleError(error){
      console.log(error);
          return Promise.reject(error.message || error);
     }
}


