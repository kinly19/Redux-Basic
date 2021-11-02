const redux = require('redux');

//============================================== Notes ==============================================
// const redux = require('redux') - importing redux 
// redux.createStore() - Redux method for creating a redux store (will hold all our states)
// counterReducer - our Reducer function 
// store.subscribe(counterSubscriber) - Adds a change listener. It will be called any time an action is dispatched
//  counterSubscriber - function which our subscribe method calls for us

// Reducer functions - standard js function that will be called by the Redux library, this function 
//  will then always receive two pieces of input, two parameters, the old or existing state and the action 
//  that was dispatched. The Reducer function must return a certain output, it must always return a new... state object 
//  Reducer functions should be a pure function, the same inputs should produce the same outputs
//  there should be no side effects inside of that function, this function should only take given inputs
//  and produce the expected output (a new state object).

//Store - holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
// https://redux.js.org/api/store
// Store Methods
// getState()
// dispatch(action) 
// subscribe(listener)
// replaceReducer(nextReducer)

// getStore() - method which is available on the store created with create store, this will give us 
//  the latest state snapshot after!!! it was updated (no stale states here)
// subscribe() - another method from create store, our change listener. It will be called any time an action... is dispatched
// dispatch() - will dispatch an action, an action is a javascript object with a type property, which acts as an identifier
//===================================================================================================


//Reducer function
const counterReducer = (state = {counter: 0}, action) => {

  //action/setter
  if(action.type === 'increment'){
    return {
      //prev counter state + 1 
      counter: state.counter + 1
    };
  };

  if(action.type === 'decrement'){
    return {
      counter: state.counter - 1
    };
  };

  return state;
};

//create store function
//we pass our reducer function to our create store function, because the store needs to know which reducer is responsible for changing that store.
//reducer works together with the store
const store = redux.createStore(counterReducer);

//subscription function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//to make Redux aware of this subscriber function and tell it that this function should be executed whenever our state changes.
//we reach out to the store and call the subscribe method on that store 
//subscribe method expects a function which Redux will then execute for us (only point at the function we never call it)
store.subscribe(counterSubscriber);

store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});
store.dispatch({type:'increment'});