import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { 
  }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
    console.log('loveIts: ' + this.post.loveIts);
  }

  onDontLike() {
    this.post.loveIts--;
    console.log('loveIts: ' + this.post.loveIts);
  }

  getColor() {

  }
}
