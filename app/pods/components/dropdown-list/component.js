import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  updateActiveItems: task(function*(items) {
    if (isEmpty(items)) {
      yield timeout(200);
    }

    this.set('activeItems', items);
  }).restartable(),

  setActiveItems(...items) {
    this.updateActiveItems.perform(items);
  },

  clearActiveItems() {
    this.updateActiveItems.perform([]);
  },

  actions: {
    setActiveItems(...items) {
      this.setActiveItems(...items);
    },

    clearActiveItems() {
      this.clearActiveItems();
    }
  }
});
