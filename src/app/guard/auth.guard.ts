import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.session();
    // this.canActivate()
  }
  // test permisions
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    // console.log(u);
    if (u !== null) {
      // this.router.navigate(['/dashboard']);
      return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  // session get 
  session() {
    const user = localStorage.getItem('token');
    const u = JSON.parse(user);
    if (u !== null) {
      // this.router.navigate(['/dashboard']);
      return true;

      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
