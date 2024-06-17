import { Directive,ElementRef , HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private ele : ElementRef, private render : Renderer2) {
   this. ele = ele  
   this.render =render
   }
   ngOnInit(): void {
    //this.ele .nativeElement .style.backgroundColor = "#F0FFF0" 
     
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow'); // Change to the desired color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null); // Reset to the default background color
  }

  private changeBackgroundColor(color: string | null) {
    this.render.setStyle(this.ele.nativeElement, 'background-color', color);
  }

}
