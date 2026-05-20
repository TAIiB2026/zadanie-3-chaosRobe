import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { FruitFormComponent } from '../fruit-form/fruit-form.component';

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [CommonModule,FruitFormComponent],
  templateUrl: './fruit-list.component.html',
})
export class FruitListComponent implements OnInit {

  fruits: Fruit[] = [];
  showForm: boolean = false;
 
  constructor(private fruitService: FruitService) {}

 
  ngOnInit(): void {
    this.loadFruits();
  }

 
  loadFruits(): void {
    this.fruits = this.fruitService.getFruits();
  }

  
  deleteFruit(id: number): void {
    this.fruitService.deleteFruit(id); 
    this.loadFruits();                
  }
  onFruitAdded(): void {
    this.loadFruits();      
    this.showForm = false;   
  }
}
