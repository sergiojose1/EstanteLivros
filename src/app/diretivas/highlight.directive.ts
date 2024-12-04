import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  private originalColor: string | null = '';
  @Input('appHighlight') highlightColor: string = 'yellow';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Evento: Quando o mouse entra no elemento
  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.color; // Salva a cor original
    this.renderer.setStyle(this.el.nativeElement, 'color', this.highlightColor); // Define a cor de destaque
  }

  // Evento: Quando o mouse sai do elemento
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor); // Restaura a cor original
  }
}
