import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInUpPage from './pages/sign-in-up-page/SignInUpPage';

import './App.css';



function App() {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/sign-in' component={SignInUpPage} />
			</Switch>
		</div>
	);
}

export default App;
