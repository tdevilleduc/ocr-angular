import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      loveIts: -2,
      created_at: new Date()
    } ,
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      loveIts: 0,
      created_at: new Date()
    }  
  ];

  constructor() {
  }

}
