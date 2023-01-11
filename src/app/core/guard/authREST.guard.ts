
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
// import { USER_STORAGE_KEY } from "@shared/constants/constant";
import { AuthRESTService } from '@services/authREST.service';

@Injectable({ providedIn: 'root' })
export class AuthRESTGuard implements CanActivate {
  constructor(
    private authRESTService: AuthRESTService,
    private  router: Router
    ){ }

  canActivate(){
    if (this.authRESTService.getCurrentUser()){
      return true;
    }else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}