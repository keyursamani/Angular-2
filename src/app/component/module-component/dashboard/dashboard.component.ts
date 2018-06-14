import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../_models/index';
import { UserService } from '../../../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  carsList:any;
  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.currentUser);
  }

  ngOnInit() {
    this.carsList = ['BMW Serie 1', 'BMW Serie 2', 'BMW Serie 3', 'Angular Car', 'Angular 2 iCar'];
    this.users=[];
      this.loadAllUsers();
     
  }

  data(){
    
  }
  deleteUser(id: number) {
      this.userService.delete(id).subscribe(res => {
          
          console.log(res);
          
          });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { 
          this.users = users; 
          console.log(this.users);
        }
    );
  }
}
