import { Action } from '@ngrx/store';

//action types
export const LOAD_SECTION_NEWS: string = 'LOAD_SECTION_NEWS';
export const FILTER_SUBSECTION: string = 'FILTER_SUBSECTION';

//custom action
export class NewsAction implements Action{
    readonly type = LOAD_SECTION_NEWS;

    //pass in the list and referred by payload
    constructor(public payload: any){
        // payload = {"name" : "test"};
    }
}

export class FilterAction implements Action {
    readonly type = FILTER_SUBSECTION;

    constructor(public payload: any){}
}

//action creater

export function loadNewsList(newsList){
    
    return new NewsAction(newsList);
}

export function filterNewsList(filter){
    return new FilterAction(filter);
}

//add custom made actions here separate them with |
export type NewsActions = NewsAction|FilterAction;