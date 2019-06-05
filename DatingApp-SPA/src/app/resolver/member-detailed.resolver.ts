import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_Models/user';
import { UsersService } from '../services/users.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberDetailedResolver implements Resolve<User> {

    constructor(private userService: UsersService, private router: Router,
        private alertify: AlertifyService) { }
        resolve(route: ActivatedRouteSnapshot): Observable<User> {
            return this.userService.getUser(route.params['id']).pipe(
                catchError( error => {
                    this.alertify.error('problem retrieving data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );

        }
}
