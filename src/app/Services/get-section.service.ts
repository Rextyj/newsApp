import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Store } from '../../../node_modules/@ngrx/store';


interface NewsSection{
    results: Array<Object>;
}

@Injectable()
export class GetSectionsService {
    private _url: string;
    constructor(private http: HttpClient,
                private store : Store<any>){}

    getSectionNews(sectionName){
       this._url = 'https://api.nytimes.com/svc/topstories/v2/' 
    + sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339';
    console.log('The url is ' + this._url);
        var res = this.http.get<NewsSection>(this._url);
        // console.log(res);
        return res; 

    }

    //register the reducer
    getAllState(){
        return this.store.select('newsReducer');
    }
    
}