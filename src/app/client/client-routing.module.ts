import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './client-list.component';
import { ClientDetailsComponent } from './client-details.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
    {
        path: '', component: ClientComponent, children: [
            { path: '', component: ClientListComponent },
            { path: ':id', component: ClientDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientRoutingModule { }
