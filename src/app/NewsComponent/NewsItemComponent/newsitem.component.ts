import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { GetSectionsService } from '../../Services/get-section.service';

@Component({
  selector: 'my-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsItemComponent implements OnInit{
  constructor(private newsService : GetSectionsService,
              private store : Store<any>){}

  newsToDisplay;
  ngOnInit(){
    // this.newsService.getAllState().subscribe(state => {
    //   console.log('newsItem state ' + state);
    // })
    this.store.select('news').subscribe(state => {
      console.log('newsItem state', state);
      this.newsToDisplay = state.newsList;
      console.log(this.newsToDisplay);
    })
  }
}