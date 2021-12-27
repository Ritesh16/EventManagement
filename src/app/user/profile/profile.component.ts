import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router,
      private toastr: ToastrService) { 

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
         Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(){
    this.router.navigateByUrl('/events');
  }

  saveProfile(profileFormValues){
    if(this.profileForm.valid){
      this.authService.updateUserProfile(profileFormValues.firstName, profileFormValues.lastName)
        .subscribe(()=>{
          this.toastr.success('Profile saved.');
        });
    }
  }

  validFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  logout() { 
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/user/login');
    });
  }
}
