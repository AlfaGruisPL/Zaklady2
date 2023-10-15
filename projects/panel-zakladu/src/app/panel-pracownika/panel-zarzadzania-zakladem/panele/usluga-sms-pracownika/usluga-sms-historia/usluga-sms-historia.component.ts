import { Component, OnDestroy, OnInit } from '@angular/core';
import { UslugaSmsService } from '../uslugaSms.service';
import TooltipItem from 'chart.js/auto';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-usluga-sms-historia',
  templateUrl: './usluga-sms-historia.component.html',
  styleUrls: ['./usluga-sms-historia.component.scss'],
})
export class UslugaSmsHistoriaComponent implements OnInit, OnDestroy {
  public page = 0;
  public pageSize = 7;
  public chart: any;
  labels: Array<string> = [];
  datasets: Array<number> = [];
  datasetsFree: Array<number> = [];
  datasetsCena: Array<number> = [];
  data = {
    // values on X-Axis
    labels: this.labels,
    datasets: [
      {
        label: 'SMS w ciągu dnia',
        data: this.datasets,
        backgroundColor: 'rgba(0,27,197,0.25)',
        borderColor: 'blue',
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        tension: 0.3,
        fill: {
          target: 'origin',
          above: 'rgba(0,33,255,0.15)', // Area will be red above the origin
        },
        order: 1,
      },
      /*  {
          display: false,
          label: 'Darmowe SMS',
          data: this.datasetsFree,
          backgroundColor: 'green',
          borderColor: 'green',
          font: {
            size: 20,
          },
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0.3,
          fill: {
            target: 'origin',
            above: 'rgba(0,255,70,0.51)', // Area will be red above the origin
          },
          order: 2,
        },*/
    ],
  };
  subk: any;

  constructor(public service: UslugaSmsService) {}

  ngOnInit(): void {
    this.createChart();
  }

  public footer = (tooltipItems: any[]) => {
    const cenaSMS = this.datasetsCena[tooltipItems[0].dataIndex];
    const smsIlosc = tooltipItems[0].formattedValue ? tooltipItems[0].formattedValue : 0;
    const kwota = Math.round(smsIlosc * cenaSMS * 100) / 100;
    return 'Opłata:  ' + kwota / 100 + 'zł';
  };

  public label = (tooltipItems: TooltipItem<any>) => {
    // @ts-ignore
    if (tooltipItems.datasetIndex == 0) {
      console.log(tooltipItems);

      // @ts-ignore
      return 'Wysłane SMS: ' + tooltipItems.formattedValue;
    }
    return null;
  };

  // @ts-ignore
  public config = {
    type: 'line',
    data: this.data,
    options: {
      scale: 0.4,
      animation: false,
      responsive: true,
      interaction: {
        intersect: true,
      },

      plugins: {
        tooltip: {
          callbacks: {
            footer: this.footer,
            label: this.label,
          },
          caretSize: 8,
          footerFont: {
            size: 17,
          },
          bodyFont: {
            size: 17,
          },
          titleFont: {
            size: 17,
          },
        },

        legend: {
          display: false,
          position: 'left',
          labels: {
            font: {
              size: 17,
            },
            color: 'black',
            padding: 30,
            useBorderRadius: true,
            borderRadius: 5,
          },
        },
        title: {
          display: true,
          text: 'Ilość wysłanych sms w poszczególnych dniach',
          font: {
            size: 20,
            family: 'math',
          },
          color: '#0400b4',
        },
      },
    },
  };

  createChart() {
    this.subk = this.service.daneObserveble.subscribe(dane => {
      if (dane.historia.length > 0) {
        if (this.chart != undefined) this.chart.update('none');
        while (this.labels.length > 0) this.labels.pop();
        while (this.datasetsFree.length > 0) this.datasetsFree.pop();
        while (this.datasets.length > 0) this.datasets.pop();
        while (this.datasetsCena.length > 0) this.datasetsCena.pop();

        this.service.dane.historia.forEach(k => {
          this.labels.push(k.termin.toString());
          //  this.datasetsFree.push(k.darmoweSMS);
          this.datasets.push(k.wyslaneSMS);
          this.datasetsCena.push(k.kosztSMS);
        });

        if (this.labels[0] != undefined) {
          const k = new Date();
          const dzien = k.getDate() >= 10 ? k.getDate() : '0' + k.getDate();
          const miesiac = k.getMonth() + 1 >= 10 ? k.getMonth() + 1 : '0' + (k.getMonth() + 1);
          const data = k.getFullYear() + '-' + miesiac + '-' + dzien;

          if (data.toString() == this.labels[0].toString()) {
            this.labels[0] = 'Dziś';
          }
        }
        if (this.labels[0] != undefined) {
          const k = new Date(new Date().getTime() - 86400000);
          const dzien = k.getDate() >= 10 ? k.getDate() : '0' + k.getDate();
          const miesiac = k.getMonth() + 1 >= 10 ? k.getMonth() + 1 : '0' + (k.getMonth() + 1);
          const data = k.getFullYear() + '-' + miesiac + '-' + dzien;

          if (data.toString() == this.labels[0].toString()) {
            this.labels[0] = 'Wczoraj';
          }
        }
        if (this.chart) {
          this.chart.destroy();
        }
        // @ts-ignore
        this.chart = new Chart('MyChart', this.config);
        this.chart.update();
      }
    });
  }

  pageCount() {
    return Math.ceil(this.service.dane.historia.length / this.pageSize);
  }

  ngOnDestroy(): void {
    this.subk.unsubscribe();
  }
}
