import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ClientDetailsComponent } from './client-details.component';
import { ClientListComponent } from './client-list.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientService } from './client.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ClientRoutingModule, CommonModule],
    declarations: [ClientComponent, ClientDetailsComponent, ClientListComponent],
    providers: [ClientService],
})
export class ClientModule { }
