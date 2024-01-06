import { Injectable } from '@angular/core';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { ErrorAnalyzerService } from '../../../../serwisy/error-analyzer.service';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  filesData: any = [];
  filesDataLoading = true;
  readonly fileLimit = 70;

  constructor(private http_: ListonoszService, private error_: ErrorAnalyzerService) {}

  FetchDataFromDB() {
    this.filesDataLoading = true;
    this.http_
      .pobierz(Drzwi.filesList)
      .then(data => {
        this.filesData = [];
        this.filesData = data;
      })
      .catch(error => {
        this.error_.analyze(error);
      })
      .finally(() => {
        this.filesDataLoading = false;
      });
  }
}
