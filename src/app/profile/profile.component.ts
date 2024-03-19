import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../course-card/course-card.component';
import { BASEURL } from '../env';
import { ProgressbarComponent } from '../progressbar/progressbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProgressbarComponent, CommonModule, HttpClientModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit  {
  httpClient = inject(HttpClient);
  courses: Course[] = [];

  ngOnInit(): void {
    this.fetchEnroll();
  }
  
  fetchEnroll(){
    this.httpClient.get(`${BASEURL}/enroll`).subscribe((data: any) => { this.courses = data; console.log(data); })
  }
}
