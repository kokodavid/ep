import { Idle,IdleExpiry, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core'
import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
@Injectable({
    providedIn: 'root'
})
export class SessionService{
    constructor(
        private idle: Idle,
        private alertService: AlertService,
        private authService: AuthService,
    ){
        this.sessionTimeOut();
    }

     //session timeout
  sessionTimeOut(){
    
    this.idle.setIdle(5*60);
    this.idle.setTimeout(1);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeoutWarning.subscribe((countdown: number) =>{
      this.alertService.presentToast('Logging out');
    });

    this.idle.onTimeout.subscribe(()=>{
      this.alertService.presentToast('Logging out');
      this.authService.logout();

    });
    this.idle.watch();
  }
}