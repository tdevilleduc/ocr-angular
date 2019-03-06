import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private postsService: PostsService) { 
  }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
    this.postsService.savePosts();
  }

  onDontLike() {
    this.post.loveIts--;
    this.postsService.savePosts();
  }

  isPostGreen() {
    return this.post.loveIts > 0;
  }

  isPostRed() {
    return this.post.loveIts < 0;
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }
}
