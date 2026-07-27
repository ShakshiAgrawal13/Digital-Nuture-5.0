import { Component } from '@angular/core';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  selectedCourseId: number | null = null;

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'TypeScript Essentials',
      code: 'TS102',
      credits: 3
    },
    {
      id: 3,
      name: 'Data Structures',
      code: 'CS103',
      credits: 4
    },
    {
      id: 4,
      name: 'Database Management System',
      code: 'DB104',
      credits: 3
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'WEB105',
      credits: 4
    }
  ];

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);

    this.selectedCourseId = courseId;
  }
}