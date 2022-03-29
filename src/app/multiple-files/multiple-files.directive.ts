import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { FileHandle } from "./file.type";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
  selector: '[appMultipleFiles]'
})
export class MultipleFilesDirective {
  @Output('files') files = new EventEmitter<FileHandle[]>();
  @HostBinding('style.background') public background = '#eee';
  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }
  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    console.log(evt)
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files: FileHandle[] = [];
    if(evt.dataTransfer) {
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        const file = evt.dataTransfer.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        console.log({url, file})
        files.push({
          file,
          url
        });
      }
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
  constructor(private sanitizer: DomSanitizer) {}
}
