import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {

    private delayTime = 500;

    private users: User[] = [
        {
            FirstName: 'Janusz', LastName: 'Kowalski', Id: 1, Email: 'janusz.kowalski@test.pl'
        },
        {
            FirstName: 'Adam', LastName: 'Nowak', Id: 2, Email: 'adam.nowak@test.pl'
        },
        {
            FirstName: 'Anna', LastName: 'Kwiatkowska', Id: 3, Email: 'anna.kwiatkowska@test.pl'
        },
        {
            FirstName: 'Karyna', LastName: 'Sebiksowa', Id: 4, Email: 'karyna.sebiksowa@test.pl'
        }
    ];

    constructor() { }

    getUsers(): Observable<User[]> {
        return of(this.users).pipe(delay(this.delayTime));
    }

    getUserDetail(id: number): Observable<User> {
        return of(this.users.find(user => user.Id === id))
            .pipe(delay(this.delayTime));
    }
}
