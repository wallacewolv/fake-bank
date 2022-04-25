import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/Models/options.model';
import Typed from 'typed.js';


@Component({
  selector: 'fake-bank-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})

export class ContentComponent implements OnInit {

  options: Options = new Options();
  typed: any;

  constructor() { }

  ngOnInit(): void {
    this.setOptions();
    this.setTiped();
  }

  setOptions() {
    this.options = {
      stringsElement: '#typed-strings',
      strings: [
        'Fake Banking com juros amigo',
        'Peça a portabilidade e venha ser Fake Bankinhg',
        'Inovador',
        'Digital',
        'Seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };
  }

  setTiped() {
    this.typed = new Typed('.typing-element', this.options);
  }
}
