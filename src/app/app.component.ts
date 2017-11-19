import { Component } from "@angular/core";
// 页面的主体结构
@Component({
    selector:'my-app',
    template:`
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls:['./app.component.css'],
})
// 现在的app-module只负责导航，
// 前面的两个routerLink是连接，下面的touter-outlet是显示连接的位置
export class AppComponent{
    title = 'Tour of Heroes';
}