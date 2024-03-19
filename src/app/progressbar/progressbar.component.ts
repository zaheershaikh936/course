import { Component, Input } from '@angular/core';
import { Course } from '../course-card/course-card.component';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [],
  templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent {
  @Input() course!: Course;
}
