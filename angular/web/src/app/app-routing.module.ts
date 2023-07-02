import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAAComponent } from './register-aa/register-aa.component';
import { RegisterAAAComponent } from './register-aaa/register-aaa.component';
import { MainAAComponent } from './main-aa/main-aa.component';
import { MainAAAComponent } from './main-aaa/main-aaa.component';
import { ContentComponent } from './content/content.component';
import { ContentAAComponent } from './content-aa/content-aa.component';
import { ContentAAAComponent } from './content-aaa/content-aaa.component';
import { SubContentComponent } from './sub-content/sub-content.component';
import { SubContentAAComponent } from './sub-content-aa/sub-content-aa.component';
import { SubContentAAAComponent } from './sub-content-aaa/sub-content-aaa.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/A', pathMatch: 'full' },
  { path: 'main/A', component: MainComponent },
  { path: 'main/AA', component: MainAAComponent },
  { path: 'main/AAA', component: MainAAAComponent },
  { path: 'register/A', component: RegisterComponent },
  { path: 'register/AA', component: RegisterAAComponent },
  { path: 'register/AAA', component: RegisterAAAComponent },
  { path: 'content/A', component: ContentComponent },
  { path: 'content/AA', component: ContentAAComponent },
  { path: 'content/AAA', component: ContentAAAComponent },
  { path: 'sub/A', component: SubContentComponent },
  { path: 'sub/AA', component: SubContentAAComponent },
  { path: 'sub/AAA', component: SubContentAAAComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
