import Assignment from './models/assignment';
import AssignmentCollection from './collections/assignments';
import AssignmentForm from './views/assignment-form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'assignmentsAll',
    new: 'assignmentsNew',
    ':id': 'assignmentsDetail',
    ':id/edit': 'assignmentsEdit',
  },

  assignmentsAll() {
    var allAssignments = new AssignmentCollection();

    allAssignments.fetch();
  },

  assignmentsNew() {
    var assignment = new Assignment();

    var form = new AssignmentForm({model: assignment});

    // document.querySelector('#outlet').innerHTML = '';
    // document.querySelector('#outlet').appendChild(form.el);
    $('#outlet').html(form.el);
  },
});

export default Router;
