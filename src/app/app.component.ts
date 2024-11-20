import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TennisComponent } from './component/tennis/tennis.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TennisComponent, HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
