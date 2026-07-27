## Objective
The objective of this task is to understand and implement the different types of data binding available in Angular.

## Features Implemented
- String Interpolation
- Property Binding
- Event Binding
- Two-Way Data Binding using ngModel
- Student Course Portal Home Page
- Responsive UI using HTML and CSS

## Technologies Used
- Angular 20
- TypeScript
- HTML5
- CSS3
- Angular FormsModule
- Angular CLI

## Project Structure

```
Task1
│
├── src
│   ├── app
│   │   ├── components
│   │   ├── pages
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── index.html
│   ├── styles.css
│   └── main.ts
│
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```

## Data Binding Demonstrated
### 1. Interpolation

```html
{{ portalName }}
```

### 2. Property Binding
```html
[disabled]="!isPortalActive"
```

### 3. Event Binding
```html
(click)="onEnrollClick()"
```

### 4. Two-Way Data Binding
```html
[(ngModel)]="searchTerm"
```

## How to Run
Install dependencies
```bash
npm install
```

Start the development server
```bash
ng serve
```

Open your browser
```
http://localhost:4200
```

## Expected Output
- Student Course Portal Home Page
- Course statistics cards
- Enroll button
- Success message on button click
- Live search using two-way data binding

## Learning Outcomes
- Understand Angular Components
- Understand Interpolation
- Understand Property Binding
- Understand Event Binding
- Understand Two-Way Binding
- Learn FormsModule usage
- Build a simple Angular UI
