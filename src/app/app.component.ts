import { Component } from '@angular/core';
import * as firebase from 'firebase'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { 
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCz6ShM8p6wy38M3Q04dDbMUCej-YA3Ae4",
      authDomain: "test-blog-9615f.firebaseapp.com",
      databaseURL: "https://test-blog-9615f.firebaseio.com",
      projectId: "test-blog-9615f",
      storageBucket: "test-blog-9615f.appspot.com",
      messagingSenderId: "135810605635"
    };
    firebase.initializeApp(config);
  }
}
