import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
    ],

    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule
    ],
    exports: [],
})
export class AuthModule { }
