import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';



export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const heroes =[
            {id:11 , name:'a'},
            {id:12 , name:'b'},
            {id:13 , name:'c'},
            {id:14 , name:'d'},
            {id:15 , name:'e'}
            ] ;
    return {heroes}
    }
}
// const表示常量
//export表示这个变量会被其他文件引用。不加的话就会无法被引用

    