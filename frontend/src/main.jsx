import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import './App.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import OrderListScreen from './screens/admin/OrderListScreen.jsx';
import ProductListScreen from './screens/admin/ProductListScreen.jsx';
import ProductEditScreen from './screens/admin/ProductEditScreen.jsx';
import UserListScreen from './screens/admin/UserListScreen.jsx';
import UserEditScreen from './screens/admin/UserEditScreen.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            {/* Public Routes */}
            <Route index={true} path='/' element={<HomeScreen />} />
            <Route path='/search/:keyword' element={<HomeScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} />
            <Route
                path='/search/:keyword/page/:pageNumber'
                element={<HomeScreen />}
            />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            {/* Private Routes */}
            <Route path='' element={<PrivateRoute />}>
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/order/:id' element={<OrderScreen />} />
                <Route path='/profile' element={<ProfileScreen />} />
            </Route>
            {/* Admin Routes */}
            <Route path='' element={<AdminRoute />}>
                <Route path='/admin/orderlist' element={<OrderListScreen />} />
                <Route
                    path='/admin/productlist'
                    element={<ProductListScreen />}
                />
                <Route
                    path='/admin/productlist/:pageNumber'
                    element={<ProductListScreen />}
                />
                <Route
                    path='/admin/product/:id/edit'
                    element={<ProductEditScreen />}
                />
                <Route path='/admin/userlist' element={<UserListScreen />} />
                <Route
                    path='/admin/user/:id/edit'
                    element={<UserEditScreen />}
                />
            </Route>
        </Route>
    ),
    {
        shouldUpdateScroll: () => [0, 0],
    }
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <Provider store={store}>
            <PayPalScriptProvider deferLoading={true}>
                <RouterProvider router={router} />
            </PayPalScriptProvider>
        </Provider>
    </HelmetProvider>
);
