import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

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
export class CourseCard implements OnChanges {
  @Input() course!: Course;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'Course input changed:',
        {
          previousValue: changes['course'].previousValue,
          currentValue: changes['course'].currentValue
        }
      );
    }
  }
}