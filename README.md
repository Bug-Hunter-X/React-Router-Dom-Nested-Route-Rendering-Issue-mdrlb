# React Router Dom Nested Route Bug

This repository demonstrates a bug related to nested routes in React Router Dom v6.  The issue is that a nested route fails to render when accessed directly, but works when accessed via the parent route.

## Bug Description
The nested route '/contact/form' is defined within the parent route '/contact'. While the parent route renders successfully, navigating directly to '/contact/form' does not render the component. This problem makes the application behave unpredictably and inconsistently when using nested routes directly.

## Setup

1. Clone the repo.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.

## Solution
Refer to `AppSolution.js` for the corrected code. The solution addresses the issue by using `useLocation` hook to redirect to the parent route if only the parent route is accessed.