import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import UserLoginScreen from './screens/UserLoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingAddressScreen from './screens/ShippingAddressScreen'
import PaymentMethodScreen from './screens/PaymentMethodScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={UserLoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/shipping' component={ShippingAddressScreen} />
          <Route path='/payment' component={PaymentMethodScreen} />



        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;