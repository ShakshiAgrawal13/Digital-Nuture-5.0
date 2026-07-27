import { Component } from '@angular/core';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true,
      instructor: 'Dr. Sharma',
      duration: '12 Weeks',
      description:
        'Learn Angular components, templates, routing and data binding.'
    },
    {
      id: 2,
      name: 'TypeScript Essentials',
      code: 'TS102',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false,
      instructor: 'Prof. Verma',
      duration: '8 Weeks',
      description:
        'Understand TypeScript types, interfaces, classes and functions.'
    },
    {
      id: 3,
      name: 'Data Structures',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: true,
      instructor: 'Dr. Mehta',
      duration: '14 Weeks',
      description:
        'Study arrays, linked lists, stacks, queues, trees and graphs.'
    },
    {
      id: 4,
      name: 'Database Management',
      code: 'DB104',
      credits: 3,
      gradeStatus: 'passed',
      enrolled: false,
      instructor: 'Prof. Gupta',
      duration: '10 Weeks',
      description:
        'Learn relational databases, SQL queries and normalization.'
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'WEB105',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: true,
      instructor: 'Ms. Singh',
      duration: '12 Weeks',
      description:
        'Build responsive websites using HTML, CSS and JavaScript.'
    }
  ];
}