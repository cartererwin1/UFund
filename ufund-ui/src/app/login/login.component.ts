import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  users: User[] = [];
  adminusername: string = "admin";
  adminpassword: string = "Team 3";
  errorMsg = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    localStorage.clear();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }


  isAdmin(username: string, password: string) : boolean {
    return username == this.adminusername && password == this.adminpassword;
  }
  isNewUser(username: string) : boolean {
    if(this.users.includes(new User(-2, username, "doesntmatter"))) {
      return false;
    } else {
      return true;
    }
  }
  
  login(username:string, password:string) : void {
    if (username.trim().length === 0){
      this.errorMsg = "Username is required";
    }else if (password.trim().length === 0){
      this.errorMsg = "Password is required";
    }else{
      this.errorMsg="";
      this.userService.login(username, password);
      if(this.isNewUser(username)) {this.add(username, password)}
      localStorage.setItem("currentUser", username);
      if(this.isAdmin(username, password)) {
        window.location.href="http://localhost:4200/adminpage";
      } else {
        window.location.href="http://localhost:4200/dashboard";
      }
    }
  }

  //add(name: string): void {
  add(username: string, password: string): void {
    username = username.trim();
    //type = type.trim();
    if (!username) { return; }
    //if(this.isNewUser(username, password)) {
      this.userService.addUser({username, password} as User)
      .subscribe(user => {
        this.users.push(user);
      });
    //}
    
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.username).subscribe();
  }
}