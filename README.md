# Assignment Manager

This project will use Backbone to manage assignments stored on the `http://tiny-lr.herokuapp.com` server.

Each assignment will have
* Name
* Issued on Date
* Due Date
* Grade

Pages/Routes:

* Overview - List All assignments
* Create a new assignment (Form)
  - [X] Check that the route is loading (Router)
  - [X] Create New assignment not saved to the server yet (Model)
  - [X] Show the user a Form (View)
  - [ ] User can submit form (View)
    * [ ] Grab input values
    * [ ] Save the model
    * [ ] Redirect to home or details
* Show the full details for an assignment
* Edit an existing assignment
