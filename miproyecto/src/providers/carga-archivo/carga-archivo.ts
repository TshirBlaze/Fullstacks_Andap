import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the CargaArchivoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargaArchivoProvider {
  
    imagenes: ArchivoSubir[] = [];
    lastKey: string = null;
  
  
    constructor( public toastCtrl: ToastController,
                 public afDB: AngularFireDatabase ) {
  
      this.cargar_ultimo_key()
          .subscribe( ()=> this.cargar_imagenes() )
  
    }
  

}
