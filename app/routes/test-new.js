import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import contacts from "../classes/contacts";

export default class TestNewRoute extends Route {
  @service store;

  model() {
    return new contacts(this.store.findAll('contact'));
  }

  @action add(nom,prenom,email) {
    let contact = this.store.createRecord('contact', { nom: nom, prenom:prenom, email:email});
    contact.save();
  }

  @action delete(contact){
    contact.deleteRecord();
    contact.save();
  }
}
