import { Component,ViewChild,ElementRef , Renderer2, AfterViewInit} from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULARDEMO1';
  @ViewChild('divElements')
  public divElements: ElementRef;

  @ViewChild('food') food: ElementRef;
  @ViewChild('car') car: ElementRef;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    
   
  }

  // ngAfterViewInit() {
  //   debugger;
  //   const element=this.food.nativeElement.parentNode;
  //   const parent = this.renderer.parentNode(this.food.nativeElement.parentNode);
  //   let sibling = parent.querySelector('.mat-form-field-outline')
  //  // const nextEl = this.renderer.nextSibling(parent);
  //    //this.renderer.addClass(nextEl, 'red');
	//   this.renderer.setStyle(sibling, 'color', 'yellow');
  //  // this.renderer.setStyle(this.test.nativeElement, 'color', 'red');



  //  const element1=this.car.nativeElement.parentNode;
  //  const parent1 = this.renderer.parentNode(this.car.nativeElement.parentNode);
  //  let sibling1 = parent1.querySelector('.mat-form-field-outline')
  // // const nextEl = this.renderer.nextSibling(parent);
  //   //this.renderer.addClass(nextEl, 'red');
  //  this.renderer.setStyle(sibling1, 'color', 'red');
  // }
}
