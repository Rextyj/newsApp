import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '../../../node_modules/@angular/router';
import { GetSectionsService } from '../Services/get-section.service';
import { Store } from '../../../node_modules/@ngrx/store';
import { loadNewsList } from '../Store/action';

@Component({
    selector: 'my-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    providers: [GetSectionsService]
})
export class NewsComponent implements OnInit {
    list;
    sectionName: string;
    constructor(private route: ActivatedRoute,
        private getSectionsService: GetSectionsService,
        private router: Router,
        private store: Store<any>) { }


    ngOnInit() {
        //the news component is only initiallized when the route is changed to section/sectionName
        this.router.events.subscribe((event) => {
            // console.log(event);
            //when an routing event is detected
            if (event instanceof NavigationEnd) {
                //log the new section name after the routing event is finished
                console.log(this.route.snapshot.params['sectionName']);

                //get the list of news according to the new section name
                this.sectionName = this.route.snapshot.params['sectionName'];
                this.getSectionsService.getSectionNews(this.sectionName)
                    .subscribe(result => {
                    this.list = result.results;
                        console.log(this.list);
                        this.store.dispatch(loadNewsList(this.list));
                    },
                        err => { console.log('Error occured') });

            }

        });

        // for the initial data pull, we need to call the api for once
        this.getSectionsService.getSectionNews('home')
            .subscribe(result => {
            this.list = result.results;
                console.log(this.list);
                this.store.dispatch(loadNewsList(this.list));
            },
                err => { console.log('Error occured') });


    }


}