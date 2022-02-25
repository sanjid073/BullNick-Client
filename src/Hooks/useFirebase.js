import axios from 'axios';
import {
	createUserWithEmailAndPassword, FacebookAuthProvider, getAuth,
	GoogleAuthProvider, onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import firebaseConfig from '../firebase.config';

firebaseConfig();

const useFirebase = () => {
	const auth = getAuth();
	const [user, setUser] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const facebookLogin = () => {
		signInWithPopup(auth, facebookProvider)
			.then(res => {
				setUser(res.user);
				setError('');
				const userInfo = {
					email: res.user.email,
					displayName: res.user.displayName,
                };
                if (!res.user.emailVerified) {
                    sendEmailVerification(auth.currentUser).then(() => {
                        <Navigate to='/confirm' />
                    });
                } else {
                    <Navigate to='/' />
                }
				axios
					.post('https://still-shore-10428.herokuapp.com/auth/register', userInfo)
					.then(res => {});
			})
			.catch(error => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				// ...
			})
			.finally(() => {
				setLoading(false);
			});
	};
	const googleLogin = () => {
		signInWithPopup(auth, googleProvider)
			.then(res => {
				setUser(res.user);
				setError('');
				const userInfo = {
					email: res.user.email,
					displayName: res.user.displayName,
                };
                if (!res.user.emailVerified) {
                    sendEmailVerification(auth.currentUser).then(() => {
                        <Navigate to='/confirm' />
                    });
                } else {
                    <Navigate to='/' />
                }
				axios
					.put('https://agile-beyond-99774.herokuapp.com/users', userInfo)
					.then(res => {});
			})
			.catch(error => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				// ...
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const resendEmailVerification = () => {
		sendEmailVerification(auth.currentUser).then(() => {
			alert('Email verification sent!');
		});
	};

	const register = (name, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				const user = { email, displayName: name };
				updateProfile(auth.currentUser, {
					displayName: name,
                });
                if (!res.user.emailVerified) {
                    console.log('email not verified');
                    sendEmailVerification(auth.currentUser).then(() => {
                        <Navigate to='/confirm' />
                    });
                } else {
                    console.log('verified');
                    <Navigate to='/' />
                }
				setUser(user);
				setError('');
				axios
					.put('https://still-shore-10428.herokuapp.com/auth/register', {...user, password: password})
					.then(res => {
						res.data && alert('Successfully signed up!');
					});
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
				// ..
			})
			.finally(() => {
				setLoading(false);
			});
	};
	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				setUser(res.user);
				setError('');
				const userInfo = {
					email: res.user.email,
					displayName: res.user.displayName,
                };
                
                if (!res.user.emailVerified) {
                    sendEmailVerification(auth.currentUser).then(() => {
                        <Navigate to='/confirm' />
                    });
                } else {
                    <Navigate to='/' />
                }

				axios
					.put('https://agile-beyond-99774.herokuapp.com/users', userInfo)
					.then(res => {});
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setLoading(false);
			}
		});
		return unsubscribe;
	}, [auth]);

	const logout = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			// alert('Sign-out successful');
			setUser(null);
		});
    };

	return {
		user,
		error,
		googleLogin,
		facebookLogin,
		register,
		login,
		logout,
		loading,
		resendEmailVerification
	};
};

export default useFirebase;
