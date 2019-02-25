import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  postTitle: string;
  @Input()
  postContent: string;
  @Input()
  postCreatedAt: Date;
  @Input()
  loveIts: number;

  constructor() { 

  }

  ngOnInit() {
  }

  onLike() {
    this.loveIts++;
    console.log('loveIts: ' + this.loveIts);
  }

  onDontLike() {
    this.loveIts--;
    console.log('loveIts: ' + this.loveIts);
  }

  getColor() {

  }
}
