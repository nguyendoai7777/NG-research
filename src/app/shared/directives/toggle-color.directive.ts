import { Directive, ElementRef, HostListener, Input } from '@angular/core';
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;


@Directive({
  selector: '[toggle-color]'
})
export class ToggleColorDirective {
  @Input() color!: `${string | RGB | RGBA | HEX}:${string | RGB | RGBA | HEX}`;
  state = true;
  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    console.log(this.color)
    // el.nativeElement.style.color = this.color.split(':')[0];
  }
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.state = !this.state;
    const [color1, color2] = this.color.split(':');
    const el = this.el.nativeElement;
    if(this.state) {
      el.style.color = color1;
    } else {
      el.style.color = color2;
    }
  }

}
