import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'fake-bank-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const options = {
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

    const typed = new Typed('.typing-element', options);
  }

}
