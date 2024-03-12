import { Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
      this.createChart();
    }
    createChart(){

      this.chart = new Chart("pie-chart", {
        type: 'pie', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['Item1', 'Item2','Item3','Item4','Item5','Item6', ],
           datasets: [{
      label: 'My First Dataset',
      data: [300, 240, 100, 432, 253, 34],
      backgroundColor: [
        '#d946ef',
        '#c026d3',
        '#a21caf',
        '#86198f',
        '#701a75',
        '#4a044e',			
      ],
      hoverOffset: 4
    }],
        },
        options: {
          aspectRatio:1.5
        }
  
      });
    }
  

  }
