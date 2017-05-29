import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../classes/user';
@Pipe({
  name: 'users_filter',
  pure: false
})
export class UsersPipe implements PipeTransform {

  transform(allUsers: User[], status?: any, username?: any, role?: any, credentials?: any): any {
    return allUsers.filter(user => {
      if (user.status == status
        && (user.username.includes(username) || username == '')
        && (user.role == role || role == '')
        && (user.credentials.includes(credentials) || credentials == ''))
          return user;
    });
  }

}
