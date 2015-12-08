import AssignmentRouter from './router';

export default function() {
  var r = new AssignmentRouter();

  Backbone.history.start();
}
