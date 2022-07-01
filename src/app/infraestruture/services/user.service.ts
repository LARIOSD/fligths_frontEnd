import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/domain/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:4002/api/v1';
  constructor(private http: HttpClient) {}

  readUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url + '/user');
  }
}
