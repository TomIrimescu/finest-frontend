import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.css']
})
export class NewsDashboardComponent implements OnInit {
  @Input() cSymbol: string;
  companyNews: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.companyNews = `Here is company news for ${this.cSymbol}`;
  }

}
