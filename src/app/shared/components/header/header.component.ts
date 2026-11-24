import { Component, OnInit,Input} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonBackButton,IonButtons,IonIcon} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  planetOutline,
  arrowBackOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonBackButton,IonButtons,IonIcon],
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({
  planetOutline,
  arrowBackOutline
});
  }
  @Input() title: string = 'Rick & Morty';

  @Input() subtitle: string = '';

  @Input() showBackButton: boolean = false;
  ngOnInit() {}
}
