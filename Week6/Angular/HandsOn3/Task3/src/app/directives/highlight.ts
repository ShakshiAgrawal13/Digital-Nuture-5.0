import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {
  @Input() appHighlight = 'yellow';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBackgroundColor(this.appHighlight);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color: string): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      color
    );
  }
}