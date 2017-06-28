import { Injectable }              from '@angular/core';
import { Http, Response, URLSearchParams, Jsonp }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
 
@Injectable()
export class GetCityService {
  private heroesUrl = 'http://autocompletecity.geobytes.com/AutoCompleteCity?&sort=size';  // URL 
    
  constructor (private http: Http, private jsonp: Jsonp) {}

  getCities(prefix: string): Observable<string[]> {
    let params = new URLSearchParams();
    params.set('q', prefix); // the user's search value
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(this.heroesUrl, { search: params })
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json()  || [];
  }
 /* Error */
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}