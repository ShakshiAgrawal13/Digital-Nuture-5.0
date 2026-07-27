import { Component, Input } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number | null;
  instructor: string;
  description: string;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() course!: Course;
}