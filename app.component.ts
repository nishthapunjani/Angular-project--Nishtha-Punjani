import { Component } from '@angular/core';
import { ScoreBoardComponent } from './score-board/score-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScoreBoardComponent],
  templateUrl: './app.component.html', // Make sure this says app.component.html
  styleUrl: './app.component.css'
})
export class AppComponent {}