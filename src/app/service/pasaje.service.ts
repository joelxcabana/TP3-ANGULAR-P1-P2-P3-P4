import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase:string ="http://localhost:3000/api/pasaje/";

  constructor(private _http:HttpClient) {
   }
   
   getPasajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.get(this.urlBase , httpOptions );
  }

  addPasaje(pasaje:Pasaje):Observable<any>{
    console.log("entro al service add pasaje"); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    var body = JSON.stringify(pasaje);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  deletePasaje(pasaje:Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.delete(this.urlBase + pasaje._id, httpOptions );
  }

  updatePasaje(pasaje:Pasaje):Observable<any>{
    //var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres)=>item.id == punto.id);
    //this.puntosInteres.splice(idBorrar,1,punto);
    console.log("SERVICE UPDATE...."); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(pasaje);
    return this._http.put(this.urlBase + pasaje._id,body,httpOptions);;
  }
   
}
