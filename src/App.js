import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'



import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.comopnent'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


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
    // method from firebase auth taking parameter of what the user state is
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // user authenticated session persistence --> when you refresh the page your session is saved
      // you don't have to sign in again
      if (userAuth) {
        // going to use this to check if our db has updated
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState(
              {
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              });

              console.log(this.state)
          });
        }
      // if the user logs out, set user to null from auth Library
        else {
          this.setState({ currentUser: userAuth})
        }
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
      <Header currentUser={this.state.currentUser}/>
        {/* switch - as long as one route matches we know somethign will render. 
        Only one thing will render */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    );
  }
}

export default App;

