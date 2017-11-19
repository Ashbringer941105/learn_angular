import { NgModule }      from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { RootRenderer } from '@angular/core/src/render/api';
// 保存导航链接的文件，在Routes数组里面是path和component数据对

const routes : Routes=[
    {path: '',redirectTo:'./dashboard',pathMatch:'full' },
    { path:'heroes', component:HeroComponent},
    { path:'dashboard',component:DashboardComponent},
    {path:'detail/:id',component:HeroDetailComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}