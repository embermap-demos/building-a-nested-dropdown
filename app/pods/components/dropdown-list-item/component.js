import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',

  activeItem: null,
  onMouseEnter() {},
  onMouseLeave() {},

  isActive: computed('activeItem', function() {
    return this.activeItem === this;
  }),

  mouseEnter() {
    this.onMouseEnter(this);
  },

  mouseLeave() {
    this.onMouseLeave(this);
  }
});
