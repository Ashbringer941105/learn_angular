// 这个文件中会存放这个新的HeroDetailComponent
//如果需要一个组件接受输入，则加入Input，并且在接受的数据前面加上@Input装饰器，
// 如下文中的hero
import { Component , Input ,OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


// 要定义一个组件，我们总是先导入符号Component
// Component装饰器为组件提供了angular元数据，
@Component({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})


export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;   
  //@Input装饰器表示告诉组件，这个hero是一个从外界输入进来的属性
  constructor(
    private heroService :HeroService,
    private route:ActivatedRoute,
    private location: Location
  ){}

  ngOnInit():void {
    this.route.paramMap
    .switchMap((params:ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }
  
  goBack():void {
    this.location.back();
  }
}