import { Component } from '@angular/core';
// 1. Make sure you are importing the ScoreBoardComponent class
import { ScoreBoardComponent } from './score-board/score-board.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add ScoreBoardComponent to this imports list
  imports: [ScoreBoardComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}