import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonText } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { StatusTranslatePipe } from '../../shared/pipes/status-translate-pipe';
import { formatEpisode } from '../../shared/utils/episode.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, HeaderComponent, StatusTranslatePipe, CommonModule, FormsModule, IonText],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

    episodeCode = 'S01E01';

  episodeLabel = formatEpisode(this.episodeCode);
}
