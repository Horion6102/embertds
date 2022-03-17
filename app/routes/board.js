import { service } from '@ember/service';
import { action } from '@ember/object';
import AbstractRoute from './AbstractRoute';
import RSVP from 'rsvp';

export default class BoardRoute extends AbstractRoute {

  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.refresh();
  }
}
