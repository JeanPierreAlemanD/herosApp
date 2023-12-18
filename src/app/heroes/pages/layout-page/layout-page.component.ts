import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  public SidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Nuevo', icon: 'add', url: './nuevo' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  get CurrentUser(): User | undefined {
    return this.authService.currentUser
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
