import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

  router: service(),

  url: computed('routeName', 'model', function() {
    return this.router.urlFor(this.routeName, ...this.model);
  }),

  actions: {
    closeMenuAndTransitionTo(clearActiveItems) {
      clearActiveItems(0);
      this.router.transitionTo(this.url);
    }
  }

});
