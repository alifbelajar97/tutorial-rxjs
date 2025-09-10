import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take, map, combineAll } from 'rxjs/operators';

// emit every 1s, take 2
const source$ = interval(1000).pipe(take(2));
// map each emitted value from source to interval observable that takes 5 values
const example$ = source$.pipe(
  map(val => interval(1000).pipe(
    map(i => `Result (${val}): ${i}`),
    take(5)
  ))
);

// interval: ini adalah mesin penghitung yang berdasarkan milidetik interval(1000) artinya 1000 milidetik atau 1 detik.
// dia akan melakukan emit nilai 0 sampai seterusnya dan sampai diberhentikan.

// take(2): itu artinya hanya mengambil 2 nilai pertama.
@Component({
  selector: 'app-combine-all',
  imports: [],
  templateUrl: './combine-all.component.html',
  styleUrl: './combine-all.component.css'
})
export class CombineAllComponent {
  ngOnInit(): void {
    example$.pipe(combineAll()).subscribe(console.log);
  }
}
