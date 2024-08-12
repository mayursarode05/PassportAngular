import { Component, OnInit } from '@angular/core';
import { PassportApplyService } from '../../../core/services/passport-apply.service';
import { IReNewForm } from '../../../core/interfaces/IReNewForm';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { PassportStatus } from '../../../core/constants/PassportStatus';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-re-new-passport-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './re-new-passport-list.component.html',
  styleUrl: './re-new-passport-list.component.css'
})
export class ReNewPassportListComponent implements OnInit {
  newPassportList: IReNewForm[] = [];
  isDetailsModalVisible: boolean = false;
  selectedPassport: IReNewForm | null = null;
  passportStatus:string[] = [];


  constructor(private service: PassportApplyService) {}

  ngOnInit(): void {
    this.InItComponent();
    this.passportStatus = Object.values(PassportStatus)
  }

  InItComponent = () => {
    this.service.GetAllReNewPassportData().subscribe((data) => {
      this.newPassportList = data;
    });
  }

  HandleEdit = (id:string) => {
    this.service.getReNewPassportById(id).subscribe(
      (data)=>{
        this.selectedPassport = data;
        this.isDetailsModalVisible = true;
      }
    )
  }

  HandleSave = () => {
    if (this.selectedPassport) {
      this.service.editReNewPassportData(this.selectedPassport.id, this.selectedPassport).subscribe(
        (updatedPassport) => {
          this.ShowAlert(updatedPassport, 'Passport updated successfully', 'success');
          this.isDetailsModalVisible = false;
          this.InItComponent();
        }
      );
    }
  }

  // HandleDelete = (id: string) => {
  //   if (id !== null) {
  //     Swal.fire({
  //       title: "Are you sure",
  //       text: "You want to delete this passport",
  //       icon: "info",
  //       showCancelButton: true,
  //       confirmButtonText: "Delete",
  //     }).then((res) => {
  //       if (res.isConfirmed) {
  //         this.service.deletePassport(id).subscribe(
  //           (data: INewPassportForm) => {
  //             this.ShowAlert(data, 'Passport deleted successfully', 'success');
  //           }
  //         );
  //       }
  //     });
  //   }
  // }

  ShowAlert = (data: IReNewForm | null, message: string, icon: 'success' | 'error') => {
    Swal.fire({
      title: icon === 'success' ? 'Success' : 'Error',
      text: message,
      icon: icon
    }).then(() => {
      if (icon === 'success') {
        this.InItComponent();
      }
    });
  }
}
