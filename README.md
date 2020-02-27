# Lift Tracker

## Technologies Used
  * JavaScript
  * HTML
  * CSS
  * Bootstrap
  * JQuery
  * Handlebars
  * AJAX

## Planning

### User Stories

  * As a user, I would like to be able to sign up for this application
  * As a user, I would like to be able to sign in and stay signed in
  * As a user, I would like to be able to change my password whenever I feel I need to
  * As a user, I would like to be able to sign out
  * As a user, I would like to be able to view all of my lifts I've entered
  * As a user, I would like to see my lifts of a certain type
  * As a user, I would like to have a dropdown menu of the types of lifts I can do, as opposed to typing it out every time
  * As a user, I want to have multiple exercises attributed to me
  * As a user, I want to make sure lifts are only attributed to one person

### Wireframes

[wireframes](https://imgur.com/gallery/LPm8zZ8)

### Client Setup

The first step in creating the lift tracker client successfully was setting up the
template. The template was provided to us which contained all the necessary links and
scripts to third party technologies (Bootstrap, JQuery, Handlebars). Once I
confirmed that the template was correct by running it on a local server, I pushed
it up to GitHub and deployed it using github pages.

### Authentication

Writing the HTML and Javascript for the Authentication calls was actually rather
simple since a lot of the boilerplate code was already written in my last project.
Most of the changes I made were for the API since I had to connect it to the back
end I made.

### Lift API calls

Writing the HTML and Javascript for the lift API calls, was somewhat different as the
data being sent is different from anything I have done in previous projects. However,
I did manage to make them without too much of a struggle. My biggest issue came down
to a typo in the naming of the html elements.

### UI

Once I had learned that all of the API calls (for both authentication and lifts), the
only other major additon needed was to add UI messaging for all the different CRUD
actions available. Messages were displayed to the user when authentication failed or
succeeded, as well as the user either succussfully or unsuccessfully edits any of
the data in the database.

## Problems Encountered

There was not really any major issue that slowed my progress, but there was a few
intermediate problems that slowed me down somewhat. For one I had trouble getting a
lot of the forms for lift data to format properly (using getFormFields). The issue
came down to me giving the wrong name to all of the input values in the HTML.

I also had some problems sending data to the API in the right format. These problems I
enjoyed solving since I actually had to think in creative ways to parse the correct
data an send it in the correct format to the API.

My other issue was getting handlebars to correctly display the objects it was
returning with the get lifts button. Most of this was due to my lack of experience
using handlebars, but honestly after learning how to use it the correct way I found
it to be a very useful tool for dynamically generating and displaying HTML to the
client.
