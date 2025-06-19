import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url=environment.apiUrl+'/auth'
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.put(`${this.url}/login`,data)
  }
}
