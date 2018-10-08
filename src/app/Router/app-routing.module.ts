import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionComponent } from '../SectionsComponent/section.component';
import {NewsComponent} from '../NewsComponent/news.component';
import {NavbarComponent} from '../NavbarComponent/navbar.component'

const routes: Routes = [
    { path: 'section/:sectionName', component: NewsComponent }
    // { path: '', redirectTo: 'section/home', pathMatch: 'full'}
    // { path: 'section/:sectionName', component: NavbarComponent, outlet: 'navBar'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]//this exports the routermodule that has just been modified
})
export class AppRoutingModule {

}
export const routingComponents = [SectionComponent, NewsComponent]