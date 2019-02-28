import { Component, OnInit } from '@angular/core';

import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 
        2000
      );
    }
  );

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    // récupération des appareils depuis le backend
    this.appareilService.getAppareilsFromServer();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
    this.appareilService.saveAppareilsToServer();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
    this.appareilService.saveAppareilsToServer();
  }
}
