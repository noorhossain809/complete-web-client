import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

      const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          
          const {email} = result.user;
          const signedInUser = {email};
          
          
      
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
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