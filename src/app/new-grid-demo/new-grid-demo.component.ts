import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/Service/carservice';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}
@Component({
  selector: 'app-new-grid-demo',
  templateUrl: './new-grid-demo.component.html',
  styleUrls: ['./new-grid-demo.component.css']
})
export class NewGridDemoComponent implements OnInit {

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;
  cars1: Car[];

    cars2: Car[];

    brands: SelectItem[];

    clonedCars: { [s: string]: Car; } = {};
  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {

   
        this.carService.getCarsSmall().then(cars => this.cars2 = cars);
        console.log(this.cars2)

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

  onRowEditInit(car: Car) {
    this.clonedCars[car.vin] = {...car};
}

onRowEditSave(car: Car) {
    if (car.year > 0) {
        delete this.clonedCars[car.vin];
        this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
    }
    else {
        this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
}

onRowEditCancel(car: Car, index: number) {
    this.cars2[index] = this.clonedCars[car.vin];
    delete this.clonedCars[car.vin];
}

save() {
 debugger;
  if(this.car!=null)
  this.cars2.push(this.car);
  //this.cars2 = cars;
  this.car = {};
  
}

}
