import Assignment from '../models/assignment';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/assignments',

  model: Assignment,
});
