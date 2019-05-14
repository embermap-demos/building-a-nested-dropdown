import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  router: service(),

  routeParams: computed('route', 'model', function() {
    if (this.route) {
      let models = this.model || [];

      return [ this.route, ...models ];
    }
  }),

  url: computed('routeParams', 'router.currentURL', function() {
    return this.get('router').urlFor(...this.routeParams);
  }),

  actions: {
    closeThenTransition(action) {
      action();
      // console.log(action);
      // debugger;
      this.router.transitionTo(this.url);
    }
  }

});