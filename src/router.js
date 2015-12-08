var Router = Backbone.Router.extend({
  routes: {
    '': 'assignmentsAll',
    new: 'assignmentsNew',
    ':id': 'assignmentsDetail',
    ':id/edit': 'assignmentsEdit',
  },
});

export default Router;
