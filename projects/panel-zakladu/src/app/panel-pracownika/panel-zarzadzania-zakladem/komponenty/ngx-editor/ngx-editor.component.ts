import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { RegisterPageService } from '../../panele/register-page/register-page.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Subject, throttleTime } from 'rxjs';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Info } from '../../../../enum/info';

@Component({
  selector: 'app-ngx-editor',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, NgIf, NgClass, NgStyle],
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss',
})
export class NgxEditorComponent implements OnInit {
  @ViewChild('editorRef', { read: ElementRef })
  editorRef: ElementRef<HTMLElement> | undefined;
  @Input({ required: true }) value: string = 'Loading...';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();
  @Input() maxLength = 20000;
  editor: any = undefined;
  interval: any;
  prevValue = '';
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
  subject = new Subject();
  @Input() saveTools: boolean = false;
  protected readonly undefined = undefined;

  constructor(
    public registerPage_: RegisterPageService,
    public danePodreczne_: PodreczneDaneService,
    private toast: KomunikatyService
  ) {
    this.subject.pipe(throttleTime(5800, undefined, { leading: true, trailing: true })).subscribe(k => {
      this.toast.komunikatInfo(Info.limitTextEditor);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    /* if (this.value == undefined) {
       this.value = '';
     }*/
  }

  ngOnInit() {
    this.editor = new Editor();
    if (this.saveTools) {
      this.toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        ['text_color', 'background_color'],
      ];
    }
  }

  changeValue($event: any) {
    const text = $event.target.textContent;
    console.log(`.`);
    if (text.length > this.maxLength) {
      const newValue = text.substring(0, this.maxLength);
      this.value = newValue + '   ';
      this.valueChange.emit(newValue);
      this.subject.next('');

      setTimeout(() => {
        this.value = newValue;
      }, 1);
    } else {
      this.value = text;
      this.valueChange.emit(text);
    }
  }
}
