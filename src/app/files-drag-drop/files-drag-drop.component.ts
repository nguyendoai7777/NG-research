import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-files-drag-drop',
  templateUrl: './files-drag-drop.component.html',
  styleUrls: ['./files-drag-drop.component.scss']
})
export class FilesDragDropComponent implements OnInit {

  files: File[] = [];
  url!: SafeUrl;

  constructor(private readonly DOMSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  onSelectFile(e: any) {
    const fileType = e[0].type
    if (e && e.target && e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) => {
        event.target && (this.url = event.target.result as string);
        event.target && console.log(event)
      }
    } else {
      this.url = this.DOMSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[0]));
    }

  }

  deleteFile(f: File) {
    this.files = this.files.filter(function (w) {
      return w.name != f.name
    });

  }
}
