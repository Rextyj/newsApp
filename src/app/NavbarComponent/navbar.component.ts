import { Component, OnInit } from '@angular/core';
import { Store } from '../../../node_modules/@ngrx/store';
import { filterNewsList } from '../Store/action';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  subsections = [];

  ngOnInit() {
    //subscribe to the store
    this.store.select('news').subscribe(state => {
      if (state.filtered === false) {
        // this.subsections
        console.log('state is ', state);
        this.subsections = [];
        for (let item of state.newsList) {
          // console.log('The item is ' , item);
          if (item.subsection && item.subsection.length > 0) {
            //find the unique elements
            if (this.subsections.indexOf(item.subsection) === -1) {
              this.subsections.push(item.subsection);
            }
          }
        }
      }

      console.log('The subsections are ' + this.subsections);
    });
  }

  //filtering the news items
  onFilter(filter) {
    console.log('filter clicked');
    //dispatch the filtering action
    this.store.dispatch(filterNewsList(filter));
  }

}