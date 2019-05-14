import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nav-menu');

  this.route('nested-routes', function() {
    this.route('first', { path: '/:first' }, function() {
      this.route('second', { path: '/:second' });
    });
  });
});

export default Router;
