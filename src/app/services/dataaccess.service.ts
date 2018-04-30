import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataAccess {
    
    constructor(private _http: Http) { }

    getRooms(tokenString: any, roomTypeSelection: any): any {
        let requestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.append('Authorization', 'Bearer ' + tokenString);

        let q = '';
        if (roomTypeSelection === 'direct') {
            q = '&type=direct';
        }
        if (roomTypeSelection === 'group') {
            q = '&type=group';
        }

        return this._http.get('https://api.ciscospark.com/v1/rooms?max=5000' + q, requestOptions).map(res => res.json());
    }

    sendMessage(tokenString: any, roomId: any, messageText: any): void {
        let requestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.append('Authorization', 'Bearer ' + tokenString);
        let body = { "roomId": roomId, "text": messageText };

        console.log('send message ' + roomId + ' ' + messageText);

        this._http.post('https://api.ciscospark.com/v1/messages', body, requestOptions).subscribe(
            r => {
                console.log(r);
            },
            e => console.log(e));
    }

    getRoomLatestMessage(tokenString: any, roomId: any): any {
        let requestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.append('Authorization', 'Bearer ' + tokenString);

        return this._http.get('https://api.ciscospark.com/v1/messages?max=1&roomId=' + roomId, requestOptions).map(res => res.json());
    }
}