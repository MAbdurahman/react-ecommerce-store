import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD65qzRiqT2DNKqgLWBNA-qlyyIH3tsUfc',
	authDomain: 'react-ecommerce-store-1858b.firebaseapp.com',
	databaseURL: 'https://react-ecommerce-store-1858b.firebaseio.com',
	projectId: 'react-ecommerce-store-1858b',
	storageBucket: 'react-ecommerce-store-1858b.appspot.com',
	messagingSenderId: '695229651369',
	appId: '1:695229651369:web:84db696fb20bab09daccb8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;