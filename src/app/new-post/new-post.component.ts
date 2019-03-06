import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmit() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content']
    );
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
