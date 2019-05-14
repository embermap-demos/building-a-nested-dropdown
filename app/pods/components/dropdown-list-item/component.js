import Component from '@ember/component';
import { computed } from '@ember/object';
import Ember from 'ember';

export default Component.extend({

  tagName: '',

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  didInsertElement() {
    this._super(...arguments);

    let { firstNode, lastNode } = Ember.ViewUtils.getViewBounds(this);

    let firstElement = firstNode instanceof Text ? firstNode.nextElementSibling : firstNode;
    let lastElement = lastNode instanceof Text ? lastNode.previousElementSibling : lastNode;

    if (firstElement !== lastElement) {
      throw `DropdownListItem: An Item's content must have a single root HTML element.`;
    }

    this.rootElement = firstElement;

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.rootElement.addEventListener('mouseenter', this.handleMouseEnter);
    this.rootElement.addEventListener('mouseleave', this.handleMouseLeave);
  },

  willDestroyElement() {
    this._super(...arguments);

    this.rootElement.removeEventListener('mouseenter', this.handleMouseEnter);
    this.rootElement.removeEventListener('mouseleave', this.handleMouseLeave);
  },

  isActive: computed('activeItems.[]', function() {
    return this.activeItems[0] === this;
  }),

  handleMouseEnter() {
    this.setActiveItems(this);
  },

  handleMouseLeave() {
    this.clearActiveItems();
  }
});
