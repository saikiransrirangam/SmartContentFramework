import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import page from './reducer';

const routesMap = {
	HOME: '/',
	SURVEYS: '/surveys',
	SURVEY: '/surveys/:id',
	QUESTION: '/surveys/:id/question/:questionId',
};

export default function configureStore(preloadedState) {
	const { reducer, middleware, enhancer } = connectRoutes(routesMap);

	const rootReducer = combineReducers({ page, location: reducer });
	const middlewares = applyMiddleware(middleware);
	const enhancers = compose(enhancer, middlewares);

	const store = createStore(rootReducer, preloadedState, enhancers);

	return { store };
}
