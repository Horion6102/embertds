import Route from '@ember/routing/route';
import { service } from '@ember/service';
import AbstractRoute from './AbstractRoute';
import { action } from '@ember/object';

export default class EmployeesRoute extends AbstractRoute {
  @service store;

  model() {
    return this.store.findAll('employee');
  }
}
