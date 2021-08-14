import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cust-button',
  templateUrl: './cust-button.component.html',
  styleUrls: ['./cust-button.component.css']
})
export class CustButtonComponent implements OnInit {
  @Input() btnName:string|undefined
  @Input() btnClass:string|undefined
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.btnClick.emit();
  }

}
