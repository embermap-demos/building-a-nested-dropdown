import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({

  router: service(),

  url: computed(function() {
    return this.router.urlFor('nested-routes');
  }),

  actions: {
    transitionTo(routeName) {
      this.router.transitionTo(routeName);
    }
  }

});
