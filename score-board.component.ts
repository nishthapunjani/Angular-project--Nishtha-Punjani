import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent {
  overs: number = 5;
  ballsLeft: number = 30;
  wickets: number = 10;
  target: number | null = null;
  need: number = 0;
  currentRun: number = 0;

  onTargetChange() {
    if (this.target !== null) {
      this.need = this.target;
    }
  }

  processRun(run: number) {
  if (this.target === null || this.target <= 0) {
    alert("Please set the target first!");
    return;
  }

  this.ballsLeft--;
  this.currentRun += run;
  this.need -= run;

  // Over Logic (Reduce over every 6 balls)
  if (this.ballsLeft % 6 === 0) { this.overs--; }

  // Wicket Logic (As per your requirement: Current Run / 3 = -1 Wicket)
  if (this.currentRun > 0 && this.currentRun % 3 === 0) {
    this.wickets--;
  }

  this.checkStatus();
}

  checkStatus() {
    if (this.need <= 0 && this.ballsLeft >= 0 && this.wickets > 0) {
      alert("Match Won");
      this.resetAll();
    } else if (this.need > 0 && (this.ballsLeft === 0 || this.wickets === 0)) {
      alert("Match Lost");
      this.resetAll();
    }
  }

  resetAll() {
    this.overs = 0; this.ballsLeft = 0; this.wickets = 0;
    this.target = 0; this.need = 0; this.currentRun = 0;
  }
}