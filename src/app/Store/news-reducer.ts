import { ActionReducer, Action } from '@ngrx/store';
import { LOAD_SECTION_NEWS, FILTER_SUBSECTION, NewsActions } from './action';
import { NewsState, initialState } from './state';


// interface newsItem {
//     title: string,
//     abstract: string
// }

var filter;
var initialSectionState;

export const newsReducer: ActionReducer<NewsState> =
    (state = initialState, action: NewsActions) => {
        console.log('Action came in ' + action.type);
        switch (action.type) {
            case LOAD_SECTION_NEWS:
                console.log('load section news action is triggered');
                /*
                we must return a new state, we cannot simply change the initial state's property
                since this will result in returning the same object
                */
                state = {
                    newsList :  action.payload,
                    filtered: false
                }
                initialSectionState = state;
                return state;

            case FILTER_SUBSECTION:
                console.log('filter action is triggered');
                //the subsections array is passed in as the payload
                filter = action.payload;
                console.log('Filter action is received and the state is ', state);
                //filter list of news according to the filter
                var res = initialSectionState.newsList;
                console.log('name is ' + filter);
                res = res.filter(item => { return item.subsection == filter});

                state = {
                    newsList: res,
                    filtered: true
                }
                console.log('filtered state is now ', state);
                return state;
            default:
                //this is the case for init action
                return state;
        }

        // console.log('payload is ', action.payload);
        // return state;
    }