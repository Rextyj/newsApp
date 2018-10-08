export interface NewsState {
    newsList: Array<any>;
    filtered: boolean;
}


export const initialState: NewsState = {
    newsList: [{'title': 'News are loading', 'abstract': 'Please wait', 'subsection': ''}],
    filtered: false
}