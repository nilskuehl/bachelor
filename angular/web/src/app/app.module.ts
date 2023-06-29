import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AvatarModule } from 'primeng/avatar';
import { SliderModule } from 'primeng/slider';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RegisterAAComponent } from './register-aa/register-aa.component';
import { RegisterAAAComponent } from './register-aaa/register-aaa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MainAAComponent } from './main-aa/main-aa.component';
import { MainAAAComponent } from './main-aaa/main-aaa.component';
import { ContentComponent } from './content/content.component';
import { ContentAAComponent } from './content-aa/content-aa.component';
import { ContentAAAComponent } from './content-aaa/content-aaa.component';
import { SubContentComponent } from './sub-content/sub-content.component';
import { SubContentAAComponent } from './sub-content-aa/sub-content-aa.component';
import { SubContentAAAComponent } from './sub-content-aaa/sub-content-aaa.component';
import { ColorPickerModule } from 'primeng/colorpicker';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    RegisterAAComponent,
    RegisterAAAComponent,
    MainAAComponent,
    MainAAAComponent,
    ContentComponent,
    ContentAAComponent,
    ContentAAAComponent,
    SubContentComponent,
    SubContentAAComponent,
    SubContentAAAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    SliderModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    ColorPickerModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
