import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

  router: service(),

  url: computed('routeName', function() {
    return this.router.urlFor(this.routeName);
  }),

  actions: {
    transitionTo() {
      this.router.transitionTo(this.url);
    }
  }

});
