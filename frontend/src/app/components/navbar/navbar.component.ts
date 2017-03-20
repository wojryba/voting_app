import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare var Auth0Lock: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
