import { Injectable } from '@angular/core';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';
import { BehaviorSubject, debounceTime, skip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  filesData: any = [];
  filesDataLoading = true;
  fileLoading = true;
  readonly fileLimit = 70;
  private timer = new BehaviorSubject('');

  constructor(private http_: ListonoszService, private error_: ErrorAnalyzerService) {
    this.timer.pipe(skip(1), debounceTime(1700)).subscribe(k => {
      this.FetchDataFromDBDebounce();
    });
  }

  FetchDataFromDB() {
    this.timer.next(' ');
  }

  private FetchDataFromDBDebounce() {
    this.filesDataLoading = true;
    this.http_
      .pobierz(Drzwi.filesList)
      .then(data => {
        this.filesData = [];
        this.filesData = data;
        this.fileLoading = false;
      })
      .catch(error => {
        this.error_.analyze(error);
      })
      .finally(() => {
        this.filesDataLoading = false;
      });
  }
}
