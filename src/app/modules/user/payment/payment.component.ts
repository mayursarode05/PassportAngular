import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PassportApplyService } from '../../../core/services/passport-apply.service';
import { INewPassportForm } from '../../../core/interfaces/INewPassportForm';
import { IReNewForm } from '../../../core/interfaces/IReNewForm';
import { Router } from '@angular/router';
import { Payment } from '../../../core/constants/Payment';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  providers:[PassportApplyService],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup = <FormGroup>{};
  trackForm:FormGroup = <FormGroup>{};
  passportData!:INewPassportForm[] | IReNewForm[];
  isUserPassportExist:Boolean = false;
  router = inject(Router);
  filteredPassport:  IReNewForm | INewPassportForm | undefined = < IReNewForm>{}
  constructor(private fb: FormBuilder,private service:PassportApplyService) {
    
  }

  ngOnInit(): void {
    this.trackForm = this.InItTrackForm();
    this.paymentForm = this.InItPaymentForm();
  }

  InItTrackForm = ():FormGroup =>{
    return this.trackForm = this.fb.group({
      applicationType: ['', Validators.required],
      passportNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required]
    });
  }

  InItPaymentForm = ():FormGroup =>{
    return this.paymentForm = this.fb.group({
      paymentType: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cardNumber: ['', [Validators.required]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      amount: [{ value: 350, disabled: true }]
    });
  }

  ProceedToPay(): void {
    if (this.trackForm.valid) {
      this.ValidateUserExist();
    } else {
      // Mark all controls as touched to trigger validation messages
      this.trackForm.markAllAsTouched();
    }
  }
  MakePayment = () =>{
    if(this.paymentForm.valid){
      Swal.fire({
        title: "Payment Successful",
        text: "Excellent",
        icon: "success"
      }).then((res)=>{
        if(res.isConfirmed){
          this.UpdateUserPayment();
          this.router.navigate(['user']);
        }
      });
    }else{
      this.paymentForm.markAllAsTouched();
    }
  }
  ValidateUserExist = () =>{
      this.service.GetAllPassportData().subscribe(
      (data)=>{
        console.log(data)
        this.passportData = data;
        this.filteredPassport = data.find(x => x.passportNumber == this.trackForm.get('passportNumber')?.value &&
                       x.applicantForm.dob == this.trackForm.get('dob')?.value
        );
        this.ShowAlert(this.filteredPassport);
      }
    )
  }

  ShowAlert = (isPassport:INewPassportForm | undefined) => {
    if(isPassport){
      Swal.fire({
        title: "Excellent",
        text: "Select payment options",
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

  UpdateUserPayment = () =>{
    this.filteredPassport!.paymentStatus = Payment.Paid
    this.service.updatePaymentStatus(this.filteredPassport!.id,this.filteredPassport,this.filteredPassport?.isReNew).subscribe(
      (data)=>{}
    )
  }
}
