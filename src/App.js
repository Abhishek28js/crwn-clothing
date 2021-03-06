import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component{
    unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
                setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
                })
          })
        
      }
      setCurrentUser(userAuth);
    })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
         <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUp/>)}/>
         <Route exact path='/' component={HomePage}/>
         <Route exact path='/shop' component={ShopPage}/>
        </Switch>
        
      </div>
    );
  }
  }

  const mapStateToProps=({users})=>({
       currentUser:users.currentUser
  })
 
  const mapDispatchToProps=dispatch=>({
     setCurrentUser:users=>dispatch(setCurrentUser(users))
  })

export default connect(mapStateToProps,mapDispatchToProps)(App);
