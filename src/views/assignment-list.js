export default Backbone.View.extend({
  tagName: 'ul',

  initialize() {
    // Render with initial data
    this.render();

    // Sets up when to rerender
    this.listenTo(this.collection, 'sync', this.render);
  },

  render() {
    this.$el.html(this.template(this.collection));
  },

  template(collection) {
    return this.collection.map((assignment) => {
      return `<li>${assignment.get('name')} - ${assignment.get('dueAt')} - <a href="#${assignment.id}">View More</a></li>`;
    });
  },
});
