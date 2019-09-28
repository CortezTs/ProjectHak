import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    httpOptions:any
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.httpOptions = new HttpHeaders({
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods" : "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token",
        });
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let options = { headers: this.httpOptions };
        return this.http.post<any>('http://xcoders.gq/login/', { username, password },options)
            .pipe(map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    registration(name: string, email: string, password: string, password_confirmation: string, surname: string) {
        let options = { headers: this.httpOptions };
      return this.http.post<any>(`http://xcoders.gq/reginstration/`, { name, email, password, surname, password_confirmation },options)
          .map((res: Response) => {
            if (res) {
                if (res.status === 201) {
                    return [{ status: res.status, json: res }]
                }
                else if (res.status === 200) {
                    return [{ status: res.status, json: res }]
                }
            }
        }).catch((error: any) => {
            if (error.status < 400 ||  error.status ===500) {
                return Observable.throw(new Error(error.status));
            }
        })
        .subscribe(err => {console.log(err)});
  }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
