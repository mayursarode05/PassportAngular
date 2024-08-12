import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IUserRegistration } from '../../../core/interfaces/IUserRegistration';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  providers:[UserService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  isDetailsModalVisible: boolean = false;
  loggedInUserData:IUserRegistration = <IUserRegistration>{};
  userUpdatedData: IUserRegistration = <IUserRegistration>{};
  role:string = '';
  constructor(private service:UserService){}
  
  ngOnInit(): void {
    this.InItComponent();
  }

  InItComponent = () =>{
    if(typeof window !== 'undefined' && window.localStorage){
      const storedUserData = localStorage.getItem('loggedUser');
      if(storedUserData)
      this.loggedInUserData = JSON.parse(storedUserData) as IUserRegistration;
      this.role = this.loggedInUserData.role;
    }
  }
  HandleEdit = () =>{
    this.isDetailsModalVisible = true;
    this.userUpdatedData = this.loggedInUserData;
  }

  HandleSave = () =>{
    this.service.editUser(this.loggedInUserData.id,this.userUpdatedData).subscribe(
      (data)=>{
        
      }
    )
  }
}
