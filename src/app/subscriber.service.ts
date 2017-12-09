import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubscriberService {
  private _mailchimp_server = 'https://gratefulness.us17.list-manage.com/subscribe/post?u=ec41210bb61c112c09d9abb29&amp;id=92cd0e202e';
  public email: string;

  constructor(private _http: Http) {
  }


  addUser(email: string): Observable<string> {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const options: RequestOptionsArgs = {
      method: RequestMethod.Post,
      headers: header
    };
    return this._http.post(this._mailchimp_server, JSON.stringify({
      'email_address': email,
      'status': 'subscribed',
    }), JSON.stringify(options))
      .map(response => response.text() as string).catch(this.handleError);

  }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
