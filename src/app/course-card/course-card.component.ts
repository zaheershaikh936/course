import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { BASEURL } from '../env';

export interface Course {
  _id?: string;
  image: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  price: number;
  category?: string;
  progress?: number;
  progressTopic?: string;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent {
  httpClient = inject(HttpClient);
  @Input() course!: Course;
  enrollCourse(course: Course) {
    this.httpClient.post(`${BASEURL}/enroll`, 
      {
        courseId: course._id,
        progressTopic: "Getting Started",
        progress: 0
      }
    ).subscribe()
    alert("Successfully enrolled!")
  }
}