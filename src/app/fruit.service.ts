import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { FruitOperations } from './fruit-operations';
import { FruitTrackingService } from './fruit-tracking.service';
@Injectable({
  providedIn: 'root'
})
export class FruitService implements FruitOperations {

 
  private fruits: Fruit[] = [
    { id: 1, name: 'Jabłko', weight: 150, harvestDate: new Date('2026-05-10') },
    { id: 2, name: 'Banan', weight: 120, harvestDate: new Date('2026-05-12') },
    { id: 3, name: 'Gruszka', weight: 180, harvestDate: new Date('2026-05-15') },
    { id: 4, name: 'Truskawka', weight: 15, harvestDate: new Date('2026-05-18') },
    { id: 5, name: 'Arbuz', weight: 3500, harvestDate: new Date('2026-05-20') }
  ];
  constructor(private FruitTrackingService: FruitTrackingService) {}

  getFruits(): Fruit[] {
    this.FruitTrackingService.updateLastFetchDate();
    return this.fruits;
  }

 
  addFruit(fruit: Fruit): void {
    this.fruits.push(fruit);
  }


  deleteFruit(id: number): void {
    this.fruits = this.fruits.filter(f => f.id !== id);
    this.FruitTrackingService.updateLastDeleteDate();
  }
}
