import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'uix-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() public inputHero!: Hero

  constructor() { }

  ngOnInit(): void {

    if (!this.inputHero) throw Error('Hero property is required');
  }

}
