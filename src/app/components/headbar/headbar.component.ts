import { Component } from '@angular/core';
import {ClarityModule, ClrDropdownModule, ClrIconModule} from "@clr/angular";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDropdownModule,
    ClarityModule,
  ],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.scss'
})
export class HeadbarComponent {

  constructor() {

  }

}
