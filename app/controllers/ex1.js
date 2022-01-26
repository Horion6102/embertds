import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  enregistrement = '';
  max = 100;

  get size() {
    this.info = 'Note modifié';
    return this.max - this.content.length;
  }

  @action
  efface() {
    this.content = '';
    this.info = '';
  }

  @action
  enregistre() {
    this.info = 'Enregistré !';
    this.enregistrement = this.content;
  }

  @action
  update() {
    this.info = 'Note modifié !';
  }
}
