import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: 'ul',

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  updateActiveItems: task(function*(items) {
    if (isEmpty(items)) {
      yield timeout(1000);
    }

    this.set('activeItems', items);
    console.log(this.activeItems.map(item => item.elementId));
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
