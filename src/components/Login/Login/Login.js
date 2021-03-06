import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router';

import { UserContext } from '../../../App'


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();

 const { from } = location.state || { from: { pathname: "/" } };
  
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      
      // The signed-in user info.
    var user = result.user;
    const {displayName, email} = result.user;
    const signedInUser = {displayName, email};
    
    setLoggedInUser(signedInUser);
    history.replace(from);
     console.log(signedInUser)
      
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
 
      }
        
        
       
    return (
        <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">

            <div className="form-group">
            
                <label htmlFor="">User Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div>
                <button style={{backgroundColor:'#1cc7c1', color:'white'}} className="text-primary" type="submit">SUBMIT</button>
            </div>
            <div className="mt-5">
                <button onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>

        </div>
        <div className="col-md-6 d-none d-md-block">
            
        </div>
    </div>
    </div>
    );
};

export default Login;