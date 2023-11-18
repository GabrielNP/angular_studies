import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DetailComponent } from './details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos = [
    {
      id: 0,
      title: "00000",
    },
    {
      id: 0,
      title: "11111",
    },
    {
      id: 1,
      title: "222222",
    }
  ];

  time = signal(new Date());
  month = computed(() => {
    return this.time().getMonth()+1;
  });
  minute = computed(() => this.time().getMinutes());

  constructor() {
    effect(() => {
      console.log("Date changed ", this.time());
    });
    effect(() => {
      console.log("Minute changed ", this.minute());
    });

    setInterval(()=> {
      this.time.set(new Date());
    }, 10000)
  };

}
