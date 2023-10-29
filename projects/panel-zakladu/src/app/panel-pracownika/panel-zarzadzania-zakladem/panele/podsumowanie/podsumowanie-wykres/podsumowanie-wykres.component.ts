import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import Chart from 'chart.js/auto';
import { Pracownik } from '../../../../../klasy/panelPracownika/pracownicy/pracownik';
import chartTrendline from 'chartjs-plugin-trendline';

@Component({
  selector: 'app-podsumowanie-wykres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podsumowanie-wykres.component.html',
  styleUrls: ['./podsumowanie-wykres.component.scss'],
})
export class PodsumowanieWykresComponent {
  public chart: any;
  public labels: Array<Date | string> = [];
  public datasets: any = [];
  public data = {
    // values on X-Axis
    labels: this.labels,
    datasets: this.datasets,
  };
  public config: any = {
    type: 'line',
    data: this.data,
    options: {
      scale: 2,
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        x: {},
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
          display: true,
        },
        title: {
          display: true,
          text: 'Wizyty pracowników',
          font: {
            size: 20,
            family: 'math',
          },
          color: '#0400b4',
        },
      },
    },
  };
  resize = false;

  constructor(private listonosz: ListonoszService) {}

  ngOnInit() {
    this.listonosz.pobierz(Drzwi.podsumowanieDaneDoWykresu).then(
      (
        dane: Array<{
          dane: [{ data: Date; ile: number }];
          pracownik: Partial<Pracownik>;
        }>
      ) => {
        let kIndex = 0;
        dane.forEach(pracownik => {
          const tmp: Array<any> = [];
          pracownik.dane.forEach(k => {
            tmp.push(k.ile);
            if (kIndex === 0) {
              this.labels.push(k.data);
            }
          });
          this.labels[0] = 'Dziś';
          this.labels[1] = 'Wczoraj';
          kIndex++;
          let color = this.generateRandomColor(pracownik.pracownik.id);
          const obiekt = {
            label: pracownik.pracownik.imie + '  ' + pracownik.pracownik.nazwisko,
            data: tmp,
            // backgroundColor: color,
            // borderColor: color,
            pointStyle: 'circle',
            pointRadius: 2,
            pointHoverRadius: 4,
            tension: 0.2,
            trendlineLinear: {
              //  style: 'color',
              lineStyle: 'dotted',
              width: 2,
            },
          };

          this.datasets.push(obiekt);
        });
        this.config.options.plugins.title.text += ` (${this.labels.length} dni)`;
        if (this.chart) {
          this.chart.destroy();
        }
        ///naprawienie responsywności
        if (document.body.clientWidth < 800) {
          // @ts-ignore
          document.getElementById('chartPodsumowania').style.height = '50vh';
          // @ts-ignore
          document.getElementById('chartPodsumowania').style.width = '100vw';
        }

        Chart.register(chartTrendline);
        this.chart = new Chart('chartPodsumowania', this.config);
        this.chart.update();

        ///naprawienie responsywności
        if (document.body.clientWidth > 800) {
          this.chart.canvas.parentNode.style.width = '628px';
          this.chart.canvas.parentNode.style.height = '340px';
        }
      }
    );
  } //style="height: 40vh; width: 80vw"

  generateRandomColor(id: number = new Date().getTime()): string {
    const combinedText = `id${this.generateHash(id.toString())}`;
    const combinedHash = Math.abs(this.generateHash(combinedText));

    const colorCode = (combinedHash % 16777215).toString(16); // 16777215 to 0xFFFFFF (największa możliwa wartość koloru)
    const paddedColorCode = colorCode.padStart(6, '0');
    return `#${paddedColorCode}`;
  }

  generateHash(text: string) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
    }
    return hash;
  }
}
