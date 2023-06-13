import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from '@zeta/router/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

const { store } = configureStore({
	page: 'SurveyList',
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
