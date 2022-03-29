import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})

export class FileDragDropDirective {
  //@Input() private allowed_extensions : Array<string> = ['png', 'jpg', 'bmp'];
  //@Output() private filesInvalidEmitter : EventEmitter<File[]> = new EventEmitter();
  @Output() private filesChangeEmitter = new EventEmitter<Event>();
  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    if (evt.dataTransfer) {
      const validFiles = evt.dataTransfer.files;
      // @ts-ignore
      this.filesChangeEmitter.emit(validFiles);
    }
  }
}
