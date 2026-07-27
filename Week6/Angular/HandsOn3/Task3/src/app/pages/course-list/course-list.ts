import { Component } from '@angular/core';
import {
  Course,
  CourseCard
} from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseCard,
    Highlight
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'ANG101',
      credits: 1,
      instructor: 'Dr. Sharma',
      description:
        'Learn Angular components, templates, data binding and directives.'
    },
    {
      id: 2,
      name: 'TypeScript Essentials',
      code: 'TS102',
      credits: 3,
      instructor: 'Prof. Verma',
      description:
        'Understand TypeScript types, interfaces, classes and functions.'
    },
    {
      id: 3,
      name: 'Web Development',
      code: 'WEB103',
      credits: null,
      instructor: 'Ms. Singh',
      description:
        'Learn HTML, CSS and JavaScript for modern web applications.'
    },
    {
      id: 4,
      name: 'Database Management',
      code: 'DB104',
      credits: 0,
      instructor: 'Prof. Gupta',
      description:
        'Study database concepts, SQL queries and normalization.'
    }
  ];
}