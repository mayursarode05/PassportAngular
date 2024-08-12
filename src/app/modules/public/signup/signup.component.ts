import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import Swal from 'sweetalert2';
import { IUserRegistration } from '../../../core/interfaces/IUserRegistration';
import { Role } from '../../../core/constants/Role';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  providers:[UserService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm:FormGroup;
  allUserData:IUserRegistration[] = [];

  constructor(private fb:FormBuilder,private service:UserService,private router:Router){
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      surname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
      loginId: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25) ]],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      role:[Role.User]
    })
    
    
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser = () =>{
    this.service.GetAllUser().subscribe(
      (data)=>{
        this.allUserData = data;
      }
    )
  }

  validateUser = ():boolean =>{
    console.log(this.allUserData);
    let user = this.allUserData.some(x => x.loginId === this.signupForm.value.loginId &&
                                          x.email === this.signupForm.value.email)
                                          console.log(user)
    return user
  }
  handleClear(): void {
    Swal.fire({
      title: "Are you sure",
      text: "You want to clear all data",
      icon: "warning"
    }).then((res)=>{
      if(res.isConfirmed){
        this.signupForm.reset();
      }
    });
  }

  handleSubmit(): void {
    const isValidUser =  this.validateUser();
     
    if (this.signupForm.valid) {
      if(!isValidUser){
        this.service.RegisterUser(this.signupForm.value).subscribe((data)=>{
          Swal.fire({
                  title: "Sign Up Successfull",
                  text: "Excellent",
                  icon: "success"
                }).then((res)=>{
                  if(res.isConfirmed){
                    this.router.navigate(['login']);
                  }
                });
        })

      }else{
          Swal.fire({
            title: "User already exist",
            text: "Same user already exist",
            icon: "info"
          });
        }
    }else {
        // Mark all controls as touched to trigger validation messages
        this.signupForm.markAllAsTouched();
    }
  
  
  }

}
