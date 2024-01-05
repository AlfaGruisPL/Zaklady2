import { Component } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-files-information-panel',
  standalone: true,
  imports: [],
  templateUrl: './files-information-panel.component.html',
  styleUrl: './files-information-panel.component.scss',
})
export class FilesInformationPanelComponent {
  constructor(public files_: FilesService) {}
}
