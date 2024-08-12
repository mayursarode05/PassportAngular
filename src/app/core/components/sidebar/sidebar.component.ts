import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;


  ngAfterViewInit() {
    this.toggleBtn.nativeElement.addEventListener("click", () => {
      document.querySelector("#sidebar")?.classList.toggle("expand");
    });
  }  
}