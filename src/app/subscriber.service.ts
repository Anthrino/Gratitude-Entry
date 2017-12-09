import {Injectable} from '@angular/core';
import {Headers, Http, Jsonp, RequestMethod, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubscriberService {
  // private _mailchimp_server = 'https://us17.api.mailchimp.com/3.0/lists/92cd0e202e/members';

  private _mailchimp_server = 'https://gratefulness.us17.list-manage.com/subscribe/post?u=ec41210bb61c112c09d9abb29&id=92cd0e202e';
  result: string;
  constructor(private _jsonp: Jsonp) {
  }

  addUser(email: string): void {
    // const header = new Headers();
    // header.append('Content-Type', 'application/json');
    // header.append('Authorization', 'Basic' + 'a:d43f3c58facdd7c134ad5fcbf8034b30-us17');
    // const options: RequestOptionsArgs = {
    //   method: RequestMethod.Post,
    //   headers: header,
    // };
    //
    // alert(this._http.post(this._mailchimp_server, JSON.stringify(
    //   {
    //     'email_address': 'jerinjohn101@gmail.com',
    //     'status': 'subscribed',
    //     'merge_fields': {}
    //   }), JSON.stringify(options))
    //   .map(response => response.text() as string).catch(this.handleError).subscribe());

    this._jsonp.request(this._mailchimp_server + '&subscribe=Subscribe&EMAIL=' + email + '&c=JSONP_CALLBACK', {method: 'Get'})
      .subscribe((res) => {
        this.result = res.json()
      });
    alert(this.result);
  }

  private handleError(error: any) {
    console.error('Error occurred', error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
