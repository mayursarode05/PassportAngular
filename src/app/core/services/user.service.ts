import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUserRegistration } from '../interfaces/IUserRegistration';
import { IFeedbackForm } from '../interfaces/IFeedbackForm';
import { Feedback } from '../constants/Feedback';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userURL = environment.userUrl;
  feedbackURL = environment.feedbackUrl;

  // isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http:HttpClient) {   }

  RegisterUser = (user:IUserRegistration):Observable<IUserRegistration> =>{
    return this.http.post<IUserRegistration>(this.userURL,user);
  }

  GetAllUser = ():Observable<IUserRegistration[]> =>{
    return this.http.get<IUserRegistration[]>(this.userURL);
  }

  SaveFeedback = (data:IFeedbackForm):Observable<IFeedbackForm> =>{
    return this.http.post<IFeedbackForm>(this.feedbackURL,data)
  }
  GetUserFeedback = (): Observable<IFeedbackForm[]> => 
    this.http.get<IFeedbackForm[]>(this.feedbackURL).pipe(
      map(data => data.filter(x => x.feedbackType === Feedback.Feedback))
  );

  GetUserComplaints = ():Observable<IFeedbackForm[]> =>
    this.http.get<IFeedbackForm[]>(this.feedbackURL).pipe(
      map(data => data.filter(x => x.feedbackType === Feedback.Complaint))
    );
  

  deleteUser = (id: string): Observable<IUserRegistration> =>{
      return this.http.delete<IUserRegistration>(`${this.userURL}/${id}`);
  }

  getUserById = (id: string):Observable<IUserRegistration> =>{
    return this.http.get<IUserRegistration>(`${this.userURL}/${id}`);
  }
  
  editUser = (id: string,user: IUserRegistration):Observable<IUserRegistration> =>{
    return this.http.put<IUserRegistration>(`${this.userURL}/${id}`,user)
  }

  deleteComplaintById = (id:string):Observable<IFeedbackForm> =>{
    return this.http.delete<IFeedbackForm>(`${this.feedbackURL}/${id}`);
  }

  getComplentById = (id:string):Observable<IFeedbackForm> =>{
    return this.http.get<IFeedbackForm>(`${this.feedbackURL}/${id}`)
  }
  updateComplaintStatus = (id:string,feedbackData:IFeedbackForm):Observable<IFeedbackForm> =>{
    return this.http.put<IFeedbackForm>(`${this.feedbackURL}/${id}`,feedbackData)
  }

  // isLoggedIn = () =>{
  //   if(typeof window !== 'undefined' && window.localStorage){
  //     return !!localStorage.getItem('loggedUser');
  //   }else{
  //     return false;
  //   }
  // }

}



