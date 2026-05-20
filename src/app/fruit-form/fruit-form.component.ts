import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-fruit-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './fruit-form.component.html'
})
export class FruitFormComponent {
  name: string = '';
  weight: number = 0;
  harvestDate: string = '';

 
  @Output() fruitAdded = new EventEmitter<void>();

  constructor(private fruitService: FruitService) {}

  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }
    const newFruit: Fruit = {
      id: Date.now(), 
      name: this.name,
      weight: this.weight,
      harvestDate: new Date(this.harvestDate)
    };

    this.fruitService.addFruit(newFruit);
    this.fruitAdded.emit(); 

    form.resetForm({
      name: '',
      weight: 0,
      harvestDate: ''
    });
    
  }
}