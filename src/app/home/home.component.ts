import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card.component';
import { BASEURL } from '../env';
import { ProfileComponent } from '../profile/profile.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HttpClientModule , CourseCardComponent, CommonModule, ProfileComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  searchFilter: string = '';
  courses: any = [];
  filter: string = '';
  selectedValue: string = '';

  onDropdownChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    this.searchCourses();
  }
  ngOnInit(): void { 
    this.fetchCourse();
  }
  searchCourses() {
    this.httpClient.get(`${BASEURL}/course?search=${this.searchFilter}&sortBy=${this.selectedValue}&sort=-1`).subscribe((data:any) => { this.courses = data })
  }
  fetchCourse(){
    this.httpClient.get(`${BASEURL}/course`).subscribe((data:any) => { this.courses = data })
  }
}




