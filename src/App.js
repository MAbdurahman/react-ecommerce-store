import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInUpPage from './pages/sign-in-up-page/SignInUpPage';
import { auth } from './firebase/firebase-utils';

import './App.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
	this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({
				currentUser: user
			});
			console.log(user);
		});
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	};

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/sign-in' component={SignInUpPage} />
				</Switch>
			</div>
		);
	};
};

export default App;
