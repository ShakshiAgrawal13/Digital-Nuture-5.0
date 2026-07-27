import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  requestEnrollment(): void {
    this.enrollRequested.emit(this.course.id);
  }
}