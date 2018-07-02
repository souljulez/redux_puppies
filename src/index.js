import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers';
import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create the store with the combined reducer
const store = createStore(combinedReducers, applyMiddleware(thunk))

// Set up the listener
// const unsubscribe = store.subscribe(() => {
//   // Log every state change to the console
//   console.log(store.getState());
// })

// Dispatch actions to create a puppies
// store.dispatch(createPuppy({
//   name: 'Priscilla Queen',
//   breed: 'Australian Shepherd',
//   available: true,
//   id: 1
// }))

// store.dispatch(createPuppy({
//   name: 'Sean Connery',
//   breed: 'Scottish Terrier',
//   available: true,
//   id: 2
// }))

// store.dispatch(adoptPuppy(2))

// store.dispatch(updateFilter('SHOW_AVAILABLE'))

// // Unregister/cancel the listener
// unsubscribe()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
registerServiceWorker();