import { Component, OnInit } from '@angular/core';
import { EChartsOption, SeriesOption } from 'echarts';


@Component({
  selector: 'app-myhighcharts',
  templateUrl: './myhighcharts.component.html',
  styleUrls: ['./myhighcharts.component.css']
})
export class MyhighchartsComponent implements OnInit {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
      }
  }]
  };
  dynamicData!: EChartsOption;
changeData(){
  this.dynamicData=this.chartOption;
  let data:SeriesOption = {
    data : [120, 434, 222, 232, 12, 333, 130],
    type: 'bar',
      showBackground: true,
      backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
      }
  };
  this.dynamicData.series = [];
  this.dynamicData.series.push(data);
  console.log(this.dynamicData);
}
  constructor() { }

  ngOnInit(): void {
  }

}
