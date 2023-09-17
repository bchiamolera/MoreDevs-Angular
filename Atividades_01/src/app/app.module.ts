import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ex01Component } from './components/ex01/ex01.component';
import { Ex02Component } from './components/ex02/ex02.component';
import { Ex03Component } from './components/ex03/ex03.component';
import { Ex04Component } from './components/ex04/ex04.component';
import { Ex05Component } from './components/ex05/ex05.component';
import { Ex06Component } from './components/ex06/ex06.component';
import { Ex07Component } from './components/ex07/ex07.component';
import { Ex08Component } from './components/ex08/ex08.component';
import { Ex09Component } from './components/ex09/ex09.component';
import { Ex10Component } from './components/ex10/ex10.component';
import { Ex11Component } from './components/ex11/ex11.component';
import { Ex12Component } from './components/ex12/ex12.component';
import { Ex13Component } from './components/ex13/ex13.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,
    Ex06Component,
    Ex07Component,
    Ex08Component,
    Ex09Component,
    Ex10Component,
    Ex11Component,
    Ex12Component,
    Ex13Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
