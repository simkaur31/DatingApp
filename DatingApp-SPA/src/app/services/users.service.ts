import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_Models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.apiUrl;
constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
  getUser(id): Observable<User> {
 return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

}
