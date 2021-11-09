import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.css']
})
export class Seccion2Component implements OnInit {
  title = 'dinamic-styles';
  cssUrl: string;

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/estilocelulares.css';

   }

  ngOnInit(): void {
  }

}
