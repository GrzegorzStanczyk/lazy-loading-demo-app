import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details.component';
import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '', component: UserListComponent },
            { path: ':id', component: UserDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }
