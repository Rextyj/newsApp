import { Component,OnInit } from '@angular/core';
import {GetSectionsService} from '../Services/get-section.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'my-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [GetSectionsService]
})
export class SectionComponent implements OnInit{
    
    sections: Array<Object>;
  constructor(private getSectionsService: GetSectionsService){
    this.sections = [{'name': 'home', 'path': '/section/home'},
    {'name': 'opinion', 'path': '/section/opinion'},
    {'name': 'world', 'path': '/section/world'},
    {'name': 'national', 'path': '/section/national'},
    {'name': 'politics', 'path': '/section/politics'},
    {'name': 'upshot', 'path': '/section/upshot'},
    {'name': 'nyregion', 'path': '/section/nyregion'},
    {'name': 'business', 'path': '/section/business'},
    {'name': 'technology', 'path': '/section/technology'},
    {'name': 'science', 'path': '/section/science'},
    {'name': 'health', 'path': '/section/health'},
    {'name': 'sports', 'path': '/section/sports'},
    {'name': 'arts', 'path': '/section/arts'},
    {'name': 'books', 'path': '/section/books'},
    {'name': 'movies', 'path': '/section/movies'},
    {'name': 'theater', 'path': '/section/theater'},
    {'name': 'sundayreview', 'path': '/section/sundayreview'},
    {'name': 'fashion', 'path': '/section/fashion'},
    {'name': 'tmagazine', 'path': '/section/tmagazine'},
    {'name': 'food', 'path': '/section/food'},
    {'name': 'travel', 'path': '/section/travel'},
    {'name': 'magazine', 'path': '/section/magazine'},
    {'name': 'realestate', 'path': '/section/realestate'},
    {'name': 'automobiles', 'path': '/section/automobiles'},
    {'name': 'obituaries', 'path': '/section/obituaries'},
    {'name': 'insider', 'path': '/section/insider'}];
  }

  ngOnInit() {
    
  }

  
}