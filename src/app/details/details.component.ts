import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  oneNews:any = [];
  constructor(public _ActivatedRoute:ActivatedRoute,public _NewsService:NewsService) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id)
    this._NewsService.getEgyNews().subscribe( (data) => {
      this.oneNews = data.articles[this.id];
      // console.log(this.oneNews)
    });
  }

  ngOnInit(): void {
  }

}
