import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  isLoading = true;

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'TypeScript Essentials',
      code: 'TS102',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Data Structures',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'Database Management System',
      code: 'DB104',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'WEB105',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  /*
   * trackBy improves performance because Angular reuses unchanged
   * course elements instead of rendering the complete list again.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  removeAllCourses(): void {
    this.courses = [];
  }

  restoreCourses(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Fundamentals',
        code: 'ANG101',
        credits: 4,
        gradeStatus: 'passed'
      },
      {
        id: 2,
        name: 'TypeScript Essentials',
        code: 'TS102',
        credits: 3,
        gradeStatus: 'pending'
      },
      {
        id: 3,
        name: 'Data Structures',
        code: 'CS103',
        credits: 4,
        gradeStatus: 'failed'
      }
    ];
  }
}