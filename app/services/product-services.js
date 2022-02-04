import Service from '@ember/service';
//import {filterBy} from '@ember/object/computed';
import { dProducts, dPromos } from 'tds/data/datas';

export default class ProductServicesService extends Service {
  product = dProducts;
  promo = dPromos;

  //@filtetBy('product','active',true) activeServices;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let callSum = (somme, product) => product.price + somme;
    return this.activeServices.reduce(callSum, 0);
  }
}
