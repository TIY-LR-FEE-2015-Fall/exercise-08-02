export default Backbone.View.extend({
  tagName: 'form',

  events: {
    submit(ev) {
      // Stop form from actually submitting
      ev.preventDefault();

      // Grab the input values
      var name = this.$el.find('#name').val();
      var issuedAt = this.$el.find('#issuedAt').val();
      var dueAt = this.$el.find('#dueAt').val();
      var grade = this.$el.find('#grade').val();

      // Save the model
      this.model.save({name, issuedAt, dueAt, grade})
        .then(() => {
          Backbone.history.navigate('', {trigger: true});
        });

      // Redirect to home page
    },
  },

  // Render the view when things first launch
  initialize() {
    this.render();
  },

  // Fill in the form element with HTML
  render() {
    this.$el.html(this.template(this.model));
  },

  // The blueprint of what HTML should get shoved into our view
  template(model) {
    return `
      <input type="text" id="name" placeholder="Name">
      <input type="date" id="issuedAt" placeholder="Issued On Date">
      <input type="date" id="dueAt" placeholder="Due Date">
      <input type="number" step="5" min="0" max="100" id="grade" placeholder="Grade">

      <button>Submit</button>
    `;
  },
});
