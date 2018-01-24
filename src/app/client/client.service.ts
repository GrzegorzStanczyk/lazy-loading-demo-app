import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class ClientService {

    private delayTime = 500;

    private clients: Client[] = [
        {
            FirstName: 'Janusz', LastName: 'Kowalski', Id: 1, Company: {
                Address: 'Testowa 50, 00-001, Warszawa', Name: 'KowalPol', NIP: '5637636633'
            }
        },
        {
            FirstName: 'Adam', LastName: 'Nowak', Id: 2, Company: {
                Address: 'Testowa 60, 00-001, Warszawa', Name: 'Nowakx', NIP: '6846549005'
            }
        },
        {
            FirstName: 'Anna', LastName: 'Kwiatkowska', Id: 3, Company: {
                Address: 'Testowa 70, 00-001, Warszawa', Name: 'LiśćPol', NIP: '6276612527'
            }
        },
        {
            FirstName: 'Karyna', LastName: 'Sebiksowa', Id: 4, Company: {
                Address: 'Testowa 80, 00-001, Warszawa', Name: 'SebaPol', NIP: '2333858153'
            }
        }
    ];

    constructor() { }

    getClients(): Observable<Client[]> {
        return of(this.clients).pipe(delay(this.delayTime));
    }

    getClientDetail(id: number): Observable<Client> {
        return of(this.clients.find(client => client.Id === id))
            .pipe(delay(this.delayTime));
    }
}
