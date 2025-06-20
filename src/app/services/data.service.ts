import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getOntarioData(): Observable<any[]> {
    return this.http.get<any[]>('/assets/ontario-data.json');
  }

  getCanadaSummary(): Observable<any> {
    return this.http.get('assets/canada-summary.json');
  }
}
