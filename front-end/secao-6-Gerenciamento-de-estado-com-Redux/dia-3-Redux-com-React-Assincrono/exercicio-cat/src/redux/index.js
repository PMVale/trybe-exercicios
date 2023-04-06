import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import gallery from './reducers';

export const store = createStore(gallery, composeWithDevTools(applyMiddleware(thunk)));

// export const store = createStore(gallery, applyMiddleware(thunk));
