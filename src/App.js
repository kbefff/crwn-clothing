import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.comopnent';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

// class so we can store state
// store state of auth
class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  // we want to know when people have signed in and signed out
  // this is an open subscription between our app and firebase
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // method from firebase auth taking parameter of what the user state is
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // user authenticated session persistence --> when you refresh the page your session is saved
      // you don't have to sign in again
      if (userAuth) {
        // going to use this to check if our db has updated
        const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
                setCurrentUser ({
                  id: snapShot.id,
                  ...snapShot.data()
              })
          });
        }
      // if the user logs out, set user to null from auth Library
        // else {
          setCurrentUser(userAuth)
        // }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      {/* place header outside switch and routes that contain all page components
      by doing this our header is always present and rendered */}
      {/* header needs state so we know when there should be a logout option */}
      <Header/>
        {/* switch - as long as one route matches we know somethign will render. 
        Only one thing will render */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact path='/signin' 
            render={() => 
              this.props.currentUser ? (
              <Redirect to='/' />
              ): (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

