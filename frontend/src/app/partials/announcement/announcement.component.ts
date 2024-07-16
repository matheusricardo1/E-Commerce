import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../../models/annoucement.model';
import { UnitsService } from '../../services/units.service';
import { Countdown } from '../../models/countdown.model';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css'
})
export class AnnouncementComponent implements OnInit {
  countdown!: Countdown;
  
  @Input() productAnnouncement: Announcement = {
    id: 1,
    image: "assets/images/announcement/ad1.png",
    text: "Enhance Your Music Experience",
    date: new Date('2024-07-30'),
    product_id: 1,
  }

  constructor(private unitsService: UnitsService) {}

  ngOnInit() {
    this.unitsService.startCountdown(this.productAnnouncement.date);
    this.unitsService.countdown$.subscribe(countdown => {
      this.countdown = countdown;
    });
  }

}
