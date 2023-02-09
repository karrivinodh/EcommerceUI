import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit  {
  container!: ViewContainerRef;
  ForgotPasswordForm!: FormGroup;
  message = '';
  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private utilityService: UtilityService
  ) {}
  ngOnInit(): void {
    this.ForgotPasswordForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  forgotpassword() {
    this.navigationService
      .forgotPassword(this.Email.value, this.PWD.value)
      .subscribe((res: any) => {
        this.message="Password changed successfully";
      /*  if (res.toString() !== 'invalid') {
          this.message = 'Password Changed Successfully.';
          this.utilityService.setUser(res.toString());
          console.log(this.utilityService.getUser());
        } else {
          this.message = 'Invalid Email';
        }*/
      });
  }

  get Email(): FormControl {
    return this.ForgotPasswordForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.ForgotPasswordForm.get('pwd') as FormControl;
  }


}
