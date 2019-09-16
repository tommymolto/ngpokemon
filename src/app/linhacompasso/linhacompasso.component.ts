import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rowcompasso',
  templateUrl: './linhacompasso.component.html',
  styleUrls: ['./linhacompasso.component.css']
})
export class LinhacompassoComponent implements OnInit {

  @Input() name?: string;
  @Input() url?: string;
  constructor() { }

  ngOnInit() {
  }

}
