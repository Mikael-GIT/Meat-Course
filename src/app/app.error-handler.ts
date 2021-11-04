import { Injector, NgZone } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { ErrorHandler, Injectable } from '@angular/core'
import 'rxjs/add/observable/throw'
import { NotificationService } from './shared/messages/notification.service'
import { LoginService } from './security/login/login.service'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private ns: NotificationService, private injector: Injector, private zone: NgZone){
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any){
    if(errorResponse instanceof HttpErrorResponse){
      const message = errorResponse.error.message
      const loginService = this.injector.get(LoginService)
      this.zone.run(() => {
        switch(errorResponse.status){
          case 401:
            loginService.handleLogin();
          break;
          case 403:
            this.ns.notify(message || "Não autorizado")
          break;
          case 404:
            this.ns.notify(message || "Recurso não encontrado")
          break;
        }
      })
    super.handleError(errorResponse);
  }
}
}
