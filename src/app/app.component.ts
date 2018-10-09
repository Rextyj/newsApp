import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { NewsState } from './Store/state';
import { LOAD_SECTION_NEWS } from './Store/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  data;

  // constructor(private _store: Store<State>){
  //   console.log(_store.select('newsReducer'));

  //   _store.select('newsReducer').subscribe((data: State) => {
  //     this.data = data;
  //   });
  // }

  constructor(private router: Router){
    this.router.navigate(['section', 'home']);
  }

  getNewsList() {
    console.log("action triggered");
    // this._store.dispatch({type: LOAD_SECTION_NEWS});
  }
}
