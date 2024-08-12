import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FeedbackStatus } from '../../../core/constants/FeedbackStatus';
import { Feedback } from '../../../core/constants/Feedback';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  feedbackForm:FormGroup = <FormGroup>{};
  constructor(private fb: FormBuilder,private service:UserService,private router:Router) {
    
  }

  ngOnInit(): void {
    this.feedbackForm = this.InItForm();
  }

  InItForm = () =>{
    return this.feedbackForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(45)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
      feedbackType: ['', Validators.required],
      feedback: ['', Validators.required],
      feedbackStatus:[FeedbackStatus.Pending]
    });
  }

  SaveFeedback = () =>{
    this.service.SaveFeedback(this.feedbackForm.value).subscribe((data)=>{
      Swal.fire({
        title: "Feedback Sent",
        text: "Your feedback is sent",
        icon: "success"
      }).then((res)=>{
        if(res.isConfirmed){
          this.router.navigate(['user']);
        }
      });
    });
  }

  handleSubmit(): void {
    if (this.feedbackForm.valid) {
        this.SaveFeedback();
      // Handle form submission logic here
    } else {
      // Mark all controls as touched to trigger validation messages
      this.feedbackForm.markAllAsTouched();
    }
  }
}
