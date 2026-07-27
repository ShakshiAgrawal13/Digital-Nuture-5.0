import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  availableCourses = 0;

  ngOnInit(): void {
    this.availableCourses = 5;

    console.log(
      'HomeComponent initialised — courses loaded'
    );
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}