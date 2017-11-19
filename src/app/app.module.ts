// 配置文件，需要用到的组件和ngModule都需要到这里注册
// 写好的ts组件需要注册到declarations中，用到的ngModule需要卸载imports中

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service';
import { HttpModule } from '@angular/http';
//RouterModule是agular的可选外部ngmodule，是angular路由器
//他包含了多种服务（RouterModule）,多种指令（RouterOutlet,RouterLink,RouterLinkActive）
//和一套配置（Routes）
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,// <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  //每个组件都必须在一个（且只有一个）angular模块中声明
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
  ],
  providers:[
    HeroService,
  ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
