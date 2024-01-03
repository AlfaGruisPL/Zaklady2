import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterPageService } from '../../panele/register-page/register-page.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-ngx-editor',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, NgIf, NgClass, NgStyle],
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss',
})
export class NgxEditorComponent {
  @Input({ required: true }) value!: string;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  editor: any = undefined;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  protected readonly undefined = undefined;

  constructor(public registerPage_: RegisterPageService, public danePodreczne_: PodreczneDaneService) {}

  ngOnInit() {
    this.editor = new Editor();
  }
}
