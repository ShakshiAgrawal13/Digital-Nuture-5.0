import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [
    CourseCard,
    RouterLink
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'CS101',
      credits: 4
    },
    {
      id: 2,
      name: 'Data Structures',
      code: 'CS102',
      credits: 4
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'CS103',
      credits: 3
    }
  ];
}