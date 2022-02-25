import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './Context/AuthContext';
import Confirmation from './Pages/Confirmation';
import Login from './Pages/Login';
import Payment from './Pages/Payment/Payment';
import PaymentSuccess from './Pages/Payment/PaymentSuccess';
import Premium from './Pages/Premium/Premium';
import PremiumArticles from './Pages/Premium/PremiumArticles';
import Signup from './Pages/Signup';

function App() {
	const { user, loading } = useAuth();
	console.log(user?.emailVerified);
	// logout();
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path='/*'
					element={<Navigate to={user?.email ? '/home' : '/sign-up'} />}
				/>
				<Route
					path='/home'
					element={
						<PrivateRoute>
							<Premium />
						</PrivateRoute>
					}
				/>
				<Route
					path='/premium-articles'
					element={
						<PrivateRoute>
							<PremiumArticles />
						</PrivateRoute>
					}
				/>
				<Route path='/sign-up' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/confirm' element={<Confirmation />} />
				<Route
					path='/payment'
					element={
						<PrivateRoute>
							<Payment />
						</PrivateRoute>
					}
				/>
				<Route
					path='/payment-success'
					element={
						<PrivateRoute>
							<PaymentSuccess />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
