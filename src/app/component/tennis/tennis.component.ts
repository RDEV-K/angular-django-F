import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TennisService } from '../../services/tennis.service';

@Component({
  selector: 'app-tennis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tennis.component.html',
  styleUrl: './tennis.component.css'
})
export class TennisComponent implements OnInit {
  members = [];
  newMemeber = {};

  constructor(private tennisService: TennisService) {}
  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.tennisService.getMembers().subscribe((data: any) => {
      this.members = data;
    })
  }
}
