# Assignment Manager

This project will use Backbone to manage assignments stored on the `http://tiny-lr.herokuapp.com` server.

Each assignment will have
* Name
* Issued on Date
* Due Date
* Grade

Pages/Routes:

* Overview - List All assignments
  - [X] Fetch All assignments from the server (Model & Collection)
  - [X] User should see a list of assignments (View)
    * [X] Assignment Name
    * [X] Assignment Due Date
    * [X] Link to View More Details
* Create a new assignment (Form)
  - [X] Check that the route is loading (Router)
  - [X] Create New assignment not saved to the server yet (Model)
  - [X] Show the user a Form (View)
  - [X] User can submit form (View)
    * [X] Grab input values
    * [X] Save the model
    * [X] Redirect to home or details
    * [ ] User can see new assignment in list
* Show the full details for an assignment
* Edit an existing assignment
