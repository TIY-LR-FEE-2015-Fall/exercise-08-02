import Assignment from './models/assignment';
import AssignmentCollection from './collections/assignments';

import AssignmentForm from './views/assignment-form';
import AssignmentList from './views/assignment-list';
import AssignmentDetail from './views/assignment-detail';

var Router = Backbone.Router.extend({
  routes: {
    '': 'assignmentsAll',
    new: 'assignmentsNew',
    ':id': 'assignmentsDetail',
    ':id/edit': 'assignmentsEdit',
  },

  initialize() {
    this.assignments = new AssignmentCollection();

    this.assignments.fetch();
  },

  assignmentsAll() {

    var list = new AssignmentList({collection: this.assignments});
    $('#outlet').html(list.el);
  },

  assignmentsNew() {
    var assignment = new Assignment();

    var form = new AssignmentForm({model: assignment});

    // document.querySelector('#outlet').innerHTML = '';
    // document.querySelector('#outlet').appendChild(form.el);
    $('#outlet').html(form.el);
  },

  assignmentsDetail(assignmentId) {
    var lookupAssignment = () => {
      var assignment = this.assignments.get(assignmentId);

      if (assignment) {
        var details = new AssignmentDetail({model: assignment});

        $('#outlet').html(details.el);
      }
    };

    // Schedule to run on collection sync
    this.assignments.on('sync', lookupAssignment);

    // Run immediately in case collection has already synced
    lookupAssignment();
  },

  assignmentsEdit(assignmentId) {
    var lookupAssignment = () => {
      var assignment = this.assignments.get(assignmentId);

      if (assignment) {
        var details = new AssignmentForm({model: assignment});

        $('#outlet').html(details.el);
      }
    };

    // Schedule to run on collection sync
    this.assignments.on('sync', lookupAssignment);

    // Run immediately in case collection has already synced
    lookupAssignment();
  },
});

export default Router;
