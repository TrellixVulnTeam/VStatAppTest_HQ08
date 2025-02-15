import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartPageRoutingModule } from './chart-routing.module';
import { ChartPage } from './chart.page';
import { ChartsModule } from 'ng2-charts';
import { Serial } from '@ionic-native/serial/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import 'chartjs-plugin-zoom';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder} from '@awesome-cordova-plugins/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule,
    ChartsModule
  ],
  declarations: [ChartPage],
  providers: [Serial, NativeAudio, Geolocation,NativeGeocoder]
})
export class ChartPageModule {}
