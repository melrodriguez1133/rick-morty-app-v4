import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, HeaderComponent  , CommonModule, FormsModule],
})
export class LocationsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
