import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Normal imports
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
// import HomePage from './components/pages/homepage/homepage.component';
// import ShopPage from './components/pages/shop/shop.component';
// import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './components/pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

// Lazy imports
const HomePage = lazy(() =>
  import('./components/pages/homepage/homepage.component')
);
const ShopPage = lazy(() => import('./components/pages/shop/shop.component'));
const SignInAndSignUp = lazy(() =>
  import('./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() =>
  import('./components/pages/checkout/checkout.component')
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
