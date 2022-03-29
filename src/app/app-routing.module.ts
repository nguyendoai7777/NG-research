import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountDownComponent} from './count-down/count-down.component';
import {HooInputComponent} from "./hoo-input/hoo-input.component";
import { FilesDragDropComponent } from "./files-drag-drop/files-drag-drop.component";
import { MultipleFilesComponent } from "./multiple-files/multiple-files.component";

const routes: Routes = [
  { path: 'cd', component: CountDownComponent },
  { path: 'hoo', component: HooInputComponent },
  { path: 'files', component: FilesDragDropComponent },
  { path: 'mf', component: MultipleFilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
