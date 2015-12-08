export default Backbone.View.extend({
  initialize() {
    this.render();
  },

  events: {
    'click .delete-btn'() {
      this.model.destroy().then(() => {
        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
      <p>name: ${model.get('name')}</p>
      <p>issuedAt: ${model.get('issuedAt')}</p>
      <p>dueAt: ${model.get('dueAt')}</p>
      <p>grade: ${model.get('grade')}</p>

      <p><a href="#${model.id}/edit">Edit</a></p>
      <p><a href="#${model.id}/edit" class="delete-btn">Delete</a></p>
    `;
  },
});
