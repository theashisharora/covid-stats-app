import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-canada-summary',
  templateUrl: './canada-summary.component.html',
  styleUrls: ['./canada-summary.component.scss'],
  standalone: false
})
export class CanadaSummaryComponent implements OnInit {
  summary: any = {}; // <-- Add this property

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCanadaSummary().subscribe(data => {
      this.summary = data;
    });
  }
}
