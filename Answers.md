1. What problem does the context API help solve?

prop drilling problem

..........................

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the only source of information for the store
reducers are the pure functions that take the current state and action and return the new state and tell the store how to do
Store: The store is the object which holds the state of the application.

Single source of truth: It helps to create universal apps. The state of the application is stored in one object tree called store. It means one app, one store

............................

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The difference between Component state and application state is that application state is narrowed down through cursor paths - that is, sub components may not have access to the entire application state - while shared state is always accessible

............................

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed

............................

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Comtext API, not complicated and easy to understand 
