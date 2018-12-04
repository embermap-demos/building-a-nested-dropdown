import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',

  activeItem: null,

  actions: {
    setActiveItem(item) {
      this.set('activeItem', item);
    },

    clearActiveItem() {
      this.set('activeItem', null);
    }
  }
});
