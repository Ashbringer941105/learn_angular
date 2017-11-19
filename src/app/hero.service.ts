import { Injectable, Inject } from '@angular/core';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';


//Injectable装饰器，表示㘝angular需要往这个服务中注入其他依赖，就会使用到这个元数据
@Injectable()
export class HeroService{
    //可以从任何地方获取Hero数据
    private heroesUrl = 'api/heroes';
    constructor(private http:Http){};


    getHeroes():Promise<Hero[]>{  
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
      }

    private handleError(error:any):Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message||error);
    }
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()),2000);
        });
    }
    getHero(id : number):Promise<Hero> {
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }
    
}