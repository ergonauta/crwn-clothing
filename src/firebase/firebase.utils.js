import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBNyLPXhAoi6RiOexkYvA6R20vKxL-HT1M",
	authDomain: "crwn-db-3468a.firebaseapp.com",
	databaseURL: "https://crwn-db-3468a.firebaseio.com",
	projectId: "crwn-db-3468a",
	storageBucket: "crwn-db-3468a.appspot.com",
	messagingSenderId: "404852310350",
	appId: "1:404852310350:web:494e3f87f158fb4ea15e1f",
	measurementId: "G-T8WX3WQC7Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	
	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email, 
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;