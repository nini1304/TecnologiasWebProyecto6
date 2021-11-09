import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.css']
})
export class Seccion3Component implements OnInit {

  title = 'dinamic-styles';
  cssUrl: string;

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/estilopedidos.css';
   }

  

  ngOnInit(): void {
  }

}
