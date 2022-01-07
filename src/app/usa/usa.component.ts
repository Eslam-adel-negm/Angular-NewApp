import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  items:any = {};
  
  constructor(public _NewsService:NewsService) {
    this._NewsService.getUsaNews().subscribe( (data) => {
      this.items = data.articles;
      // console.log(this.items)
    });
  }

  ngOnInit(): void {
  }

}
