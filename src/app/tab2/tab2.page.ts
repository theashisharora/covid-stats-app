import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page implements OnInit {
  records: any[] = [];
  followUpMessage: string = ''; // <-- Add this line

  constructor(
    private messageService: MessageService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/ontario-data.json').subscribe(data => {
      this.records = data;
    });
  }

  goToDetail(item: any) {
    // Send the message when an item is selected
    this.messageService.changeMessage(`Selected: ${item.age_group}`);
    this.router.navigate(['/tabs/detail'], {
      state: { record: item }
    });
  }

  sendFollowUp() {
    this.followUpMessage = '2020-12-30 Follow Up'; // Example usage
    this.messageService.changeMessage(this.followUpMessage);
  }
}
