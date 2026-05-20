import { Fruit } from './fruit';
export interface FruitOperations {
  getFruits(): Fruit[];
  addFruit(fruit: Fruit): void;
  deleteFruit(id: number): void;
}
