import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './user-details.component';
import { UserListComponent } from './user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [UserRoutingModule, CommonModule],
    declarations: [UserComponent, UserDetailsComponent, UserListComponent],
    providers: [UserService],
})
export class UserModule { }
