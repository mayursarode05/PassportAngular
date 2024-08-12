import { Component, OnInit } from '@angular/core';
import { IFeedbackForm } from '../../../core/interfaces/IFeedbackForm';
import { UserService } from '../../../core/services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUserRegistration } from '../../../core/interfaces/IUserRegistration';
import { map } from 'rxjs';

@Component({
  selector: 'app-complaint-status',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './complaint-status.component.html',
  styleUrl: './complaint-status.component.css'
})
export class ComplaintStatusComponent implements OnInit{
  complaintList:IFeedbackForm[]=[];
  selectedComplaint: IFeedbackForm | null = null;
  isEditModalVisible: boolean = false;
  feedbackStatus:string[] = [];
  loggedInUserData:IUserRegistration = <IUserRegistration>{};
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.InItComponent();
    //this.feedbackStatus = Object.values(FeedbackStatus);
  }

  InItComponent = () =>{
    if(typeof window !== 'undefined' && window.localStorage){
      const storedUserData = localStorage.getItem('loggedUser');
      if(storedUserData)
      this.loggedInUserData = JSON.parse(storedUserData) as IUserRegistration;
    }
    this.userService.GetUserComplaints().pipe(
      map(data => data.filter(x => x.email === this.loggedInUserData.email))
    ).subscribe(
      (data)=>{
        this.complaintList = data;
      }
    )
    
  }
}
