import Assignment from './models/assignment';
import AssignmentCollection from './collections/assignments';

import AssignmentForm from './views/assignment-form';
import AssignmentList from './views/assignment-list';

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

    var list = new AssignmentList({collection: allAssignments});
    $('#outlet').html(list.el);
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
