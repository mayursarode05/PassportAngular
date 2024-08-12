import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PassportApplyService } from '../../../core/services/passport-apply.service';
import { INewPassportForm } from '../../../core/interfaces/INewPassportForm';
import { IReNewForm } from '../../../core/interfaces/IReNewForm';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-track-status',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './track-status.component.html',
  styleUrl: './track-status.component.css'
})
export class TrackStatusComponent implements OnInit {

  trackForm:FormGroup = <FormGroup>{};
  isUserPassportExist:Boolean = false;
  passportData!:INewPassportForm[] | IReNewForm[];
  
  constructor(private fb: FormBuilder,private router:Router,private service:PassportApplyService) {
    
  }

  ngOnInit(): void {
    this.trackForm = this.InItForm();
  }
  InItForm = ():FormGroup =>{
    return this.trackForm = this.fb.group({
      applicationType: ['', Validators.required],
      passportNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required]
    });
  }
  handleSubmit(): void {
    if (this.trackForm.valid) {
      this.ValidateUserExist();
    } else {
      // Mark all controls as touched to trigger validation messages
      this.trackForm.markAllAsTouched();
    }
  }

  ValidateUserExist = () =>{
      this.service.GetAllPassportData().subscribe(
      (data)=>{
        console.log(data)
        this.passportData = data;
        let isPassport = data.some(x => x.passportNumber == this.trackForm.get('passportNumber')?.value &&
                       x.applicantForm.dob == this.trackForm.get('dob')?.value
        );
        this.ShowAlert(isPassport);
      }
    )
  }

  ShowAlert = (isPassport:Boolean) => {
    if(isPassport){
      Swal.fire({
        title: "Excellent",
        text: "Track your status",
        icon: "success"
      }).then((res)=>{
        if(res.isConfirmed){
          this.isUserPassportExist = true;
        }
      });
    }else{
      Swal.fire({
        title: "Passport does not exist",
        text: "Please enter correct details",
        icon: "error"
      });
    }
  }
}
