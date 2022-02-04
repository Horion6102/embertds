import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  @service productServices;

  model() {
    return this.productServices;
  }

  get select() {
    if (this.toggleActive(service) == 0) {
      return 'Aucun service selectionné';
    } else {
      return this.toggleActive(service) + 'services selectionnés';
    }
  }

  @action toggleActive(service) {
    set(service, 'active', !service.active);
  }
}
