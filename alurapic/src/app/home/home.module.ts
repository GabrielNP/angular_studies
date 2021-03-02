import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [ SignInComponent, SignUpComponent ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        VMessageModule
    ]
})
export class HomeModule { }
