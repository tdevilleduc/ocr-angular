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
  
  postTitle: string;
  postContent: string;
  postCreatedAt: Date;
  loveIts: number;

  constructor() { 
  }

  ngOnInit() {
    this.postTitle = this.post.title;
    this.postContent = this.post.content;
    this.postCreatedAt = this.post.created_at;
    this.loveIts = this.post.loveIts;
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
