import { Injectable, inject } from '@angular/core';
import {LoadingController, ToastController, ToastOptions } from '@ionic/angular';

import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController) ;

  toastCtrl= inject(ToastController);
router= inject(Router)


  // =========== Loading :

  loading (){

  return this.loadingCtrl.create({spinner:'crescent'

  });

  //====toastr

}
async presentToast(opts?:ToastOptions){
  const toast = await this.toastCtrl.create(opts);
  toast.present();
}

  //====entrar a cualquier pagina


routerlink(url:string){
return this.router.navigateByUrl(url);
}

 //==== Guarda un elemento


 saveInLocalStorage(key: string, value: any){
  return localStorage.setItem(key, JSON.stringify(value))
  }
  
  
 //==== Obtiene un elemento desde localstorage


 getFromLocalStorage(key: string){
  return JSON.parse(localStorage.getItem(key))
  }
  



}
