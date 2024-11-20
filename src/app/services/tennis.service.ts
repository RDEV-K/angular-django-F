import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TennisService {
  private apiUrl = 'http://localhost:8000/members';
  constructor(private http:HttpClient) { }

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}
