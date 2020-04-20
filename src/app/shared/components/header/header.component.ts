import { Router } from '@angular/router';
import { User } from './../../models/auth.model';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  user:string;

  constructor(private authService:AuthService,private route:Router) { }
  ngOnInit() { 
    this.user = this.authService.getloggedUser();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  logout(){
    this.authService.logout();
    this.route.navigate(["/"]);
  }
}
