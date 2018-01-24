import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html'
})
export class ClientDetailsComponent implements OnInit {

  client$: Observable<Client>;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.client$ = this.clientService.getClientDetail(id);
  }

}
