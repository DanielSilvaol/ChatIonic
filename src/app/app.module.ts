import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatService} from "./chat.service";

const firebaseConfig = {
  apiKey: "AIzaSyC4yPCIGDzxdtz9541SYpcrDYR0wXooq5Q",
  authDomain: "chation-5d55b.firebaseapp.com",
  databaseURL: "https://chation-5d55b.firebaseio.com",
  projectId: "chation-5d55b",
  storageBucket: "",
  messagingSenderId: "141931029017",
  appId: "1:141931029017:web:c60bef4196c16512"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
