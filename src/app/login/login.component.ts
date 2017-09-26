import 'rxjs/add/operator/finally';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../environments/environment';
import { Logger } from '../core/logger.service';
import { I18nService } from '../core/i18n.service';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { Angular2TokenService } from 'angular2-token';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  version: string = environment.version;
  error: string = null;
  loginForm: FormGroup;
  isLoading = false;

  @Output() onFormResult = new EventEmitter<any>();
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private authenticationService: AuthenticationService,
              private tokenAuthService: Angular2TokenService) {
    this.createForm();
  }

  ngOnInit() { }

  login() {
    console.log(this.loginForm);
    this.isLoading = true;
    // this.authenticationService.login(this.loginForm.value)
    //   .finally(() => {
    //     this.loginForm.markAsPristine();
    //     this.isLoading = false;
    //   })
      // .subscribe(credentials => {
      //   log.debug(`${credentials.username} successfully logged in`);
      //   this.router.navigate(['/'], { replaceUrl: true });
      // }, error => {
      //   log.debug(`Login error: ${error}`);
      //   this.error = error;
      // });

    this.tokenAuthService.signIn({email: this.loginForm.value.username, password: this.loginForm.value.password})
      .finally(() => {
        this.loginForm.markAsPristine();
        this.isLoading = false;
      })
      .subscribe( res => {
        log.debug(res);
        if(res.status == 200){
          this.authenticationService.login(this.loginForm.value).
          subscribe(credentials => {
            this.onFormResult.emit({signedIn: true, res});
            log.debug(`${credentials.username} successfully logged in`);
            log.debug(this.tokenAuthService.userSignedIn());
            this.router.navigate(['/'], { replaceUrl: true });
          }, error => {
            log.debug(`Login error: ${error}`);
            this.error = error;
          });
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

}
