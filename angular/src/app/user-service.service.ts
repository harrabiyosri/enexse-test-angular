import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/agents`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/agent`, user);
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/agents/${id}`);
  }

  updateUser(id: string, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, user);
  }

  deleteEmploye(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
