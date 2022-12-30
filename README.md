# Coding challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Problem description:**

We are facing different performance related issues when using this app:
- entering data on /page-b is quite sluggish we can not add many more input fields without making it even worse
  - Fix the underlying performance issue (while keeping the functionality of validating the user input)
  - Add 5 more input fields to prove the solution to work without any input lags (keeping a keyboard letter pressed results in constant adding of said letter)
- navigating between /page-a and /page-b is very slow
  - improve the speed of navigation between both pages

**DO NOT REMOVE ANY <WasteCycles /> COMPONENTS OR wasteCycles FUNCTION CALLS**
  
## Additional Questions

1. What are the key aspects of React, when and why is it superior to e.g. jQuery
2. Explain what redux is responsible for and how it works
3. Explain the different steps of a React Application build process. What tools are involved for what?
4. What do we need to do to ensure cross-browser support & support of outdated browser?
5. What different types of tests are applicable for React Applications and what are their differences? When should we use which type?
6. Explain cyclic dependencies, what are the symptoms and how to fix them
7. What different kinds of CSS animations can be used? What do we need to care about to ensure smooth animations?

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
