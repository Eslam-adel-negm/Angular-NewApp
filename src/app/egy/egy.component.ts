import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-egy',
  templateUrl: './egy.component.html',
  styleUrls: ['./egy.component.css']
})
export class EgyComponent implements OnInit {

  items:any = {};
  
  constructor(public _NewsService:NewsService) {
    this._NewsService.getEgyNews().subscribe( (data) => {
      this.items = data.articles;
      // console.log(this.items)
    });
  }

  ngOnInit(): void {
  }

}
