import { Component, OnInit } from '@angular/core';
import { FileHandle } from "./file.type";

@Component({
  selector: 'app-multiple-files',
  templateUrl: './multiple-files.component.html',
  styleUrls: ['./multiple-files.component.scss']
})
export class MultipleFilesComponent implements OnInit {
  uploadedFiles!: FileHandle[];
  constructor() {}
  ngOnInit(): void {}
  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }
}
