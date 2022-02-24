import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StepxController extends Controller {
  dispoItem = [];
  @tracked dispoItems_ = [];

  @action changeDispo(Element) {
    this.dispoItems_ = Element;
  }

  @action changeIncluded(Elements) {
    this.includedItems = Elements;
  }

  @action add(source, dest, what) {
    dest.pushObject(what);
    source.removeObjets(what);
  }
}
