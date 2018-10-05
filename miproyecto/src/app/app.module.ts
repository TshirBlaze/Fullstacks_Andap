import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubirPage } from "../pages/subir/subir";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PipesModule} from '../pipes/pipes.module';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';

export const firebaseConfig = {
  ApiKey: "AIzaSyDRX1Z3vGCxwPeunLzXKRzdaC0QiaosJT8",
   AuthDomain: "fulstacks.firebaseapp.com",
   databaseURL: "https://fulstacks.firebaseio.com",
   projectId: "fulstacks",
   storageBucket: "fulstacks.appspot.com",
   MessagingSenderId: "932508238404"
};

@NgModule({
  declarations: [
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider
  ]


})
export class AppModule {}
