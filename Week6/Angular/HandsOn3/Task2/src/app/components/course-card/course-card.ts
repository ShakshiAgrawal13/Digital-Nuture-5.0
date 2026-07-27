import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type GradeStatus = 'passed' | 'failed' | 'pending';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: GradeStatus;
  enrolled: boolean;
  instructor: string;
  duration: string;
  description: string;
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

  isExpanded = false;

  /*
   * The getter keeps the HTML template clean by moving
   * conditional class logic into the component class.
   */
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColour(): string {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'grey';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}