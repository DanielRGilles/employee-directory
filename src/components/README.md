# components

React uses a component-based style. The bulk of our applications are made up of our own custom presentational components that are specific to our applications. Our individual components both large and small that make up our UI will live in this folder.

Each custom component ideally should have its own folder inside of the components folder. Having a folder for each component allows us to group together the jsx file, our css, and the test in one location.

This makes it easy to find code related to specific components. Alternatively, if you no longer need a component you can then delete the entire folder and remove all the code attached to the component.

You can also group components together under a common folder.
---
# needed components
1. Header - title in Upper left, empty middle div, login status in upper right
2. UserForm -- this form is used for auth sign in and sign up
3. Private Route -- this will be used by react router dom to protect routes
4. Sign in and sign out button conditionally rendered and used in header 
5. A loading component to be conditionally rendered
6. Edit Profile button