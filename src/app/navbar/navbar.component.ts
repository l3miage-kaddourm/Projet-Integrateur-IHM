import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser: any = null;

  constructor(private authService: AuthService, private searchService: SearchService) {
    this.authService.currentUserSubject.subscribe(user => {
      this.currentUser = user;
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.setSearchQuery(input.value);
  }
}
