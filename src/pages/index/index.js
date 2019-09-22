import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../../style/app.scss';
import Router from '../../Router/Router';
import { Provider } from '../../store/redux-hooks';
import store from '../../store/store';

const root = document.querySelector('#root');

const App = props => {
	
	return (
		<Provider value={store}>
			<Router />
		</Provider>
	)
}

ReactDOM.render(
	<App />,
	root
);
