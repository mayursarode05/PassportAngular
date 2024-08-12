import { Component, OnInit } from '@angular/core';
import { PassportApplyService } from '../../../core/services/passport-apply.service';
import { CommonModule } from '@angular/common';
import { INewPassportForm } from '../../../core/interfaces/INewPassportForm';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { PassportStatus } from '../../../core/constants/PassportStatus';

@Component({
  selector: 'app-new-passport-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[PassportApplyService],
  templateUrl: './new-passport-list.component.html',
  styleUrl: './new-passport-list.component.css'
})
export class NewPassportListComponent implements OnInit {
  newPassportList: INewPassportForm[] = [];
  isDetailsModalVisible: boolean = false;
  selectedPassport: INewPassportForm | undefined = undefined;
  passportStatus:string[] = [];


  constructor(private service: PassportApplyService) {}

  ngOnInit(): void {
    this.InItComponent();
    this.passportStatus = Object.values(PassportStatus)
  }

  InItComponent = () => {
    this.service.GetAllNewPassportData().subscribe((data) => {
      this.newPassportList = data;
    });
  }

  HandleEdit = (id:string) => {
    this.service.getNewPassportById(id).subscribe(
      (data)=>{
        this.selectedPassport = data;
        this.isDetailsModalVisible = true;
      }
    )
  }

  HandleSave = () => {
    if (this.selectedPassport) {
      this.service.editNewPassportData(this.selectedPassport.id, this.selectedPassport).subscribe(
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

  ShowAlert = (data: INewPassportForm | null, message: string, icon: 'success' | 'error') => {
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
