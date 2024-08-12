import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewPassportForm } from '../interfaces/INewPassportForm';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { IReNewForm } from '../interfaces/IReNewForm';
import { environment } from '../../environment/environment';
import { Payment } from '../constants/Payment';

@Injectable({
  providedIn: 'root'
})
export class PassportApplyService {

  NewPassportApplyURL = environment.NewPassportApplyUrl;
  ReNewPassportURL = environment.ReNewPassportUrl;


  constructor(private http:HttpClient) { }

  SaveNewPassportForm = (data:INewPassportForm):Observable<INewPassportForm> =>{
    return this.http.post<INewPassportForm>(this.NewPassportApplyURL,data);
  }
  GetAllNewPassportData = ():Observable<INewPassportForm[]> =>{
    return this.http.get<INewPassportForm[]>(this.NewPassportApplyURL);
  }
  SaveReNewPassportForm = (data:IReNewForm):Observable<IReNewForm> =>{
    return this.http.post<IReNewForm>(this.ReNewPassportURL,data);
  }

  GetAllReNewPassportData = ():Observable<IReNewForm[]> =>{
    return this.http.get<IReNewForm[]>(this.ReNewPassportURL);
  }
  GetAllPassportData = (): Observable<(INewPassportForm | IReNewForm)[]> => {
    const newPassport$ = this.http.get<INewPassportForm[]>(`${this.NewPassportApplyURL}`);
    const renewPassport$ = this.http.get<IReNewForm[]>(`${this.ReNewPassportURL}`);

    return forkJoin([newPassport$, renewPassport$]).pipe(
      map(([newPassportData, renewPassportData]) => {
        return [...newPassportData, ...renewPassportData];
      }),
      catchError(error => {
        console.error('Error fetching data', error);
        return of([] as (INewPassportForm | IReNewForm)[]);
      })
    );
  };
  getNewPassportById(id: string): Observable<INewPassportForm | undefined> {
    return this.http.get<IReNewForm>(`${this.NewPassportApplyURL}/${id}`)
  }

  editNewPassportData = (id:string,data:INewPassportForm):Observable<INewPassportForm> =>{
    return this.http.put<INewPassportForm>(`${this.NewPassportApplyURL}/${id}`,data);
  }
  getReNewPassportById = (id:string):Observable<IReNewForm> =>{
    return this.http.get<IReNewForm>(`${this.ReNewPassportURL}/${id}`)
  }

  editReNewPassportData = (id:string,data:IReNewForm):Observable<IReNewForm> =>{
    return this.http.put<IReNewForm>(`${this.ReNewPassportURL}/${id}`,data);
  }

  updatePaymentStatus(id: string,data:INewPassportForm | IReNewForm | undefined,isReNew:Boolean|undefined): Observable<INewPassportForm | IReNewForm> {
    const url = isReNew ? `${this.ReNewPassportURL}/${id}` : `${this.NewPassportApplyURL}/${id}`;
    return this.http.put<INewPassportForm | IReNewForm>(url, data);
  }
}
