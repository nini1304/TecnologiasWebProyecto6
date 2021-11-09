import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-seccion4',
  templateUrl: './seccion4.component.html',
  styleUrls: ['./seccion4.component.css']
})
export class Seccion4Component implements OnInit {
  title = 'dinamic-styles';
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/estilocontactos.css';
   }

  ngOnInit(): void {
  }

}
