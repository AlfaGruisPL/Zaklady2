import { Component, OnInit } from '@angular/core';
import { ListonoszService } from '../../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../../enum/drzwi';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-wykres-stanu-konta',
  templateUrl: './wykres-stanu-konta.component.html',
  styleUrls: ['./wykres-stanu-konta.component.scss'],
})
export class WykresStanuKontaComponent implements OnInit {
  public chart: any;
  public labels: Array<Date | string> = [];
  public datasets: Array<number> = [];
  public data = {
    // values on X-Axis
    labels: this.labels,
    datasets: [
      {
        label: 'Stan konta',
        data: this.datasets,
        backgroundColor: 'rgba(48,113,255,0.6)',

        borderColor: 'blue',
        pointStyle: 'circle',
        pointRadius: 4,
        pointHoverRadius: 7,
        tension: 0.1,
        fill: {
          target: 'origin',
          above: 'rgba(0,30,231,0.55)', // Area will be red above the origin
        },
        trendlineLinear: {
          style: 'rgb(255,0,19)',
          lineStyle: 'solid',
          width: 4,
        },
      },
    ],
  };

  constructor(private listonosz: ListonoszService) {}

  public test = (value: any, index: any, ticks: any) => {
    if (this.labels[index] == 'Dziś') return this.labels[index];
    const k = new Date(this.labels[index]);
    const dzien = k.getDate() >= 10 ? k.getDate() : '0' + k.getDate();
    const miesiac = k.getMonth() + 1 >= 10 ? k.getMonth() + 1 : '0' + (k.getMonth() + 1);
    const data = k.getFullYear() + '-' + miesiac + '-' + dzien;
    return data;
  };
  // @ts-ignore
  public config = {
    type: 'line',
    data: this.data,
    options: {
      scale: 0.4,
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        x: {
          ticks: {
            callback: this.test,
          },
        },
      },

      plugins: {
        tooltip: {
          callbacks: {},
          caretSize: 8,
          footerFont: {
            size: 15,
          },
          bodyFont: {
            size: 15,
          },
          titleFont: {
            size: 15,
          },
        },

        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Stan konta w poszczególnych dniach',
          font: {
            size: 20,
            family: 'math',
          },
          color: '#0400b4',
        },
      },
    },
  };

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.wykresStanuKonta).then((k: [{ data: Date; wartosc: number }]) => {
      k.forEach(dane => {
        this.labels.push(dane.data);
        this.datasets.push(dane.wartosc / 100);
      });
      this.labels[0] = 'Dziś';
      if (this.chart) {
        this.chart.destroy();
      }
      if (this.chart) {
        this.chart.destroy();
      }
      // @ts-ignore
      this.chart = new Chart('MyChart', this.config);
      this.chart.update();
    });
  }
}
