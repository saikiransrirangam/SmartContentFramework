import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from '@zeta/router/store';

import App from './App';
import reportWebVitals from './reportWebVitals';
const queryClient = new QueryClient();

const { store } = configureStore({
	page: 'SurveyList',
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
		 <QueryClientProvider client={queryClient}>
		 <Provider store={store}>
			<App />
		</Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
		
	// </React.StrictMode>
);

reportWebVitals();