import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountDownComponent} from './count-down/count-down.component';
import {HooInputComponent} from "./hoo-input/hoo-input.component";
import { FilesDragDropComponent } from "./files-drag-drop/files-drag-drop.component";
import { MultipleFilesComponent } from "./multiple-files/multiple-files.component";
import { RxDelayComponent } from "./rx-delay/rx-delay.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";
import { DirectiveComponent } from "./directive/directive.component";
import { DayInWeekPickerComponent } from "./day-in-week-picker/day-in-week-picker.component";

const routes: Routes = [
  { path: 'cd', component: CountDownComponent },
  { path: 'hoo', component: HooInputComponent },
  { path: 'files', component: FilesDragDropComponent },
  { path: 'mf', component: MultipleFilesComponent },
  { path: 'dl', component: RxDelayComponent },
  { path: 'di', component: DependencyInjectionComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'wp', component: DayInWeekPickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
