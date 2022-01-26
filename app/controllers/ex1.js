import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  enregistrement = '';
  max = 100;

  get size() {
    return this.max - this.content.length;
  }

  get style() {
    if (this.size > 50) {
      return 'alert alert-success';
    }
    if (this.size < 50 && this.size > 20) {
      return 'alert alert-warning';
    }
    if (this.size < 20) {
      return 'alert alert-danger';
    }
    return 'alert alert-success';
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
