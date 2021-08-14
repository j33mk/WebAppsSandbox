import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zakat-calculator',
  templateUrl: './zakat-calculator.component.html',
  styleUrls: ['./zakat-calculator.component.css']
})
export class ZakatCalculatorComponent implements OnInit {
  val:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  onCalculate(){
    alert(this.val);
    
  }

}
