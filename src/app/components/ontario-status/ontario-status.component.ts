import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ontario-status',
  templateUrl: './ontario-status.component.html',
  styleUrls: ['./ontario-status.component.scss'],
  standalone: false
})
export class OntarioStatusComponent implements OnInit {

  totalCases = 0;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/ontario-data.json').subscribe(data => {
      this.totalCases = data.reduce((sum, item) => sum + Number(item.cases || 0), 0);
    });
  }

}
