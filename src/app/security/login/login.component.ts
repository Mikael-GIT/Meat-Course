import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

  }

  ngOnInit() {
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
    response => //httpResponseError
    this.notificationService.notify(response.error.message),
    ()=> {
      this.router.navigate([atob(this.navigateTo)])
    })
  }
}
