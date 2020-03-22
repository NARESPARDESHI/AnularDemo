import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { Car } from '../models/car';
import { CarService } from 'src/app/Service/carservice';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-expand-grid-demo',
  templateUrl: './expand-grid-demo.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class ExpandGridDemoComponent implements OnInit {

  ///cars: Car[];
  brands: SelectItem[];
  car: Car = {};

  public cars:any[];
  public cols: any[];
  public isExpanded:boolean = false;
  public rows:number =10;
  public expandedRows = {};
  public temDataLength:number = 0;

    //cols: any[];
    clonedCars: { [s: string]: Car; } = {};
  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
    //this.cars.length < this.rows ? this.temDataLength = this.cars.length : this.temDataLength = this.rows;
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.brands = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

  onRowEditSave(car: Car) {
      debugger;
    if (car.year > 0) {
        delete this.clonedCars[car.vin];
        this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
       // this.carService.getCarsSmall().then(cars => this.cars = cars);
       this.isExpanded = false;
       this.expandedRows={};
       // this.onRowCollapse();
    }
    else {
        this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
}

expandAll() {
    
    if(!this.isExpanded){
      this.cars.forEach(data =>{
        this.expandedRows[data.vin] = 1;
      })
    } else {
      this.expandedRows={};
    }
    this.isExpanded = !this.isExpanded;
    console.log(this.expandedRows);
  }

onRowExpand() {
    console.log("row expanded", Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === this.temDataLength){
      this.isExpanded = true;
    }
    console.log(this.expandedRows);
  }
  onRowCollapse() {
      debugger;
    console.log("row collapsed",Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === 0){
      this.isExpanded = false;
    }
  }
  onPage(event: any) {
    this.temDataLength = this.cars.slice(event.first, event.first + 10).length;
    console.log(this.temDataLength);
    this.isExpanded = false;
    this.expandedRows={};
  }

  save() {
    debugger;
     if(this.car!=null)
     this.cars.push(this.car);
     //this.cars2 = cars;
     this.car = {};
     
   }

}
