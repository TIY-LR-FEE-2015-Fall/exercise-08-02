export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/assignments',

  idAttribute: '_id',

  defaults: {
    name: '',
    issuedAt: '',
    dueAt: '',
    grade: 0,
  },
});
