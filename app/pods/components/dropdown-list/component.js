import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  tagName: 'ul',

  activeItem: null,

  updateActiveItem: task(function*(item) {
    if (!item) {
      yield timeout(1000);
    }

    this.set('activeItem', item);
  }),

  actions: {
    setActiveItem(item) {
      this.updateActiveItem.perform(item);
    },

    clearActiveItem() {
      this.updateActiveItem.perform(null);
    }
  }
});
