import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: 'ul',

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  updateActiveItem: task(function*(items) {
    if (isEmpty(items)) {
      yield timeout(1000);
    }

    this.set('activeItems', items);
    console.log(this.activeItems.map(item => item.elementId));
  }).restartable(),

  actions: {
    setActiveItem(item) {
      this.updateActiveItem.perform([ item ]);
    },

    clearActiveItem() {
      this.updateActiveItem.perform([]);
    }
  }
});
