import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/models';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-vendorregister',
  templateUrl: './vendorregister.component.html',
  styleUrls: ['./vendorregister.component.css']
})
export class VendorregisterComponent implements OnInit {
  vendorregisterForm!: FormGroup;
  invaildRPWD: boolean = false;
  message = '';

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.vendorregisterForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      mobile: ['', Validators.required],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      rpwd: [''],
    });
  }

  register() {
    let user: User = {
      id: 0,
      firstName: this.FirstName.value,
      lastName: this.LastName.value,
      email: this.Email.value,
      address: this.Address.value,
      mobile: this.Mobile.value,
      password: this.PWD.value,
      createdAt: '',
      modifiedAt: '',
    };

    this.navigationService.registerUser(user).subscribe((res: any) => {
      this.message = res.toString();
    });
  }

  //#region Getters
  get FirstName(): FormControl {
    return this.vendorregisterForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl {
    return this.vendorregisterForm.get('lastName') as FormControl;
  }
  get Email(): FormControl {
    return this.vendorregisterForm.get('email') as FormControl;
  }
  get Address(): FormControl {
    return this.vendorregisterForm.get('address') as FormControl;
  }
  get Mobile(): FormControl {
    return this.vendorregisterForm.get('mobile') as FormControl;
  }
  get PWD(): FormControl {
    return this.vendorregisterForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl {
    return this.vendorregisterForm.get('rpwd') as FormControl;
  }
  //#endregion
}

