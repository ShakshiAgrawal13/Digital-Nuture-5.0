import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type GradeStatus = 'passed' | 'failed' | 'pending';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: GradeStatus;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course!: Course;
}