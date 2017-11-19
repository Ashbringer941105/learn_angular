import { Component } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector:'my-heroes',
  templateUrl:'./heroes.component.html',
//使用子组件的时候，<子组件名字 [子组件中负责接收的数据名]="父组件中需要传输的数据名">
styleUrls:['./heroes.component.css']
})



export class HeroComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  constructor(
    private heroservice:HeroService,
    private router:Router,){ }
  //定义一个构造函数创建一个私有的HeroService属性
  getHeroes():void{
    this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
  }
  //表示被初始化的时候使用的方法，
  ngOnInit():void{
    this.getHeroes();
  }
  goDetail():void{
    this.router.navigate(['./detail',this.selectedHero.id])
  }
}
