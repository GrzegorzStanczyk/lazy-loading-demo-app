import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients$: Observable<Client[]>;

  ngOnInit() {
    this.clients$ = this.clientService.getClients();
  }

}
