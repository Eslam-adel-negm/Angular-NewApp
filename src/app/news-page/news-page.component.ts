import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  items:any = [];
  constructor(public _NewsService:NewsService, public _ActivatedRoute:ActivatedRoute) {

    this._NewsService.news_listing().subscribe( (data) => {
      this.items = data.articles;
      // console.log(this.items)
    });

    this._ActivatedRoute.queryParams.subscribe(queries => {
      // console.log(queries);
  });
  }

  ngOnInit(): void {
  }


}
