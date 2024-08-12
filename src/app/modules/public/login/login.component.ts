import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import Swal from 'sweetalert2';
import { IUserRegistration } from '../../../core/interfaces/IUserRegistration';
import { Role } from '../../../core/constants/Role';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  providers:[UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;

  user:IUserRegistration | undefined = <IUserRegistration>{};

  constructor(private fb: FormBuilder, private router: Router,private service:UserService) {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(25)]]
    });
  }

  ngOnInit(): void {
    
  }
  handleSubmit(): void {
    if (this.loginForm.valid) {
      this.service.GetAllUser().pipe(
        map(data=>{
          this.user = data.find(
            (x) => x.loginId === this.loginForm.value.loginId &&
                   x.password === this.loginForm.value.password
        )})); 
        
        
      
        if(typeof window !== 'undefined' && window.localStorage){
          localStorage.setItem('loggedUser',JSON.stringify(this.user));
          //this.service.isLoggedIn$.next(true);
        }
        if (this.user !== undefined) {
          Swal.fire({
            title: "Login Successful",
            text: "Excellent",
            icon: "success"
          }).then((res) => {
            if (res.isConfirmed) {
              if (this.user?.role === Role.User) {
                this.router.navigate(['user']);
              } else {
                this.router.navigate(['admin']);
              }
            }
          });
        } else {
          Swal.fire({
            title: "Invalid Credentials",
            text: "Please enter correct credentials.",
            icon: "error"
          });
        }
      ;
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  

  // handleSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.service.GetAllUser().subscribe((data) => {
        
  //       this.user = data.find(
  //         (x) => x.loginId === this.loginForm.value.loginId &&
  //                x.password === this.loginForm.value.password
  //       );
  //       if(typeof window !== 'undefined' && window.localStorage){
  //         localStorage.setItem('loggedUser',JSON.stringify(this.user));
  //         //this.service.isLoggedIn$.next(true);
  //       }
  //       if (this.user !== undefined) {
  //         Swal.fire({
  //           title: "Login Successful",
  //           text: "Excellent",
  //           icon: "success"
  //         }).then((res) => {
  //           if (res.isConfirmed) {
  //             if (this.user?.role === Role.User) {
  //               this.router.navigate(['user']);
  //             } else {
  //               this.router.navigate(['admin']);
  //             }
  //           }
  //         });
  //       } else {
  //         Swal.fire({
  //           title: "Invalid Credentials",
  //           text: "Please enter correct credentials.",
  //           icon: "error"
  //         });
  //       }
  //     });
  //   } else {
  //     this.loginForm.markAllAsTouched();
  //   }
  // }
  

  HandleSignUpClick = () =>{
    this.router.navigate(['signup']);
  }
}
