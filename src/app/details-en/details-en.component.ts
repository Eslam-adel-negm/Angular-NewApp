import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details-en.component.html',
  styleUrls: ['./details-en.component.css']
})
export class DetailsEnComponent implements OnInit {

  idEn:any;
  oneNewEn:any = [];
  constructor(public _ActivatedRoute:ActivatedRoute,public _NewsService:NewsService) {
    this.idEn = this._ActivatedRoute.snapshot.paramMap.get('id');
    // console.log(this.idEn)
    this._NewsService.getUsaNews().subscribe( (data) => {
      this.oneNewEn = data.articles[this.idEn];
      // console.log(this.oneNewEn)
    });
  }

  ngOnInit(): void {
  }

}
