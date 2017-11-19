import { Component ,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

// dashboard表示显示最好的几个英雄（或者特定的几个英雄）。
@Component({
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    heroes:Hero[];
    constructor(private heroService:HeroService){}
    // 个人理解：ngOninit就是启用这个组件的时候，进行的操作，
    // 在这里就是使用在构造函数中声明的heroservice组件中的getHeroes函数
    // 由于heroservice组件中的getHeroes函数使用了Promise，所以这边需要使用then
    ngOnInit():void{
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }


}