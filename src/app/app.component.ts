import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAJU5lkzybdRg8EkeA0QPxvXxHyyiZXHdM",
      authDomain: "bookshelves-1391d.firebaseapp.com",
      databaseURL: "https://bookshelves-1391d.firebaseio.com",
      projectId: "bookshelves-1391d",
      storageBucket: "",
      messagingSenderId: "846632059001"
    };
    firebase.initializeApp(config);
  }
}
