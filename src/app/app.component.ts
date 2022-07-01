import { Component, OnInit } from '@angular/core';
import { IUser } from './domain/interfaces/user.interface';
import { UserService } from './infraestruture/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'flight-app';

  userData: IUser[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.readUser().subscribe((data) => {
      console.log('data', data);
      this.userData = [...data];
    });
  }
}
