import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  onMouseEnter() {},
  onMouseLeave() {},

  isActive: computed('activeItems.[]', function() {
    return this.activeItems[0] === this;
  }),

  mouseEnter() {
    this.onMouseEnter(this);
  },

  mouseLeave() {
    this.onMouseLeave(this);
  }
});
