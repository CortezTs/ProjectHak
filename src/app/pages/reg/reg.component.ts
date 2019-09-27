import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

@Component({templateUrl: 'reg.component.html'})
export class RegComponent implements OnInit {
    regForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/pages/projects']);
        }
    }

    ngOnInit() {
        this.regForm = this.formBuilder.group({
            name: ['', Validators.required],
            email:['', Validators.required],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required],
            surname: ['', Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['/pages/projects'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.regForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.regForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.registration(this.f.name.value, this.f.email.value,
                                                this.f.password.value, this.f.password_confirmation.value,
                                                this.f.surname.value);
    }
}
