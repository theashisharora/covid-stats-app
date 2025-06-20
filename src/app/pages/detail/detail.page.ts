import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {
  selected: any;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // Receive record
    const nav = this.router.getCurrentNavigation();
    this.selected = nav?.extras?.state?.['record'];

    // Subscribe to shared message
    this.messageService.currentMessage.subscribe(msg => {
      this.message = msg;
    });
  }
}
