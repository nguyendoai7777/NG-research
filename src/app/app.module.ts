import { InjectionToken, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CountDownComponent} from './count-down/count-down.component';
import {HooInputComponent} from './hoo-input/hoo-input.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { FilesDragDropComponent } from './files-drag-drop/files-drag-drop.component';
import { FileDragDropDirective } from './files-drag-drop/files-drag-drop.directive';
import { ConfirmDialogComponent } from "./files-drag-drop/confirm-dialog/confirm-dialog.component";
import { MultipleFilesComponent } from './multiple-files/multiple-files.component';
import { MultipleFilesDirective } from './multiple-files/multiple-files.directive';
import { RxDelayComponent } from './rx-delay/rx-delay.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    HooInputComponent,
    FilesDragDropComponent,
    ConfirmDialogComponent,
    FileDragDropDirective,
    MultipleFilesComponent,
    MultipleFilesDirective,
    RxDelayComponent,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
